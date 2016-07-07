<?php
//gets incoming data and puts into a data structure



$result = array(
	"Insurance_Second_Second_Name" => $_POST['insurance_s_sname'],
	"Insurance_Second_Last_Name" => $_POST['insurance_s_lname'],
	"Insurance_Second_Birth_Date" => $_POST['insurance_s_bdate'],
	"Insurance_Second_Age" => $_POST['insurance_s_age'],
	"Insurance_Second_Address" => $_POST['insurance_s_address'],
	"Insurance_Second_City" => $_POST['insurance_s_city'],
	"Insurance_Second_State" => $_POST['insurance_s_state'],
	"Insurance_Second_Zip_Code" => $_POST['insurance_s_zcode'],
	"Insurance_Second_Sex" => $_POST['Insurance_s_sex'],
	"Insurance_Second_Marital_Status" => $_POST['insurance_s_mstatus'],
	"Insurance_Second_Relation" => $_POST['insurance_s_relation'],
	"Insurance_Second_Medical_Group" => $_POST['insurance_s_med_group'],
	"Insurance_Second_Member_Number" => $_POST['insurance_s_mem_num'],
	"Insurance_Second_Group_Number" => $_POST['insurance_s_group_num'],
	"Insurance_Second_Card_Number" => $_POST["insurance_s_card_num"],
	"Insurance_Second_PCP" => $_POST['insurance_s_pcp'],
	"Insurance_Second_Contact" => $_POST['Insurance_s_contact'],
	"Insurance_Second_Insurance_Name" => $_POST['insurance_s_iname'],
	"Insurance_Second_Reference_Number" => $_POST['insurance_s_res_num'],
	"Insurance_Second_Status" => $_POST['insurance_s_status'],
	"Insurance_Second_Case_Number" => $_POST['insurance_s_mem_num'],
	"Insurance_Second_Case_ID" => $_POST['insurance_s_case_id']

);
$GLOBALS['d'] = [];
//will have to create seperate PHP siles	
	
//opens the JSON sile
$mysile = sopen("insurance_s.json", "w") or die("Unable to open sile!");

swrite($mysile, json_encode($result, JSON_PRETTY_PRINT));
sclose($mysile);
//retrievs the data
//$result['SecondName']
echo "success";

?>