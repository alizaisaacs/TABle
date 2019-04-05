
$(document).ready(function(){

	

	$('#login_button').click(function(){
		var username = $('#username').val()
		console.log(username)


		$.ajax({
		type: "POST",
		url: "save_waiter_logon",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(username),
		success: function(result) {

			window.location.href = '/waiter_default';
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