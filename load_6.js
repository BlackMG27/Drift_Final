$(document).ready(function(){
var list = [];
//grabs all of the data the patient puts in the form
//THIS MUST BE IN A STRAIGHT LINE!!
var ins = $('#guarantor_e_ename, #guarantor_e_address, #guarantor_e_city, #guarantor_e_state, #guarantor_e_zcode, #guarantor_p_ephone, #guarantor_p_whone, #guarantor_e_wemail'),
//creates the objects
counter = {
  guarantor_e_ename: {},
  guarantor_e_address: {},
  guarantor_e_city: {},
  guarantor_e_state: {},
  guarantor_e_zcode: {},
  guarantor_e_ephone: {},
  guarantor_e_wphone: {},
  guarantor_e_wemail: {}
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
  url:'https://www.evl.uic.edu/design/421/drift/registration_guarantor_e.php',
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



