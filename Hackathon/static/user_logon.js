

$(document).ready(function(){

	

	$('#login_button').click(function(){
		var email = $('#email').val()
		console.log(email)
		var password = $('#password').val()
		console.log(password)

		$.ajax({
		type: "POST",
		url: "save_user_logon",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(email),
		success: function(result) {

			window.location.href = '/user_default';
		},
		error: function(request, status, error) {
			console.log("Error");
			console.log(request)
			console.log(status)
			console.log(error)
		}
	})

	})





})