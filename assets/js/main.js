$("#button1").on("click", function(e){
    var TC = $("#button1").val();
    e.preventDefault();
    generateTable(TC);
});

function generateTable(count) {
	var auxHTML = "";
	var tWrap = $("#tabla tWrap");
	for (var i = 0; i < count; i++) {
		var auxHTML = "<tr><td>" + i + "</td><td> elemento" + i "</td> </tr>";
		tWrap.append(auxHTML);
	}
}