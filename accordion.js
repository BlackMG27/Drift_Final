jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
    $(".link_main").hover(function(){
        $(this).addClass(".link_main:active, .link_main:hover");
    })

    $('#pi_title').click(function(){
    	$('.sub_title3').slideToggle(300).addClass('.sub_title_show3');
    	});
b

    /*jQuery('.title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_menu();
		}else {
			close_menu();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery(' ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
*/
});