$(document).ready(function(){

	$('#request_pair').click(function(){
		
		var email = $('#email').text()
			
		$.ajax({
		type: "POST",
		url: "go_to_sales",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(email),
		success: function(result) {

			window.location.href = '/waiter_sales';
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