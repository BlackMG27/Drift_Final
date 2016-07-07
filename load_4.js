$(document).ready(function(){
var list = [];
//grabs all of the data the patient puts in the form
//THIS MUST BE IN A STRAIGHT LINE!!
var ins = $('#patient_nr_fname, #patient_nr_lname, #patient_nr_relation, #patient_nr_address, #patient_nr_city, #patient_nr_state, #patient_nr_zcode, #patient_nr_estatus, #patient_nr_ename, #patient_nr_wphone, #patient_nr_hphone'),
//creates the objects
counter = {
  patient_nr_fname: {},
  patient_nr_lname: {},
  patient_nr_relation: {},
  patient_nr_address: {},
  patient_nr_city: {},
  patient_nr_state: {},
  patient_nr_zcode: {},
  patient_nr_estatus: {},
  patient_nr_ename: {},
  patient_nr_hphone: {},
  patient_nr_wphone: {}
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
  url:'https://www.evl.uic.edu/design/421/drift/registration_form_relative.php',
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



