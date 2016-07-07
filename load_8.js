$(document).ready(function(){
var list = [];
//grabs all of the data the patient puts in the form
//THIS MUST BE IN A STRAIGHT LINE!!
var ins = $('#insurance_s_fname, #insurance_s_lname, #insurance_s_bdate, #insurance_s_age, #insurance_s_address, #insurance_s_city, #insurance_s_state, #insurance_s_zcode, #insurance_s_sex, #insurance_s_mstatus, #insurance_s_relation, #insurance_s_med_group, #insurance_s_mem_num, #insurance_s_group_num, #insurance_s_card_num, #insurance_s_pcp, #insurance_s_contact, #insurance_s_iname, #insurance_s_ref_num, #insurance_s_status, #insurance_s_case_num, #insurance_s_case_id'),
//creates the objects
counter = {
  insurance_s_fname: {},
  insurance_s_lname: {},
  insurance_s_bdate: {},
  insurance_s_age: {},
  insurance_s_address: {},
  insurance_s_city: {},
  insurance_s_state: {},
  insurance_s_zcode: {},
  insurance_s_sex: {},
  insurance_s_mstatus: {},
  insurance_s_relation: {},
  insurance_s_med_group: {},
  insurance_s_mem_num: {},
  insurance_s_group_num: {},
  insurance_s_card_num: {},
  insurance_s_pcp: {},
  insurance_s_contact: {},
  insurance_s_iname: {},
  insurance_s_ref_num: {},
  insurance_s_status: {},
  insurance_s_case_num: {},
  insurance_s_case_id: {}
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
  url:'https://www.evl.uic.edu/design/421/drift/insurance_s.php',
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



