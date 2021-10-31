$(document).ready(function() {
    $(".action-icon").tooltip({
		container: '#page-interaction-controls'
	});
	$("[data-toggle='tooltip']").not($(".action-icon")).tooltip();
	
	var infoModal = $('#fleet-modal');

    $('#fleet-modal-btn').click(openModal);
    $("#tiles-view-btn").click({number: 0}, switchView);
    $("#table-view-btn").click({number: 1}, switchView);
    $("#fleet-modal-close-btn").click(closeModal);
});

function openModal() {
    $('#fleet-modal').fadeIn(170);
}

function closeModal() {
    $('#fleet-modal').fadeOut(170);
}

function viewSequence(f1, f2) {
	$("#tiles-view-btn").attr('disabled', f1);
	$("#table-view-btn").attr('disabled', f2);
}

function switchView(event) {
	var obj = getCookieObj();
	var viewNumber = event.data.number;
    
	if (viewNumber == 0) {
		$("#tiles").css("display", "inline-flex");
		$("#table").css("display", "none");

		delete obj.fleetView;
		viewSequence(true, false);
	}
	else if (viewNumber == 1) {
		$("#tiles").css("display", "none");
		$("#table").css("display", "inline-flex");

		obj.fleetView = "table";
		viewSequence(false, true);
	}

	setCookieObj(obj);
}

function unhighlightActiveModalTab() {
    $("#modal-navbar a").removeClass("active-modal-tab");
}