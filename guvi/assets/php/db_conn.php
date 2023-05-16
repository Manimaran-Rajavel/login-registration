<?php

$conn = new mysqli("localhost", "root", "", "guvi");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>