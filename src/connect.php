<?php
// Thay đổi các thông tin kết nối sau cho phù hợp
$servername = "localhost";
$username = "root"; // Mặc định là root
$password = ""; // Mặc định không có mật khẩu
$dbname = "music"; // Tên cơ sở dữ liệu của bạn

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);
?>
