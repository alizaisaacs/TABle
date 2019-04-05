$(document).ready(function(){
$('#Pay').click(function(){
		$.ajax({
		type: "POST",
		url: "go_to_pay",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(username),
		success: function(result) {
			window.location.href = '/payment';
			
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