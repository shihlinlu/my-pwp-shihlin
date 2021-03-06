$(document).ready(function(){

	/* begin validation*/
	$("#contact-form").validate({

		// setup handling of form errors
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		// rules define what is good/bad input
		// each rule starts with the form input element's NAME attribute
		rules: {
			name: {
				required: true,
				maxlength: 30
			},
			email: {
				email: true,
				required: true
			},
			subject : {
				required: true,
				minlength: 2,
				maxlength: 300
			},
			message: {
				required: true,
				minlength: 10,
				maxlength: 2000
			}
		},

		// error messages to display to the end user
		messages: {
			name: {
				required: "Please enter your name.",
				maxlength: "Your name may be too long."
			},
			email: {
				email: "Please enter a valid email address.",
				required: "Please enter a valid email address."
			},
			subject: {
				required: "Please enter a subject line.",
				minlength: "Your subject is too short.",
				maxlength: "300 characters max."
			},
			message: {
				required: "Please enter a message.",
				minlength: "Your message is too short. Please write some more.",
				maxlength: "2000 characters max."
			}
		},

		submitHandler: function(form) {
			$("#contact-form").ajaxSubmit({
				type: "POST",
				url: $("#contact-form").attr("action"),

				success: function(ajaxOutput) {
					// clear the output area's formatting
					$("#output-area").css("display", "");

					// write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#contact-form")[0].reset();
					}
				}
			})
		}

	});/* end validate function */

});/*end document.ready()*/