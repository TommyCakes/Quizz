$(document).ready(function() {

	// var questions = {
	// 	answers: {
	// 		first: "Green ",
	// 		second: "Red",
	// 		third: "Blue",
	// 		fourth: "Yellow"

	// 	}

	// }
	$('#answer1').click(function() {
		if('#input#answer1:checked[data-type="1"]'){
			alert('correct!');
		}
		else {
			alert('false!')
		}
		// $('.speech').hide();
	})
});
