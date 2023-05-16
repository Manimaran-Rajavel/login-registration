<?php

require_once "db_conn.php";

$firstname = $_POST['firstName'];
$lastName = $_POST['lastName'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$password = $_POST['password'];

$insert_sql = "INSERT INTO details (first_name, last_name, dob, gender, email, phone_no, password) VALUES ('$firstname', '$lastName', '$dob', '$gender', '$email', '$phoneNumber', '$password')";

if($conn->query($insert_sql)){
    echo json_encode("true");
}else{
    echo json_encode("false"); 
}

$conn->close();

?>