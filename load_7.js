$(document).ready(function(){
var list = [];
//grabs all of the data the patient puts in the form
//THIS MUST BE IN A STRAIGHT LINE!!
var ins = $('#insurance_f_fname, #insurance_f_lname, #insurance_f_bdate, #insurance_f_age, #insurance_f_address, #insurance_f_city, #insurance_f_state, #insurance_f_zcode, #insurance_f_sex, #insurance_f_mstatus, #insurance_f_relation, #insurance_f_med_group, #insurance_f_mem_num, #insurance_f_group_num, #insurance_f_card_num, #insurance_f_pcp, #insurance_f_contact, #insurance_f_iname, #insurance_f_ref_num, #insurance_f_status, #insurance_f_case_num, #insurance_f_case_id'),
//creates the objects
counter = {
  insurance_f_fname: {},
  insurance_f_lname: {},
  insurance_f_bdate: {},
  insurance_f_age: {},
  insurance_f_address: {},
  insurance_f_city: {},
  insurance_f_state: {},
  insurance_f_zcode: {},
  insurance_f_sex: {},
  insurance_f_mstatus: {},
  insurance_f_relation: {},
  insurance_f_med_group: {},
  insurance_f_mem_num: {},
  insurance_f_group_num: {},
  insurance_f_card_num: {},
  insurance_f_pcp: {},
  insurance_f_contact: {},
  insurance_f_iname: {},
  insurance_f_ref_num: {},
  insurance_f_status: {},
  insurance_f_case_num: {},
  insurance_f_case_id: {}
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
  url:'https://www.evl.uic.edu/design/421/drift/insurance_f.php',
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



