var arrIMG = [];
var cnt = 0;

function animaGallery()
{
	$('#g1').delay(100).show("slide", 100);
	$('#g2').delay(200).show("slide", 100);
	$('#g3').delay(300).show("slide", 100);
	$('#g4').delay(400).show("slide", 100);
	$('#g5').delay(500).show("slide", 100);
	$('#g6').delay(600).show("slide", 100);
	$('#g7').delay(700).show("slide", 100);
	$('#g8').delay(800).show("slide", 100);
	$('#g9').delay(900).show("slide", 100);
}

function hideGallery(directory)
{
	$('#g9').delay(100).hide("slide", 100);
	$('#g8').delay(200).hide("slide", 100);
	$('#g7').delay(300).hide("slide", 100);
	$('#g6').delay(400).hide("slide", 100);
	$('#g5').delay(500).hide("slide", 100);
	$('#g4').delay(600).hide("slide", 100);
	$('#g3').delay(700).hide("slide", 100);
	$('#g2').delay(800).hide("slide", 100);
	$('#g1').delay(900).hide("slide", 100, function(){creaGallery(directory);});
}


function creaGallery(directory)
{
	var titolo = $("<span id='titolo'><strong>"+directory+"</strong></span>");
	$('#categorie').hide();
	$('#sceltaFoto').show();
	$('#categoriaSlide').append(titolo);
        creaFotoShow(directory);
}

function creaFotoShow(directory)
{
    $.post("loadIMG.php", {dir: directory}, function(data)
    {
        $.each(data, function()
        {
            var divCustom = $("<div class='miniFoto'><img onclick='clickFoto(this);' class='photo' height='60px' alt='' src='gallery/"+directory+"/"+this+"' /></div>");
            $("#elencoFoto").append(divCustom);
            arrIMG.push("gallery/"+directory+"/"+this);            
        });
        
        var child = $(".photo");        
        $("#imgTotali").append(arrIMG.length);
        $("#imgCorrente").html(cnt + 1);
        setTimeout(function()
        {
            $("#photoBig").attr("src", child.attr("src"));
        },3000);
        
    },"json");
}

function next()
{   
    $("#photoBig").attr("src", "");
    if(++cnt === arrIMG.length)
        cnt = 0;
    
    $("#imgCorrente").html(cnt + 1);
    var img = arrIMG[cnt];
    $("#photoBig").attr("src", img);
}

function prev()
{
    $("#photoBig").attr("src", "");
    if(--cnt < 0)
        cnt = (arrIMG.length - 1);
        
    $("#imgCorrente").html(cnt + 1);
    var img = arrIMG[cnt];
    $("#photoBig").attr("src", img);
}