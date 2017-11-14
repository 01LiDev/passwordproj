$(document).ready(function() {
    var cn = Math.floor(Math.random() * 10);
    console.log(cn);
    $("#enter").click(function() {
        var input = parseInt($("#apple").val());
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
