$(document).ready(function() {
    $("#main-form-btn").click({number: 0}, switchView);
    $("#properties-form-btn").click({number: 1}, switchView);
    $("#advanced-form-btn").click({number: 2}, switchView);
    $("#delete-fleet-btn").click(function(event) {
        var fleetDelete = confirm("You are about to delete a whole fleet!"
            + "\nThis action is irreversible. Proceed?");

        if (!fleetDelete) {
            event.preventDefault();
        }
    });
    $("#delete-ordered-vehicles-btn").click(function(event) {
        var fleetDelete = confirm("You are about to delete all the ordered vehicles under this specification!"
            + "\nThis action is irreversible. Proceed?");

        if (!fleetDelete) {
            event.preventDefault();
        }
    });
});

function switchView(event) {
    switch (event.data.number) {
        case 1:
            $("#main-form").hide();
            $("#properties-form").show();
            $("#advanced-form").hide();
            $("#main-form-btn").prop("disabled", false);
            $("#properties-form-btn").prop("disabled", true);
            $("#advanced-form-btn").prop("disabled", false);
            break;
        case 2:
            $("#main-form").hide();
            $("#properties-form").hide();
            $("#advanced-form").show();
            $("#main-form-btn").prop("disabled", false);
            $("#properties-form-btn").prop("disabled", false);
            $("#advanced-form-btn").prop("disabled", true);
            break;
        default:
            $("#main-form").show();
            $("#properties-form").hide();
            $("#advanced-form").hide();
            $("#main-form-btn").prop("disabled", true);
            $("#properties-form-btn").prop("disabled", false);
            $("#advanced-form-btn").prop("disabled", false);
            break;
    }
}

function promptFleetDelete() {
    return confirm("You are about to delete a whole fleet!\nThis action is irreversible. Proceed?");
}