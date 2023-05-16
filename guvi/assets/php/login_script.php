<?php

$password = $_POST['password'];
$email = $_POST['email'];

require_once "db_conn.php";

$result = $conn->query("SELECT * FROM details WHERE email='$email' AND password='$password'");

if($result->num_rows > 0){

    $stor_dta = $result->fetch_assoc();
    
    // $redis = new Redis();
    // $redis->connect('localhost', 6379);
    // $redis->set("f_name".$stor_dta['email'], $stor_dta['first_name']);
    // $redis->set("l_name".$stor_dta['email'], $stor_dta['last_name']);
    // $redis->set("dob".$stor_dta['email'], $stor_dta['dob']);
    // $redis->set("gender".$stor_dta['email'], $stor_dta['gender']);
    // $redis->set("email".$stor_dta['email'], $stor_dta['email']);
    // $redis->set("phone_no".$stor_dta['email'], $stor_dta['phone_no']);
    // $redis->set("password".$stor_dta['email'], $stor_dta['password']);

    echo json_encode($stor_dta['email']);
}
else{
    echo json_encode("false");
}

$conn->close();
?>