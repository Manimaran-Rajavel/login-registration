<?php

$sup_email = $_POST['sup_email'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
$phone = $_POST['phone'];
$password = $_POST['password'];

require_once "db_conn.php";

$upd_sql = "UPDATE details SET first_name='$fname', last_name='$lname', dob='$dob', gender='$gender', email='$email', phone_no='$phone', password='$password' WHERE email='$sup_email'";

if($conn->query($upd_sql)){
    echo json_encode('true');
}

?>