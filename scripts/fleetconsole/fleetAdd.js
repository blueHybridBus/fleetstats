$(document).ready(function() {
	$("#submit-btn").on("click", function(event) {
		// Values
		var year = $("#fleet-year").val();
		var manufacturer = $("#bus-manufacturer").val();
		var model = $("#vehicle-model").val();
		var prefix = $("#fleet-prefix").val();
		var start = $("#start-range").val();
		var end = $("#end-range").val();

		// Validate
		if (! (isValidYear(year) && isValidManufacturer(manufacturer)) &&
			! (isValidVehicleModel(model) && isValidPrefix(prefix)) &&
			! (isValidRange(start, end) && isValidAgency()) ) {
			event.preventDefault();
		}
	});
});

function isValidYear(year) {
	var yearErrorField = $("#year-error");

	if (year.length > 0) {
		if (!isNaN(year)) {
			if (year < 0) {
				// Error
				placeError(yearErrorField, "Year must be greater than 0");
				return false;
			}
			// Error or none
		}
		else {
			// Error
			placeError(yearErrorField, "Year must be a number");
			return false;
		}
	}
	else {
		placeError(yearErrorField, "Required field");
	}

	return true;
}

function isValidManufacturer(manufacturer) {
	var manuErrorField = $("#manufacturer-error");

	if (manufacturer.length == 0) {
		placeError(manuErrorField, "Required field");
		return false;
	}

	return true;
}

function isValidVehicleModel(model) {
	var modelErrorField = $("#model-error");

	if (model.length == 0) {
		placeError(modelErrorField, "Required field");
		return false;
	}

	return true;
}

function isValidPrefix(prefix) {
	console.log(prefix);
	var prefixErrorField = $("#prefix-error");

	if (prefix.length > 0) {
		if (Number.isInteger(prefix)) {
			if (prefix < 0) {
				// Error
				placeError(prefixErrorField, "prefix must be greater than 0");
				return false;
			}
			// Error or none
		}
		else {
			// Error
			placeError(prefixErrorField, "prefix must be a number");
			return false;
		}
	}
	else {
		placeError(prefixErrorField, "Required field");
	}

	return true;
}

function isValidRange(start, end) {

}

function isValidAgency() {
	var radios = $("input[name=agency]");

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			return true;
		}
	}

	placeError($("#agency-error"), "An agency must be selected");
	return false;
}

function placeError(placeholder, error_message) {
	placeholder.text(error_message);
}

