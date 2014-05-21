function initialize()
{
	var latlng = new google.maps.LatLng(40.957019,14.880525);
	var myOptions =	{
                            zoom: 15,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR}
			};
                        
	mymap = new google.maps.Map(document.getElementById("map"), myOptions);
	
	var myLatlng = new google.maps.LatLng(40.957019,14.880525);
	
	var marker = new google.maps.Marker
	({
		position: myLatlng,
		map: mymap,
		title:"Fratelli Serino S.n.c. 'Lavorazione Marmi'"
	});
}