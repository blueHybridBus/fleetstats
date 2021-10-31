$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    renderPieChart();

    var modal = $('#routes-modal');
    var reactivatedVehiclesModal = $("#reactivated-vehicles-modal");
    
    $("#allocated-vehicles-btn").click({btn1: true, btn2: false, btn3: false}, updateGarageDisplay);
    $("#actual-allocations-btn").click({btn1: false, btn2: true, btn3: false}, updateGarageDisplay);
    $("#dispatch-btn").click({btn1: false, btn2: false, btn3: true}, updateGarageDisplay);

    $("#route-modal-btn").click(displayRoutesModal);
    $("#reactivated-vehicles-modal-btn").click(displayReactivatedVehiclesModal);
    
    $(".close").on("click", function() {
        modal.fadeOut(170);
        reactivatedVehiclesModal.fadeOut(170);
    });
    
    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.fadeOut(170);
        }
        else if (event.target == reactivatedVehiclesModal[0]) {
            reactivatedVehiclesModal.fadeOut(170);
        }
    });

    $(window).resize(function() {
        adjustTint();
    });

    adjustTint();
});

function updateGarageDisplay(event) {
    // Vehicles
    var loanClass = $(".loan");
    var notAtGarageClass = $(".not-at-garage");
    var notDispatchedVehicles = $(".vehicle-flex-element:not('.dispatch')");

    // Fleet groups
    var allLoansGroup = $(".all-loans-group");
    var allGarageVehiclesAbsentGroup = $(".all-garage-vehicles-absent-group");
    var noDispatchesGroup = $(".no-dispatches");

    // Buttons
    var atCurrentVehicles = event.data.btn2;
    var atDispatched = event.data.btn3;
    
    // Count displays
    var display1;
    var display2;
    var display3;

    var cookie = getCookieObj();

    if (atCurrentVehicles) {
        cookie.garageVehicleViewId = 2;
        
        display1 = "none";
        display2 = "block";
        display3 = "none";

        notDispatchedVehicles.css("display", "block");
        noDispatchesGroup.css("display", "block"); // Reverse display changes from dispatch
        notAtGarageClass.css("display", display1); // Hidden
        loanClass.css("display", display2); // Shown
        allLoansGroup.css("display", display2);
        allGarageVehiclesAbsentGroup.css("display", display1);
    }
    else if (atDispatched) {
        cookie.garageVehicleViewId = 3;
        
        display1 = "none";
        display2 = "none";
        display3 = "block";

        allLoansGroup.css("display", "block");
        allGarageVehiclesAbsentGroup.css("display", "block");
        notDispatchedVehicles.css("display", "none");
        noDispatchesGroup.css("display", "none");
        $(".dispatch").css("display", "block");
        $(".dispatch-group").css("display", "block");
    }
    else {
        delete cookie.garageVehicleViewId;
        
        display1 = "";
        display2 = "";
        display3 = "";
        
        // Defaults
        notDispatchedVehicles.css("display", "block");
        noDispatchesGroup.css("display", "block"); // Reverse display changes from dispatch
        notAtGarageClass.css("display", display1); // Shown
        loanClass.css("display", display2); // Hidden
        allLoansGroup.css("display", display2);
        allGarageVehiclesAbsentGroup.css("display", display1);
    }

    setCookieObj(cookie);

    $(".first-set").css("display", display1);
    $(".second-set").css("display", display2);
    $(".third-set").css("display", display3);

    $("#allocated-vehicles-btn").prop("disabled", event.data.btn1);
    $("#actual-allocations-btn").prop("disabled", event.data.btn2);
    $("#dispatch-btn").prop("disabled", event.data.btn3);
}

function displayRoutesModal() {
    $('#routes-modal').fadeIn(170);
}

function displayReactivatedVehiclesModal() {
    $("#reactivated-vehicles-modal").fadeIn(170);
}

function adjustTint() {
    if ($("#garage-banner")[0].scrollWidth > $("#garage-banner")[0].clientWidth) {
        $("#tint").width($("#garage-banner")[0].scrollWidth + 1);
    }
    else {
        $("#tint").removeAttr("style");
    }
}