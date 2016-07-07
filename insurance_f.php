<?php
//gets incoming data and puts into a data structure



$result = array(
	"Insurance_First_First_Name" => $_POST['insurance_f_fname'],
	"Insurance_First_Last_Name" => $_POST['insurance_f_lname'],
	"Insurance_First_Birth_Date" => $_POST['insurance_f_bdate'],
	"Insurance_First_Age" => $_POST['insurance_f_age'],
	"Insurance_First_Address" => $_POST['insurance_f_address'],
	"Insurance_First_City" => $_POST['insurance_f_city'],
	"Insurance_First_State" => $_POST['insurance_f_state'],
	"Insurance_First_Zip_Code" => $_POST['insurance_f_zcode'],
	"Insurance_First_Sex" => $_POST['Insurance_f_sex'],
	"Insurance_First_Marital_Status" => $_POST['insurance_f_mstatus'],
	"Insurance_First_Relation" => $_POST['insurance_f_relation'],
	"Insurance_First_Medical_Group" => $_POST['insurance_f_med_group'],
	"Insurance_First_Member_Number" => $_POST['insurance_f_mem_num'],
	"Insurance_First_Group_Number" => $_POST['insurance_f_group_num'],
	"Insurance_First_Card_Number" => $_POST["insurance_f_card_num"],
	"Insurance_First_PCP" => $_POST['insurance_f_pcp'],
	"Insurance_First_Contact" => $_POST['Insurance_f_contact'],
	"Insurance_First_Insurance_Name" => $_POST['insurance_f_iname'],
	"Insurance_First_Reference_Number" => $_POST['insurance_f_ref_num'],
	"Insurance_First_Status" => $_POST['insurance_f_status'],
	"Insurance_First_Case_Number" => $_POST['insurance_f_mem_num'],
	"Insurance_First_Case_ID" => $_POST['insurance_f_case_id']

);
$GLOBALS['d'] = [];
//will have to create seperate PHP files	
	
//opens the JSON File
$myfile = fopen("insurance_f.json", "w") or die("Unable to open file!");

fwrite($myfile, json_encode($result, JSON_PRETTY_PRINT));
fclose($myfile);
//retrievs the data
//$result['FirstName']
echo "success";

?>