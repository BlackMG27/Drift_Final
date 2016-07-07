<?php
//gets incoming data and puts into a data structure
$result = array(

	"Guarantor_Employer_Name" => $_POST['guarantor_e_name'],
	"Guarantor_Employer_Address" => $_POST['guarantor_e_address'],
	"Guarantor_Employer_City" => $_POST['guarantor_e_city'],
	"Guarantor_Employer_State" => $_POST['guarantor_e_state'],
	"Guatantor_Employer_Zip_Code" => $_POST['guarantor_e_zcode'],
	"Guatantor_Employer_Phone" => $_POST['guarantor_e_ephone'],
	"Guatantor_Work_Phone" => $_POST['guarantor_e_wphone'],
	"Guatantor_Work_Email" => $_POST['guarantor_e_wemail']


);
$GLOBALS['d'] = [];
//will have to create seperate PHP files	
	
//opens the JSON File
$myfile = fopen("guarantor_e.json", "w") or die("Unable to open file!");

fwrite($myfile, json_encode($result, JSON_PRETTY_PRINT));
fclose($myfile);
//retrievs the data
//$result['FirstName']
echo "success";

?>