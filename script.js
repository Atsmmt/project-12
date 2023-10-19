$(document).ready(function() {
    $(".option").on("click", function() {
        $(".option").off("click");
        $(this).css("pointer-events", "none");
        var selectedOption = $(this).text().trim();
        if (selectedOption === "1. Mango") {
            $(".feedback").text("Correct!").addClass("correct");
        } else {
            $(".feedback").text("Incorrect").addClass("incorrect");
        }
    });
});
