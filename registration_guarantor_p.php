<?php
//gets incoming data and puts into a data structure



$result = array(
	"guarantor_First_Name" => $_POST['guarantor_p_fname'],
	"guarantor_Last_Name" => $_POST['guarantor_p_lname'],
	"Guarantor_Birth_Date" => $_POST['guarantor_p_bdate'],
	"Guarantor_Age" => $_POST['guarantor_p_age'],
	"Gurantor_Address" => $_POST['gurantor_p_address'],
	"Guarantor_City" => $_POST['guarantor_p_city'],
	"Guarantor_State" => $_POST['guarantor_p_state'],
	"Guarantor_Zip_Code" => $_POST['guarantor_p_zcode'],
	"Guarantro_Race" => $_POST['guarantor_p_race'],
	"Guarantor_Ethnicity" => $_POST['guarantor_p_ethnic'],
	"Guarantor_Marital_Status" => $_POST['guarantor_p_mstatus'],
	"Gurantor_Sex" => $_POST['guarantor_p_sex'],
	"Guarantor_Home_Phone" => $_POST['guarantor_p_hphone'],
	"Guarantor_Cell_Phone" => $_POST['guarantor_p_cphone'],
	"Guarantor_Social_Security_#" => $_POST["guarantor_p_ssn"],
	"Guarantor_Religion" => $_POST['guarantor_p_religion']

);
$GLOBALS['d'] = [];
//will have to create seperate PHP files	
	
//opens the JSON File
$myfile = fopen("guarantor_p.json", "w") or die("Unable to open file!");

fwrite($myfile, json_encode($result, JSON_PRETTY_PRINT));
fclose($myfile);
//retrievs the data
//$result['FirstName']
echo "success";

?>