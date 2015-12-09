$(".button1").click(function (){
    var infoField1 = $("#field1").val();
    $(".cell_info1").text(infoField1);
});
$(".button2").click(function (){
    var infoField2 = $("#field2").val();
    $(".cell_info2").text(infoField2);
});
$(".square").mouseenter(function() {
    $(".square").addClass("blue-bg");
    $(".square").removeClass("opacity-bg");
});
$(".square").mouseleave(function() {
    $(".square").addClass("opacity-bg");
});

/*$(".button1").on('click',function (){//Можно записать ряд событий
.    var infoField1 = $("#field1").val();
});*/

