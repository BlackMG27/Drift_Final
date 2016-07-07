$(document).ready(function(){
var list = [];
//grabs all of the data the patient puts in the form
//THIS MUST BE IN A STRAIGHT LINE!!
var ins = $('#patient_em_fname, #patient_em_lname, #patient_em_relation, #patient_em_wphone, #patient_em_hphone, #patient_em_cphone'),
/*,  #patient_p_bdate, #patient_p_age, #patient_p_address, #patient_p_city, 
    #patient_p_state, #patient_p_zcode, #patient_p_race, #patient_p_ethnicity, #patient_p_mstatus, #patient_p_sex, 
    #patient_p_hphone, #patient_p_cphone, #patient_p_ssn, #patient_p_religion*/
//creates the objects
counter = {
  patient_em_fname: {},
  patient_em_lname: {},
  patient_em_relation: {},
  patient_em_wphone: {},
  patient_em_hphone: {},
  patient_em_cphone: {}
}
//
$('.backlink').click(function(e){
    e.preventDefault();
    var obj = {},
    valid = true;

    ins.each(function(){
      var val = this.value.trim();
      if(val){
        obj[this.id] = val;
        console.log("id: ",this.id, ", val: ", val);
      }else{
        var name = $(this).attr('data-name') || $(this).attr('name');
        //alert(name+ ' cannot be blank');
        this.focus();
        valid = false;
        return false;
      }
    });
    if(valid){
      list.push(obj);
      ins.val('');

      $.each(obj, function(key, value){
        var count = counter[key][value] || 0;
        counter[key][value] + 1;
      });

//take the value in 'val' and post it to registration_form.php
$.ajax({
  url:'https://www.evl.uic.edu/design/421/drift/registration_form_emergency.php',
  data:obj,
  dataType:'json',
  type:'POST',
  success: function(obj) {
  console.log('query went through!');
    console.log('logging',e);
  },
  error: function(e) {
    console.log(e.responseText);
  }
});

console.log(obj);
    }
 var url = $(this).parent().attr('href');
 window.location.replace(url);

});
});



