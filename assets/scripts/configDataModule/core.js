"use stric";
import communicate from 'https://74senpai.github.io/coFiGre/resources/js/Core/communicate.js';
import config from './config.js';
communicate.unlogger('all', 'all', true);

communicate.send('output', config.get_data_config('home'), 'home');
communicate.view_render('body', 'home');


