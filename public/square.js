$(document).ready(function() {
  
  how_many_forms = $('form').length;


  var selected = $('select').first().html();
  var item_count = 0;
  var total_cost = 0;

  $('form').
  	on('change', 'select', function(){
  		alert("my my, how you've changed");
  		$('form div:first').append('<select>' + selected + '</select><br />');
  		item_count++;
  		$('#drinks').text(item_count);
  		total_cost = total_cost + Number($(this).find(':selected').attr('data-price'));
  		console.log(total_cost);
  		$('#cost').text("$"+(total_cost/100).toFixed(2));
  	});

//when the checkout button is clicked, we need to post 
  $(".button").click(function(event){
  	event.preventDefault();
  	$.post('/shop', total_cost, function(responsetext) {
		$('#order_form').html("<h2>" + responsetext + "<h2>");
  	});

  	// $.post(shop, info to send, what is a function to respond)

  	// $.ajax({
  	// 	type: "POST",
  	// 	url: "/shop",
  	// 	data: total_cost,
  	// 	success: function(event){
  	// 		$('#order_form').html("<div id = 'message'></div>");
  	// 		$('#message').html("<h2>Your order has been submitted!<h2>")
  	// 		.append("<p>Your final cost is $"+total_cost+"</p>")
  	// 	}
  	// });
   });
});

