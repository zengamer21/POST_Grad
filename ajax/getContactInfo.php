<?php
require_once 'dbConn.php'; // The mysql database connection script
$userid = "";
if(isset($_GET['userid'])){
	$userid = $mysqli->real_escape_string($_GET['userid']);
}
$query="SELECT first_name, middle_name, last_name, address_street, address_city, address_state, address_zip, phone, email from persons where id = '$userid'";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$arr = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$arr[] = $row;
	}
}
# JSON-encode the response
echo $json_response = json_encode($arr);
  ?>