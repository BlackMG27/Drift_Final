<?php
//gets incoming data and puts into a data structure
$result = array(

	"Emergency_First_Name" => $_POST['patient_em_fname'],
	"Emergency_Last_Name" => $_POST['patient_em_lname'],
	"Emergency_Relation" => $_POST['patient_em_relation'],
	"Emergency_Home_Phone" => $_POST['patient_em_hphone'],
	"Emergency_Work_Code" => $_POST['patient_em_wphone'],
	"Emergency_Cell_Phone" => $_POST['patient_em_cphone']

);
$GLOBALS['d'] = [];
//will have to create seperate PHP files	
	
//opens the JSON File
$myfile = fopen("registration_emergency.json", "w") or die("Unable to open file!");

fwrite($myfile, json_encode($result, JSON_PRETTY_PRINT));
fclose($myfile);
//retrievs the data
//$result['FirstName']
echo "success";

?>