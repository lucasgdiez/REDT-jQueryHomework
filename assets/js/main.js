$("#add-value").on("click", function(e){
		$('.tWrap').css({"background-color": 'inherit',});
		var TC = $("#value").val();
    if(TC > 15){
    	$('.tWrap').css({"overflow-y": 'scroll',});
    };
    e.preventDefault();
    generateTable(TC);
    $("#value").val('');
});

$("#remove-selected-value").on("click", function(e){
	/////////////	WIP   //////////////

	/*var value = $("#value").val();
	var placeholder = $("#value").attr("placeholder", "Enter your number :)");
	if(placeholder === 'Enter your number :)') {
		 $("#remove-value").css({"cursor": "not-allowed"})
	} else{
		$("#remove-value").css({"cursor": "pointer"})
	}*/
	
	//$("input[type=checkbox]:checked").closest("tr").remove();

	/////////////	WIP   //////////////
	var TC = $("#value").val();
	 if(TC < 15){
    	$('.tWrap').css({"overflow-y": 'hidden',});
    };

	$('input:checked').each(function() {
    $(this).closest('tr').remove();
    });
});

$("#clear-value").on("click", function(e){
	$('td').remove();
	$('.tWrap').css({"background-color": 'inherit',});
	$('.tWrap').css({"overflow-y": 'hidden',});
});

function generateTable(count) {
	var auxHTML = "";
	var tWrap = $("#tabla, .tWrap");
	for (var i = 0; i < count; i++) {
		var auxHTML = "<tr><td>"+"<input type='checkbox'>"+i+"</td><td> Element"+"</td></tr>";
		tWrap.append(auxHTML);	
	}
}
