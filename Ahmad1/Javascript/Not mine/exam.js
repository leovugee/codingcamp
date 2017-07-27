$(document).ready(function() {

	$('#email, #emailcon').on('keyup', function() {

		var email = $('#email').val();
		var conemail = $('#emailcon').val();

		if ((email.indexOf('@') == -1) || (email.indexOf('.') == -1)) {

			$('#invemail').slideDown();
			$('.emailconfirm').removeClass('comefromleft');
			$('#invemailcon').slideUp();

		} else {

			$('#invemail').slideUp();

			$('.emailconfirm').addClass('comefromleft');

			if (email !== conemail) {

				$('#invemailcon').slideDown();
				$('.flname').removeClass('comefromright');

			} else {

				$('#invemailcon').slideUp();
				$('.flname').addClass('comefromright');


			}

		}

	});

	$('#checkbox').on('click',function() {

		if (this.checked) {

			$("#submitbtn").attr("disabled", false);

		} else {

			$("#submitbtn").attr("disabled", true);

		}

	});


});