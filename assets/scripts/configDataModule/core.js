"use stric";
import communicate from 'https://74senpai.github.io/coFiGre/resources/js/Core/communicate.js';
import config from './config.js';
communicate.unlogger('all', 'all', true);

communicate.send('output', config.get_data_config('nav-menu'), 'nav_menu');
communicate.view_render('#menu', 'nav_menu');

communicate.send('output', config.get_data_config('footer'), 'footer');
communicate.view_render('.footer-links', 'footer');

communicate.send('output', config.get_data_config('menu'), 'menu');
communicate.view_render('.top-navigation', 'menu');

let isPlay = false;
let afterSong = "";

(async()=>{

    await communicate.get_data_API('fakeAPI.json', 'json', 'sontung');
    communicate.send('output', config.get_data_config('playlist'), 'playlist');
    communicate.view_render('#box-playlist', 'playlist');
    communicate.declare_action('link', (site)=>{
        if(site){
            communicate.send('output', config.get_data_config(`${site}`), `${site}`);
            communicate.view_render('#box-playlist', `${site}`);
            return;
        }
        alert('Chức năng đang được phát triển');
    });
    communicate.declare_action('play', (_this)=>{
        const audi =  _this.querySelector('audio');
        if(!(afterSong === _this)){
            audi.load();
            afterSong = _this;
        }
       if(!isPlay){
            audi.play();
            _this.querySelector('span').innerHTML = '<i class="fa-solid fa-pause"></i>';
        }else{
            audi.pause();
            _this.querySelector('span').innerHTML = '<i class="fa-solid fa-play"></i>';
        }
        isPlay = !isPlay;
    });
    communicate.action(true);
})();
