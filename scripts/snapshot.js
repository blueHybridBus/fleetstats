$(document).ready(function() {
    var snapshotModal = $("#snapshot-info-modal");
    var fleetModal = $("#fleet-modal");

    $("#snapshot-btn").click(openSnapshotModal);
    $("#snapshot-modal-close-btn").click(closeSnapshotModal);
    
    $(window).click(function(event) {
		if (event.target == snapshotModal[0]) {
	    	snapshotModal.fadeOut(170);
        }
        else if (event.target == fleetModal[0]) {
            fleetModal.fadeOut(170);
        }
	});
});

function openSnapshotModal() {
    $('#snapshot-info-modal').fadeIn(170);
}

function closeSnapshotModal() {
    $("#snapshot-info-modal").fadeOut(170);
}