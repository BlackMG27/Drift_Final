<?php
//gets incoming data and puts into a data structure
$result = array(

	"Relative_First_Name" => $_POST['patient_nr_fname'],
	"Relative_Last_Name" => $_POST['patient_nr_lname'],
	"Relative_Relation" => $_POST['patient_nr_relation'],
	"Relative_Address" => $_POST['patient_nr_address'],
	"Relative_City" => $_POST['patient_nr_city'],
	"Relative_State" => $_POST['patient_nr_state'],
	"Relative_Zip_Code" => $_POST['patient_nr_zcode'],
	"Relative_Employment_Status" => $_POST['patient_nr_estatus'],
	"Relative_Employer_Name" => $_POST['patient_nr_ename'],
	"Relative_Home_Phone" => $_POST['patient_nr_hphone'],
	"Relative_Work_Code" => $_POST['patient_nr_wphone']

);
$GLOBALS['d'] = [];
//will have to create seperate PHP files	
	
//opens the JSON File
$myfile = fopen("registration_relative.json", "w") or die("Unable to open file!");

fwrite($myfile, json_encode($result, JSON_PRETTY_PRINT));
fclose($myfile);
//retrievs the data
//$result['FirstName']
echo "success";

?>