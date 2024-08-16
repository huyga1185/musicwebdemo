import communicate from 'https://74senpai.github.io/coFiGre/resources/js/Core/communicate.js';

function navMenu(){
    return`
        <div class="nav-menu">
                <ul>
                   <li>
                       <a href="#" onclick="handle.link('playlist')" >
                           <span class="icon-home"></span>
                           <span>Online Music</span> <!-- Tiêu đề nút Trang Chủ -->
                       </a>
                   </li>
                   <li>
                       <a href="#" onclick="handle.link()" >
                           <span class="icon-home"></span>
                           <span>Discovery</span> <!-- Tiêu đề nút Trang Chủ -->
                       </a>
                   </li>
                   <li>
                       <a href="#" onclick="handle.link()" >
                           <span class="icon-search"></span>
                           <span>Artists</span> <!-- Tiêu đề nút Tìm Kiếm -->
                       </a>
                   </li>
                   <li>
                       <a href="#" onclick="handle.link('albums')" >
                           <span class="icon-library"></span>
                           <span>Albums</span> <!-- Tiêu đề nút Thư Viện -->
                       </a>
                   </li>
                   <li>
                       <a href="#" onclick="handle.link()" >
                           <span class="icon-library"></span>
                           <span>Stations</span> <!-- Tiêu đề nút Thư Viện -->
                       </a>
                   </li>
                   <li>
                       <a href="#" onclick="handle.link()" >
                           <span class="icon-library"></span>
                           <span>Music</span> <!-- Tiêu đề nút Thư Viện -->
                       </a>
                   </li>
               </ul>
           </div>
   
           <div class="nav-secondary">
               <ul>
                   <li>
                       <a href="#" onclick="handle.link()">
                           <span class="icon-create-playlist"></span>
                           <span>Your Music</span> <!-- Tiêu đề nút Tạo Playlist -->
                       </a>
                   </li>
                   <li>
                       <a href="#" onclick="handle.link()" >
                           <span class="icon-liked-songs"></span>
                           <span>Download</span> <!-- Tiêu đề nút Bài Hát Yêu Thích -->
                       </a>
                   </li>
               </ul>
           </div>
    `;
}

function footer(){
    return `
         <ul>
                <li>
                    <a href="#" onclick="handle.link()" >Cookies</a>
                </li>
                <li>
                    <a href="#" onclick="handle.link()" >Riêng Tư</a> <!-- Liên kết Chính sách Riêng Tư -->
                </li>
            </ul>
    `;
}

function controlBar(){
    return`
        <div class="music-player-component">
            <div class="music-player">
                <div class="song-info">
                    <img src="" alt="Album Art" class="album-art">
                    <div class="song-details">
                        <h4 class="name-song">Hãy Trao Cho Anh</h4>
                        <p class="author">Sơn Tùng</p>
                    </div>
                </div>
                <div class="controls">
                    <div class="loop-btn"><i class="fa-solid fa-arrows-rotate"></i></div>
                    <div class="backward-btn" onclick="handle.next(false)"><i class="fa-solid fa-backward"></i></div>
                    <div class="play-btn" onclick="handle.play()"><i class="fa-solid fa-play"></i></div>
                    <div class="next-btn" onclick="handle.next(true)"><i class="fa-solid fa-forward"></i></div>
                    <div class="random-btn"><i class="fa-solid fa-shuffle"></i></div>
                </div>
                <div class="progress">
                    <span class="current-time">0:00</span>
                    <input type="range" value="0" min="0" max="246">
                    <span class="duration-time">0:00</span>
                </div>
                <div class="extra-controls">
                    <div class="volume-btn"><i class="fa-solid fa-volume-low"></i></div>
                    <input type="range" class="volume-slider" min="0" max="100" value="50">
                </div>
            </div>
        </div>
    `;
}

function playlist1(){
    const nhac_sep = communicate.request_data('store', 'sontung');
    const bai_hat = nhac_sep.play_list;
    let HTMLs = "";
    let length = bai_hat.length;
    for(let i = 0 ; i <  length; i++){
        HTMLs += `
            <div class="playlist-item" data-index="${i}">
                
                <img src="${bai_hat[i].img}" />
                
                <div class="play-button" onclick="handle.play(${i})">
                    <span class="icon-play" >
                        <i class="fa-solid fa-play"></i>
                    </span>
                    <audio preload="none">
                        <source src="${bai_hat[i].audio_src}" type="audio/ogg">
                    </audio>
                </div>
                
                <h4>${bai_hat[i].name_song}</h4> 
                <p>${bai_hat[i].author}</p>
            </div>
        `;
    }
    return HTMLs;
    
}

function playlist2(){
    const data = communicate.request_data('store', 'sql_data');
    const playList = data.play_list;

    let HTMLs = "";
    let length = playList.length;
    for(let i = 0 ; i <  length; i++){
        HTMLs += `
            <div class="playlist-item" data-index="${i}">
                
                <img src="${playList[i].thumbnail}" />
                
                <div class="play-button" onclick="handle.play(${i})">
                    <span class="icon-play" >
                        <i class="fa-solid fa-play"></i>
                    </span>
                    <audio preload="none">
                        <source src="${playList[i].songurl}" type="audio/ogg">
                    </audio>
                </div>
                
                <h4>${playList[i].song_title}</h4> 
                <p>${playList[i].artist_name}</p>
            </div>
        `;
    }
    return HTMLs;
}

function body(){
    return `
        
    `;
}

function user_menu(){
    return`
        <div class="nav-buttons">
            </div>

            <div class="user-menu">
                <input type="textbox" placeholder="Tim Kiem">
                <ul>
                    <li>
                        <a href="#" onclick="handle.link()" >Thong bao</a> <!-- Liên kết Tải Về -->
                    </li>
                    <li>
                        <a href="#" onclick="handle.link()" >Hỗ Trợ</a> <!-- Liên kết Tải Về -->
                    </li>
                    <li class="divider">|</li>
                    <li>
                        <a href="#" onclick="handle.link()" >Đăng Ký</a> <!-- Liên kết Đăng Ký -->
                    </li>
                </ul>
                <!-- Nút Đăng Nhập -->
            </div>
    `;
}

function playlist_Section(){
    return `
        <div class="playlist-section">
                <h2>Danh Sách Phát Nhạc</h2>
                <div class="playlist-grid">
                    ${playlist1()}
                </div>
        </div>
        <div class="playlist-section">
                <h2>Tập Trung</h2>
                <div class="playlist-grid">
                    ${playlist2()}
                </div>
        </div>
    `;
}

function albums() {
    return `
    <div class="playlist-section">
        <h2>Danh Sách Ablums</h2>
        <div class="playlist-grid">
            <div class="playlist-item">
            <img src="https://tse3.mm.bing.net/th?id=OIP.osWGBcVDZuQ0Mvlo_VFxlgHaEK&pid=Api&P=0&h=180" />
            <div class="play-button">
                <span class="icon-play"></span>
                </div>
                <h4>Nhac Cua Sep</h4> 
                <p>Thư giãn và tận hưởng với những bản nhạc cua sep Tung</p>
            </div>
        </div>
    </div>
        
    `;
}

const config = {
    get_data_config(type){
        switch(type){
            case "header":
                return header();
            case "footer":
                return footer();
            case "menu":
                return user_menu();
            case "playlist":
                return playlist_Section();
            case "nav-menu":
                return navMenu();
            case "albums":
                return albums();
            case "control-bar":
                return controlBar();
        }
    }
}

export default config;