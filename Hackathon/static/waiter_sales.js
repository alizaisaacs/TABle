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

		var btnDiv = $("<div class='col-sm-1'>")
		var delete_btn = $("<button class='delete_btn'>X</button>")
		$(delete_btn).click(function(){
			delete_sale(sale["id"])
		})

		$(btnDiv).append(delete_btn)
		$(newDiv).append(btnDiv)

		$("#sales_container").append(newDiv)

	})
}

var save_sale = function(new_sale) {

	$.ajax({
		type: "POST",
		url: "save_sale",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(new_sale),
		success: function(result) {
			
			console.log(result)
			display_sales_list(result["sales"])

			$('#client_input').autocomplete({
				source: result["clients"]
			})

			$('#client_input').val("")
			$('#ream_input').val("")
			$('#client_input').focus()
		},
		error: function(request, status, error) {
			console.log("Error");
			console.log(request)
			console.log(status)
			console.log(error)
		}
	})

}


var delete_sale = function(id) {

	$.ajax({
		type: "POST",
		url: "delete_sale",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(id),
		success: function(result) {

			display_sales_list(result["sales"])
		},
		error: function(request, status, error) {
			console.log("Error");
			console.log(request)
			console.log(status)
			console.log(error)
		}
	})
}


var submitData = function() {

	var client = $('#client_input').val()
	var reams = $('#ream_input').val()

	if($.trim(client) == "") {
		alert("Please enter a client name")
		$('#client_input').val("")
		$('#client_input').focus()
	}

	else if(reams == "") {
		alert("Please enter the number of reams")
		$('#ream_input').val("")
		$('#ream_input').focus()
	}

	else if(!$.isNumeric(reams)) {
		alert("Please a valid number for number of reams")
		$('#ream_input').focus()
	}
	else {
		var new_sale = {
			"salesperson": username,
			"client": client,
			"reams": reams
		}
		save_sale(new_sale)
	}
	
}




$(document).ready(function(){

	$('#client_input').autocomplete({
		source: clients
	})

	display_sales_list(sales)
	

	$('#submit_btn').click(function(){
		submitData()
	})

	$('#ream_input').keyup(function(e) {
		if(e.which == 13) {
			submitData()	
		}
	})


})