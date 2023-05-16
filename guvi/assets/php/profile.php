<?php

$email = $_POST['email'];

require_once "db_conn.php";

$sql_sel = "SELECT * FROM details WHERE email='$email'";
$result = $conn->query($sql_sel);

if($result->num_rows > 0){
    $str_data = $result->fetch_assoc();
    $data = array('f_name'=>$str_data['first_name'], 'l_name'=>$str_data['last_name'], 'dob'=>$str_data['dob'], 'gender'=>$str_data['gender'], 'r_email'=>$str_data['email'], 'phone_no'=>$str_data['phone_no'], 'password'=>$str_data['password']);

    echo json_encode($data);
}

$conn->close();

?>