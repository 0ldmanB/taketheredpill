$(document).ready(function(){
	
	var originalbg = $("#navBar").css("background-color");

		$("#navBar").on("mouseenter",function(){

			
			$(this).addClass("animated pulse infinite")
			$(this).css("background-color","red");
			$("#leftBar").addClass("fromLeft");
			
	
		});





		$("#navBar").on("mouseleave",function(){

			$(this).removeClass("animated pulse infinite")
			$(this).css("background-color",originalbg);
			
		});

});






