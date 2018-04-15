<?php
require_once 'dbConn.php'; // The mysql database connection script
$last_name = "";
if(isset($_GET['last_name'])){
	$last_name = $mysqli->real_escape_string($_GET['last_name']);
}
$query="SELECT id, first_name, last_name from persons where last_name like '$last_name'";
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