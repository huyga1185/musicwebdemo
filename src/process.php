<?php
    include_once('connect.php');

    $sql = "SELECT 
                songs.title AS song_title, 
                songs.duration, 
                songs.genre AS song_genre, 
                songs.songurl, 
                songs.thumbnail, 
                songs.songnumber, 
                album.title AS album_title, 
                album.genre AS album_genre, 
                album.description AS album_description, 
                album.releaseyear, 
                artist.name AS artist_name, 
                artist.description AS artist_description, 
                artist.avatarurl
            FROM songs
            INNER JOIN album ON songs.albumid = album.albumid
            INNER JOIN artist ON songs.artistid = artist.artistid;";
    $result = $conn->query($sql);
    $data = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
    $conn->close();
    header('Content-Type: application/json');
    echo json_encode($data);
?>