var username = "Aliza"

var display_sales_list = function(sales) {

	$("#sales_container").empty()

	$.each(sales, function(i, sale) {
		
		var newDiv = $('<div class="row entry">')
		
		var salesDiv = $('<div class="col-sm-3">')
		$(salesDiv).append(sale["salesperson"])
		console.log(salesDiv.text())
		$(newDiv).append(salesDiv)

		var clientDiv = $("<div class='col-sm-5'>")
		$(clientDiv).append(sale["client"])
		console.log(clientDiv.text())
		$(newDiv).append(clientDiv)

		var reamDiv = $("<div class='col-sm-2'>")
		$(reamDiv).append(sale["reams"])
		console.log(reamDiv.text())
		$(newDiv).append(reamDiv)

		$("#sales_container").append(newDiv)

	})
}


$(document).ready(function(){

	$('#client_input').autocomplete({
		source: clients
	})


	$('#pay').click(function(){
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

	display_sales_list(sales)
	

})