$(document).ready(function() {
  
  how_many_forms = $('form').length;


  var selected = $('select').first().html();
  var item_count = 0;
  var total_cost = 0;

  $('form').
  	on('change', 'select', function(){
  		alert("my my, how you've changed");
  		$('form').append('<select>' + selected + '</select><br />');
  		item_count++;
  		$('#drinks').text(item_count);
  		total_cost = total_cost + Number($(this).find(':selected').attr('data-price'));
  		console.log(total_cost);
  		$('#cost').text("$"+(total_cost/100).toFixed(2));
  	});

});

