"use stric";
import communicate from 'https://74senpai.github.io/coFiGre/resources/js/Core/communicate.js';
import config from './config.js';

const $ = document.querySelector.bind(document);
// communicate.unlogger('all', 'all', true);

communicate.send('output', config.get_data_config('nav-menu'), 'nav_menu');
communicate.view_render('#menu', 'nav_menu');

communicate.send('output', config.get_data_config('footer'), 'footer');
communicate.view_render('.footer-links', 'footer');

communicate.send('output', config.get_data_config('menu'), 'menu');
communicate.view_render('.top-navigation', 'menu');

let isPlay = false;
let indexCurrent = "";
let isDra = false;

function timeAudio(){
    const audi = $(`[data-index="${indexCurrent}"] audio`);
    audi.addEventListener('loadedmetadata',()=>{
        $('.duration-time').innerText = secondToMin(audi.duration);
    });
}

function pause(){
    const tmp = $(`[data-index="${indexCurrent}"]`);
    const audi = tmp.querySelector('audio');
    audi.pause();
    tmp.querySelector('.icon-play').innerHTML = '<i class="fa-solid fa-play"></i>';
    tmp.classList.remove('active');
    $('.controls .play-btn').innerHTML = '<i class="fa-solid fa-play"></i>';
    isPlay = !isPlay;
}

function player(isNext, isSelect, continute){
    if(!isSelect){
        const  after = $(`[data-index="${indexCurrent}"]`);
        after.querySelector('audio').pause();
        after.querySelector('.icon-play').innerHTML = '<i class="fa-solid fa-play"></i>';
        after.classList.remove('active');
        $('.controls .play-btn').innerHTML = '<i class="fa-solid fa-play"></i>';
        if(isNext){
            indexCurrent+=1;
        }else{
            indexCurrent-=1;
        }
        isPlay = false;
    }
    const tmp = $(`[data-index="${indexCurrent}"]`);
    const audi = tmp.querySelector('audio');
    if(!isPlay){
        if(!continute){
            audi.currentTime = 0;
        }
        audi.play();
        tmp.querySelector('.icon-play').innerHTML = '<i class="fa-solid fa-pause"></i>';
        tmp.classList.add('active');
        $('.controls .play-btn').innerHTML = '<i class="fa-solid fa-pause"></i>';
    }else{
        audi.pause();
        tmp.querySelector('.icon-play').innerHTML = '<i class="fa-solid fa-play"></i>';
        tmp.classList.remove('active');
        $('.controls .play-btn').innerHTML = '<i class="fa-solid fa-play"></i>';  
    }
    $('.song-info img').src = $(`[data-index="${indexCurrent}"] img`).src;
    isPlay = !isPlay;

    timeAudio();
    audi.volume = $('.volume-slider').value / 100;
    controlDra(audi);
    
    return;
}

function secondToMin(seconds){   
    if(!typeof seconds === Number){
        seconds = parseInt(seconds);
    }
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function controlDra(audi){
    const volumeSlider = $('.volume-slider');
    if(volumeSlider){
        volumeSlider.addEventListener('input', () => {
            audi.volume = volumeSlider.value / 100;
        });
    } else {
        console.error('.volume-slider element not found.');
    }

    const processSlider = $('.progress input');
    let tmp = 0;
    processSlider.addEventListener('input', () => {
        const value = processSlider.value;
        const percent = (value / processSlider.max) * 100;
        tmp  = (percent / 100) * audi.duration;
        $('.current-time').innerText = secondToMin(tmp);
    });
    processSlider.addEventListener('mousedown', ()=>{
        isDra = true;
    });
    processSlider.addEventListener('mouseup', ()=>{
        isDra = false;
        audi.currentTime = tmp;
    });

    audi.addEventListener('timeupdate', ()=>{
        if(!isDra){
            const currTime = audi.currentTime;
            $('.current-time').innerText = secondToMin(currTime);
            const max = $('.progress input').max;
            const duration = audi.duration;
            const precent = currTime / duration*100;
            $('.progress input').value = `${(max * precent) / 100}`;
        }
    });
}


(async()=>{

    await communicate.get_data_API('fakeAPI.json', 'json', 'sontung');
    await communicate.get_data_API('src/process.php', 'json', 'sql_data');
    communicate.send('output', config.get_data_config('playlist'), 'playlist');
    communicate.view_render('#box-playlist', 'playlist');
    communicate.send('output', config.get_data_config('control-bar'), 'control_bar');
    
    $('.playlist-grid').addEventListener('mousemove', function(event) {
        const rect = this.getBoundingClientRect();
        const mouseX = event.clientX;
    
        const distanceToLeft = mouseX - rect.left;
        const distanceToRight = rect.right - mouseX;
    
        const value = this.scrollWidth / 6;
        if (distanceToLeft < 100) {
            setTimeout(()=>{
                this.scrollLeft -= value; 
            }, 500);
        }
        if (distanceToRight < 120) {
            setTimeout(()=>{
                this.scrollLeft += value; 
            }, 500);
        }
    });

    communicate.declare_action('link', (site)=>{
        if(site){
            communicate.send('output', config.get_data_config(`${site}`), `${site}`);
            communicate.view_render('#box-playlist', `${site}`);
            return;
        }
        alert('Chức năng đang được phát triển');
    });

    communicate.declare_action('play', (index) => {
       
        if (typeof indexCurrent === "string") {
            communicate.view_render('#control', 'control_bar');
            if (index !== undefined && index !== null) {
                indexCurrent = index;
            }
            $('.song-info img').src = $(`[data-index="${indexCurrent}"] img`).src;
        }
        const continute = (indexCurrent === index) || index == null;
        if (index !== null && typeof index === 'number') {
            if(isPlay && indexCurrent != index) pause();
            indexCurrent = index;
        }
        player(false, true, continute);
    });
    
    communicate.declare_action('next', (isNext)=>{
        if(isNext){
            player(true,false,false);
        }else{
            player(false,false,false);
        }
    });

    communicate.action(true);
})();
