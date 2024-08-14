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

communicate.send('output', config.get_data_config('playlist'), 'playlist');
communicate.view_render('#box-playlist', 'playlist');



