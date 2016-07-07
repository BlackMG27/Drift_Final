$(document).ready(function(){
var list = [];
//grabs all of the data the patient puts in the form
//THIS MUST BE IN A STRAIGHT LINE!!
var ins = $('#guarantor_p_fname, #guarantor_p_lname, #guarantor_p_bdate, #guarantor_p_age, #guarantor_p_address, #guarantor_p_city, #guarantor_p_state, #guarantor_p_zcode, #guarantor_p_race, #guarantor_p_ethnic, #guarantor_p_sex, #guarantor_p_hphone, #guarantor_p_cphone, #guarantor_p_ssn, #guarantor_p_religion'),
//creates the objects
counter = {
  guarantor_p_fname: {},
  guarantor_p_lname: {},
  guarantor_p_bdate: {},
  guarantor_p_age: {},
  guarantor_p_address: {},
  guarantor_p_city: {},
  guarantor_p_state: {},
  guarantor_p_zcode: {},
  guarantor_p_race: {},
  guarantor_p_ethnic: {},
  guarantor_p_sex: {},
  guarantor_p_hphone: {},
  guarantor_p_cphone: {},
  guarantor_p_ssn: {},
  guarantor_p_religion: {}
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
  url:'https://www.evl.uic.edu/design/421/drift/registration_guarantor_p.php',
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



