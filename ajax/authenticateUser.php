<?php
require_once 'dbConn.php'; // The mysql database connection script
$chargerid = "";
if(isset($_GET['chargerid'])){
	$chargerid = $mysqli->real_escape_string($_GET['chargerid']);
}
$query="SELECT id, role, first_name, last_name from persons where charger_id like '$chargerid'";
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