$(document).ready(function() {
    var archiveModal = $("#archive-info-modal");
    var fleetModal = $("#fleet-modal");

    $("#archive-btn").click(openArchiveModal);
    $("#table-tab").click(showTable);
	$("#allocation-chart-tab").click(displayAllocationChart);
	$("#nonactive-vehicles-graph-tab").click(displayNonactiveVehiclesGraph);
	$("#characteristics-tab").click(displayVehicleCharacteristics);
	$("#notes-tab").click(displayNotes);
	$("#graph-color-mode-checkbox").change(initializeNonactiveVehiclesGraph);
	$("#outlier-checkbox").change(initializeNonactiveVehiclesGraph);
    $("#archive-modal-close-btn").click(closeArchiveModal);

    $(window).click(function(event) {
		if (event.target == archiveModal[0]) {
	    	archiveModal.fadeOut(170); 
        }
        else if (event.target == fleetModal[0]) {
            fleetModal.fadeOut(170);
        }
	});
});

function openArchiveModal() {
    $("#archive-info-modal").fadeIn(170);
}

function closeArchiveModal() {
    $("#archive-info-modal").fadeOut(170);
}

function showTable() {
    unhighlightActiveModalTab();
    $("#table-tab").addClass("active-modal-tab");
	statisticsSequence("block", "none", "none", "none", "none");	
}

function displayAllocationChart() {
    unhighlightActiveModalTab();
    $("#allocation-chart-tab").addClass("active-modal-tab");
	statisticsSequence("none", "block", "none", "none", "none");
	initializeAllocationChart();
}

function initializeAllocationChart() {
	if (typeof renderAllocationChart === "function") {
		renderAllocationChart();
	}
}

function displayNonactiveVehiclesGraph() {
	unhighlightActiveModalTab();
    $("#nonactive-vehicles-graph-tab").addClass("active-modal-tab");
	statisticsSequence("none", "none", "block", "none", "none");
	initializeNonactiveVehiclesGraph();	
}

function initializeNonactiveVehiclesGraph() {
	if (typeof renderNonactiveVehiclesGraph === "function") {
		renderNonactiveVehiclesGraph($("#graph-color-mode-checkbox").prop("checked"), $("#outlier-checkbox").prop("checked"));
	}
}

function displayVehicleCharacteristics() {
    unhighlightActiveModalTab();
    $("#characteristics-tab").addClass("active-modal-tab");
	statisticsSequence("none", "none", "none", "block", "none");
}

function displayNotes() {
    unhighlightActiveModalTab();
    $("#notes-tab").addClass("active-modal-tab");
	statisticsSequence("none", "none", "none", "none", "block");
}

function statisticsSequence(d1, d2, d3, d4, d5) {
	$("#garage-table").css("display", d1);
	$("#garage-pie-chart").css("display", d2);
	$("#nonactive-vehicles-graph").css("display", d3);
	$("#vehicle-characteristics").css("display", d4);
	$("#notes-summary").css("display", d5);
}