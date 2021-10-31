$(document).ready(function() {
	$("#note-desc").keyup(function() {
		verifyDesc();
	});
	$("#add_note_btn").on("click", function(event) {
		// Validation
		if (!validatedForm()) {
			event.preventDefault();
		}
	});
});

function verifyDesc() {
	var error_zone = $("#description-error");

	if (!isValidDescription()) {
		placeError(error_zone, "Description required");
	}
	else {
		emptyError(error_zone);
	}
}

function placeError(placeholder, error_message) {
	placeholder.text(error_message);
}

function emptyError(placeholder) {
	placeholder.empty();
}

function isValidDescription() {
	return $("#note-desc").val().length > 0;
}

function validatedForm() {
	var isValid = true;
	var error_zone = $("#description-error");

	if (!isValidDescription()) {
		placeError(error_zone, "Description required");
		isValid = false;
	}

	return isValid;
}

function promptDelete() {
    return confirm("You are about to delete a note. Proceed?");
}