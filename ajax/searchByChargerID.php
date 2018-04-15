<?php
require_once 'dbConn.php'; // The mysql database connection script
$charger_id = "";
if(isset($_GET['charger_id'])){
	$charger_id = $mysqli->real_escape_string($_GET['charger_id']);
}
$query="SELECT id, first_name, last_name from persons where charger_id like '$charger_id'";
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