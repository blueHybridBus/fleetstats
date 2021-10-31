$(document).ready(function() {
	// Event listeners
	$("#tentative-mode-btn").click(openTentativeInfoModal);
	$("#tentative-info-modal-close-btn").click(closeTentativeInfoModal);
	$("#table-tab").click(showTable);
	$("#activity-percentage-tab").click(barGraph);
	$("#allocation-chart-tab").click(displayAllocationChart);
	$("#nonactive-vehicles-graph-tab").click(displayNonactiveVehiclesGraph);
	$("#characteristics-tab").click(displayVehicleCharacteristics);
	$("#notes-tab").click(displayNotes);
	$("#graph-color-mode-checkbox").change(initializeNonactiveVehiclesGraph);
	$("#outlier-checkbox").change(initializeNonactiveVehiclesGraph);
	
	var fleetModal = $('#fleet-modal');
	var tentativeInfoModal = $("#tentative-info-modal");

	$(window).click(function(event) {
		if (event.target == tentativeInfoModal[0]) {
	    	tentativeInfoModal.fadeOut(170); 
        }
        else if (event.target == fleetModal[0]) {
            fleetModal.fadeOut(170);
        }
	});
});

function openTentativeInfoModal() {
    $("#tentative-info-modal").fadeIn(170);
}

function closeTentativeInfoModal() {
    $("#tentative-info-modal").fadeOut(170);
}

function showTable() {
    unhighlightActiveModalTab();
    $("#table-tab").addClass("active-modal-tab");
	statisticsSequence("block", "none", "none", "none", "none", "none");	
}

function barGraph() {
    unhighlightActiveModalTab();
    $("#activity-percentage-tab").addClass("active-modal-tab");
	statisticsSequence("none", "block", "none", "none", "none", "none");
}

function displayAllocationChart() {
    unhighlightActiveModalTab();
    $("#allocation-chart-tab").addClass("active-modal-tab");
	statisticsSequence("none", "none", "block", "none", "none", "none");
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
	statisticsSequence("none", "none", "none", "block", "none", "none");
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
	statisticsSequence("none", "none", "none", "none", "block", "none");
}

function displayNotes() {
    unhighlightActiveModalTab();
    $("#notes-tab").addClass("active-modal-tab");
	statisticsSequence("none", "none", "none", "none", "none", "block");
}

function statisticsSequence(d1, d2, d3, d4, d5, d6) {
	$("#garage-table").css("display", d1);
	$("#activity-percentages").css("display", d2);
	$("#garage-pie-chart").css("display", d3);
	$("#nonactive-vehicles-graph").css("display", d4);
	$("#vehicle-characteristics").css("display", d5);
	$("#notes-summary").css("display", d6);
}