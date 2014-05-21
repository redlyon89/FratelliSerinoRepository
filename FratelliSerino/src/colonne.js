var flag = 1;

function animaStatue()
{
	$("#slideStatue img:first-child").fadeIn(100, function(){setInterval(function(){sliderStatue();}, 4000);});
}

function sliderStatue()
{
	var tagStatue = $("#slideStatue img").size();
	
	$('#statue' + flag).hide("slide", {direction:"right"}, 500);
	
	if(flag === tagStatue)
		flag = 0;

	$('#statue' + ++flag).show("slide", {direction:"left"}, 500);
}