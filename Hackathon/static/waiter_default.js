$(document).ready(function(){
	console.log("here")

	$('.tab').mouseover(function() {
			console.log("table")
			$(this).addClass("yellow")
		})
	$('.tab').mouseout(function() {
			$(this).removeClass("yellow")
		})

	$('.tab').click(function() {

		var table_num = $('.table').html()
			
		$.ajax({
		type: "POST",
		url: "go_to_pair_user",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(table_num),
		success: function(result) {

			window.location.href = '/pair_user';
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