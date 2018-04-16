<?php
require_once 'dbConn.php'; // The mysql database connection script
$userid = "";
if(isset($_GET['userid'])){
	$userid = $mysqli->real_escape_string($_GET['userid']);
}
$firstName = "";
if(isset($_GET['firstName'])){
	$firstName = $mysqli->real_escape_string($_GET['firstName']);
}
$middleName = "";
if(isset($_GET['middleName'])){
	$middleName = $mysqli->real_escape_string($_GET['middleName']);
}
$lastName= "";
if(isset($_GET['lastName'])){
	$lastName = $mysqli->real_escape_string($_GET['lastName']);
}
$addressStreet = "";
if(isset($_GET['addressStreet'])){
	$addressStreet = $mysqli->real_escape_string($_GET['addressStreet']);
}
$addressCity = "";
if(isset($_GET['addressCity'])){
	$addressCity = $mysqli->real_escape_string($_GET['addressCity']);
}
$addressState = "";
if(isset($_GET['addressCity'])){
	$addressState = $mysqli->real_escape_string($_GET['addressState']);
}
$addressZip = "";
if(isset($_GET['addressZip'])){
	$addressZip = $mysqli->real_escape_string($_GET['addressZip']);
}
$phone = "";
if(isset($_GET['phone'])){
	$phone = $mysqli->real_escape_string($_GET['phone']);
}
$email = "";
if(isset($_GET['email'])){
	$email = $mysqli->real_escape_string($_GET['email']);
}

$query="update persons
set first_name = '$firstName', middle_name = '$middleName', last_name = '$lastName', address_street = '$addressStreet',
address_city = '$addressCity', address_state = '$addressState', address_zip = '$addressZip', phone = '$phone', email = '$email'
where id = '$userid'";

$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$result = $mysqli->affected_rows;

# JSON-encode the response
echo $json_response = json_encode($arr);
  ?>