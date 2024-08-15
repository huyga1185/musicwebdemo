"use stric";
import communicate from 'https://74senpai.github.io/coFiGre/resources/js/Core/communicate.js';
import config from './config.js';

const $ = document.querySelector.bind(document);
communicate.unlogger('all', 'all', true);

communicate.send('output', config.get_data_config('nav-menu'), 'nav_menu');
communicate.view_render('#menu', 'nav_menu');

communicate.send('output', config.get_data_config('footer'), 'footer');
communicate.view_render('.footer-links', 'footer');

communicate.send('output', config.get_data_config('menu'), 'menu');
communicate.view_render('.top-navigation', 'menu');

let isPlay = false;
let afterSong = "";
let indexCurrent = 0;

(async()=>{

    await communicate.get_data_API('fakeAPI.json', 'json', 'sontung');
    communicate.send('output', config.get_data_config('playlist'), 'playlist');
    communicate.view_render('#box-playlist', 'playlist');

    communicate.send('output', config.get_data_config('control-bar'), 'control_bar');
    communicate.view_render('#control', 'control_bar');

    $('.playlist-grid').addEventListener('mousemove', function(event) {

        const rect = this.getBoundingClientRect();
        const mouseX = event.clientX;
    
        const distanceToLeft = mouseX - rect.left;
        const distanceToRight = rect.right - mouseX;
    
        const value = this.scrollWidth;
        if (distanceToLeft < 100) {
            this.scrollLeft -= value;
        }
        if (distanceToRight < 120) {
            this.scrollLeft += value; 
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

    $('.song-info img').src = $(`[data-index="${indexCurrent}"] img`).src;
    communicate.declare_action('play', (_this, index)=>{
        if(!_this && !index){
            if(!isPlay){
                const tmp = $(`[data-index="${indexCurrent}"]`);
                tmp.querySelector('audio').play();
                tmp.querySelector('.icon-play').innerHTML = '<i class="fa-solid fa-pause"></i>';
                tmp.classList.add('active');
                $('.play-btn').innerHTML = '<i class="fa-solid fa-pause"></i>';
            }else{
                const tmp = $(`[data-index="${indexCurrent}"]`);
                tmp.querySelector('audio').pause();
                tmp.querySelector('.icon-play').innerHTML = '<i class="fa-solid fa-play"></i>';
                tmp.classList.remove('active');
                $('.play-btn').innerHTML = '<i class="fa-solid fa-play"></i>';
            }
            isPlay = !isPlay;
            return;
        }
        const audi =  _this.querySelector('audio');
        if(indexCurrent != index && isPlay){
            const tmp = $(`[data-index="${indexCurrent}"]`);
            tmp.querySelector('audio').pause();
            tmp.querySelector('.icon-play').innerHTML = '<i class="fa-solid fa-play"></i>';
            tmp.classList.remove('active');
            isPlay = !isPlay;
        }
        if(afterSong !== _this){
            audi.load();
            afterSong = _this;
        }
        const current = $(`[data-index="${index}"]`);
       if(!isPlay){
            audi.play();
            _this.querySelector('span').innerHTML = '<i class="fa-solid fa-pause"></i>';
            current.classList.add('active');
            indexCurrent = index;
        }else{
            audi.pause();
            _this.querySelector('span').innerHTML = '<i class="fa-solid fa-play"></i>';
            current.classList.remove('active');
        }

        $('.song-info img').src = $(`[data-index="${indexCurrent}"] img`).src;
        isPlay = !isPlay;
    });
    communicate.action(true);
})();
