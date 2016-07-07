<?php
//gets incoming data and puts into a data structure
$result = array(
	"Personal_First_Name" => $_POST['patient_p_fname'],
	"Personal_Last_Name" => $_POST['patient_p_lname'],
	"Personal_Birth_Date" => $_POST['patient_p_bdate'],
	"Personal_Age" => $_POST['patient_p_age'],
	"Personal_Address" => $_POST['patient_p_address'],
	"Personal_City" => $_POST['patient_p_city'],
	"Personal_State" => $_POST['patient_p_state'],
	"Personal_Zip_Code" => $_POST['patient_p_zcode'],
	"Personal_Race" => $_POST['patient_p_race'],
	"Personal_Ethnicity" => $_POST['patient_p_ethnic'],
	"Personal_Marital_Status" => $_POST['patient_p_mstatus'],
	"Personal_Sex" => $_POST['patient_p_sex'],
	"Personal_Home_Phone" => $_POST['patient_p_hphone'],
	"Personal_Cell_Phone" => $_POST['patient_p_cphone'],
	"Personal_Social_Security_#" => $_POST["patient_p_ssn"],
	"Personal_Religion" => $_POST['patient_p_religion']

);
$GLOBALS['d'] = [];
//will have to create seperate PHP files	
	
//opens the JSON File
$myfile = fopen("registration.json", "w") or die("Unable to open file!");

fwrite($myfile, json_encode($result, JSON_PRETTY_PRINT));
fclose($myfile);
//retrievs the data
//$result['FirstName']
echo "success";

?>