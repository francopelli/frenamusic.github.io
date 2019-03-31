$(document).ready(function() {
    var time = moment().tz("Canada/Toronto").format("h:mm A");
    $("#time").html(time);
})
