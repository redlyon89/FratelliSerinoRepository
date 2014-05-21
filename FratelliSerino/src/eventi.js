function menuColor()
{
    $('.funzioniMenu').hover
    (
    	function()
    	{
    		$(this).css({"color":"red", "backgroundImage":'url(immagini_sito/menuSelected.png)', "cursor":"pointer"});
    	},
    	function()
    	{
    		$(this).css({"color":"black", "backgroundImage":'url(immagini_sito/menu.png)', "cursor":"default"});
    	}
    );
}

function menuAction()
{
    $('.funzioniMenu').click
    (
    	function()
    	{
            var location = $(this).attr('id');
            window.location = location + '.html';
    	}
    );
}

function createMenu()
{
    var index = $("<div class='funzioniMenu' id='index'><b>Home</b></div>");
    var gallery = $("<div class='funzioniMenu' id='gallery'><b>I Nostri Lavori</b></div>");
    var contatti = $("<div class='funzioniMenu' id='doveSiamo'><b>Dove Siamo - Contattaci</b></div>");
    
    var tmp =   $(
                    "<img style='position:relative; width: 300px; height: 100px top: 10px' alt=\"In Costruzione\" src=\"costruzione.png\"></img>" +
                    "<p style=\"position:relative; text-align:center; color:red; font-size:14pt;\">" +
                    "<b>Sito in Aggiornamento!!!</b>"
                );
	
    $("#menu").append(index);
    $("#menu").append(gallery);
    $("#menu").append(contatti);
    
    $("#menu").append(tmp);
}

function createInfo()
{
    var infoSX =    $(
                        "<div id='infoSX'>" +
			"	<p>Fratelli Serino S.n.c. di Serino Pasquale" +
			"   <br>\"Lavorazione Marmi\"" +
			"	<br>C/tr Stazione Zona Pip - 83030 Montefalcione AV</p>" +
			"	<p>P. Iva 02212570648 - Tel./fax: 0825977215 - Ufficio: 366 1737118</p>" +
			"</div>"
                    );
    var infoDX =    $(
			"<div id='infoDX'>" +
			"	<br>" +
			"	<center>" +
			"		<table>" +
			"			<tr>" +
			"				<td>Sig. Giuseppe</td>" +
			"				<td>- Cel. 331 2550387</td>" +
                        "			</tr>" +
			"			<tr>" +
			"				<td>Sig. Pasquale</td>" +
			"				<td>- Cel. 366 1737091</td>" +
			"			</tr>" +
			"			<tr>" +
			"				<td>Sig. Demetrio</td>" +
			"				<td>- Cel. 366 1737117</td>" +
			"			</tr>" +
			"		</table>" +
			"	</center>" +
			"</div>"
                    );
					
    $("#bottom").append(infoSX);
    $("#bottom").append(infoDX);
}

function clickFreccia()
{
    $("#freccia").bind("mouseenter", function()
    {
        $(this).css({"cursor":"pointer"});
        $(this).attr("src", "immagini_sito/indietro_b.png");
    });
    
    $("#freccia").bind("mouseleave", function()
    {
        $(this).css({"cursor":"default"});
        $(this).attr("src", "immagini_sito/indietro_a.png");
    });
    
    $("#freccia").bind("click", function()
    {
        window.location = 'gallery.html';
    }); 
}

function clickDiv()
{
    $(".galleria").bind("mouseenter", function()
    {
    	if($(this).text() !== "Edilizia")
    		$(this).css({"backgroundColor":"#D0D0D0", "border":"2px solid #007FFF"});
    });
    
    $(".galleria").bind("mouseleave", function()
    {
    	if($(this).text() !== "Edilizia")
    		$(this).css({"backgroundColor":"#E6E6FA", "border":"1px solid black"});
    });
    
    $(".galleria").bind("click", function()
    {
    	if($(this).text() !== "Edilizia")
    	{
    		var directory = $(this).text();
    		hideGallery(directory);
    	}
    });
}

function clickFoto(element)
{    
    var img = $(element).attr("src");
    $("#photoBig").attr("src", img);
}

function divFotoGallery()
{
    $("#elencoFoto").bind("mouseenter", function()
    {
        $("#elencoFoto").css({"opacity":"1"});
    });
    
    $("#elencoFoto").bind("mouseleave", function()
    {
    	$("#elencoFoto").css({"opacity":"0.5"});
    });
    
    $("#next").bind("mouseenter", function()
    {
        $("#next").css({"opacity":"1"});
    });
    
    $("#next").bind("mouseleave", function()
    {
    	$("#next").css({"opacity":"0.5"});
    });
    
    $("#prev").bind("mouseenter", function()
    {
        $("#prev").css({"opacity":"1"});
    });
    
    $("#prev").bind("mouseleave", function()
    {
    	$("#prev").css({"opacity":"0.5"});
    });
}