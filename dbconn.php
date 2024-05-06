<?php
$localhost = "localhost:5000";
$db="shopping_cart";
$user="root";
$pwd="root";

$conn = new mysqli($localhost, $user, $pwd, $db);
if($conn->connect_error){
    echo "something went wrong" . $conn->connect_error;
    exit();
}