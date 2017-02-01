$(document).ready(function() {
    var cn = 4;
    $("#enter").click(function() {
        var input = $("#apple").val()
        if (input < cn) {
            $("div").html("it's Higher")
        }
        else if (input > cn) {
            $("div").html("it's Lower")
        } 
        else if (input === cn) {
            $("div").html("You guessed it!")
        }
    })
});
