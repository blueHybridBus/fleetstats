$(document).ready(function() {
	$("#submit-btn").on("click", function(event) {
		emptyError($("#route-err"));
		emptyError($("#name-err"));

		var routeNum = $("#route-num").val();
		var routeName = $("#route-name").val();

		if (!allFieldsValid(routeNum, routeName)) {
			event.preventDefault();
		}
	});
});

function allFieldsValid(num, name) {
	return validRouteNum(num) && validRouteName(name);
}

function validRouteNum(n) {
	var a = $("#route-err");

	if (n.length == 0) {
		placeError(a, "Required field");
	}
	else if (isNaN(n)) {
		placeError(a, "Number only");
	}
	else
	{
		// Check in database
		var r = {};
		r.number = n;
		$.post('/route/checkRoute', r, function(response) {
			if (response) {
				placeError(a, "Route already exists");
				return false;
			}
		});
	}

	return true;
}

function validRouteName(n) {
	var b = $("#name-err");

	if (n.length == 0) {
		placeError(b, "Required field");
		return false;
	}

	return true;
}

function placeError(placeholder, error_message) {
	placeholder.text(error_message);
}

function emptyError(placeholder) {
	placeholder.empty();
}