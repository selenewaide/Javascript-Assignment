var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom : 12,
		center : new google.maps.LatLng(53.3550067, -6.2500853),
		mapTypeId : 'terrain'
	});

	var xmlhttp1 = new XMLHttpRequest();
	var url = "json_files/Daily.json";

	xmlhttp1.onreadystatechange = function() {
		if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {

			//Parse the JSON data to a JavaScript variable. 
			parsedObj_map = JSON.parse(xmlhttp1.responseText);
			console.log(parsedObj_map);
			displayJSON_map(parsedObj_map);
		}
	};

	xmlhttp1.open("GET", url, true);
	xmlhttp1.send();

}

function displayJSON_map(obj_map) {

	var readlist = obj_map.city;
	var lat_data = readlist.coord.lat;
	var lon_data = readlist.coord.lon;

	//var coords = results.coord;
	var image = "images/01d.png";
	var latLng = new google.maps.LatLng(lat_data, lon_data);
	var imageMarker = new google.maps.Marker({
		position : latLng,
		map : map,
		icon : image
	});
	console.log(imageMarker);

}
