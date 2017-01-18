$(document).ready(function() {
    var master = "pear";
    $("#orange").click(function() {
        
        var input = $("#apple").val()
        if (input === master) {
            $("div").html("correct")
        }
        else if (input !== master) {
            $("div").html("Try again")
        }
    })
});
