$(document).ready(function() {
    $("tbody tr").click(function() {
        if( $(this).next().attr("class") == "detail") {
            if( $(this).next().css("display") === "none")
            {
                $(this).next().css("display", "contents");
            } else {
                $(this).next().css("display", "none");
            }
        } 
    })})
