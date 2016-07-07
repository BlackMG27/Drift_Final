<?php
//gets incoming data and puts into a data structure
$result = array(

	"Employer_Name" => $_POST['patient_e_name'],
	"Employer_Address" => $_POST['patient_e_address'],
	"Employer_City" => $_POST['patient_e_city'],
	"Employer_State" => $_POST['patient_e_state'],
	"Employer_Zip_Code" => $_POST['patient_e_zcode'],
	"Employer_Phone" => $_POST['patient_e_ephone'],
	"Work_Phone" => $_POST['patient_e_wphone'],
	"Work_Email" => $_POST['patient_e_wemail']


);
$GLOBALS['d'] = [];
//will have to create seperate PHP files	
	
//opens the JSON File
$myfile = fopen("registration_employer.json", "w") or die("Unable to open file!");

fwrite($myfile, json_encode($result, JSON_PRETTY_PRINT));
fclose($myfile);
//retrievs the data
//$result['FirstName']
echo "success";

?>