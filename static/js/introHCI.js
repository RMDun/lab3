'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");

		// css class
		$(".jumbotron p").toggleClass("active");

		$("#testjs").text("Sup I'm Ash from Deluxe City");

	
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);


}

function projectClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#7fff00");

	// appending
	//  var containingProject = $(this).closest(".project");
	//  .append("<div class='project-description'><p>Description of the 
	//           project.</p></div>");

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if(description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");

	}
	else {
		description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	}

}