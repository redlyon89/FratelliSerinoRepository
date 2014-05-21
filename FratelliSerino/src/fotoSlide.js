var cnt = 1;

function animaFoto()
{
	$('.immage1').hide();
	$("#benvenuto").css
	(
		{
			"font-size":"40pt",
			"color":"#960018",
			"position":"relative",
			"opacity":"0",
                        "top":"50px"
		}
	);
	$("#benvenuto").animate({opacity:"1"},2500);
	$("#benvenuto").delay(1500).animate({opacity:"0"}, 1000, function(){ $(".immage1").fadeIn(800, function(){sliderFoto();});});
}

function sliderFoto()
{
	var tagFoto = $("#slideFoto img").size();
	
	$(".immage" + cnt).delay(3200).fadeOut(800);
	
	if(cnt === tagFoto)
		cnt = 0;
		
	$(".immage" + ++cnt).delay(3200).fadeIn(800);

	setTimeout(sliderFoto, 4000);
}