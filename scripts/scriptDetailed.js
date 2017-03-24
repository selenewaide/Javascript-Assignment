var count_rows_weather;
var parsedObjD;

// selection from SUMMARY TABLE============================
function getOptionD_from_Summary(event_click_Summary_i) {

	if (event_click_Summary_i == 0)
		displayJSOND(parsedObjD, 0, 5);
	else if (event_click_Summary_i == 1)
		displayJSOND(parsedObjD, 5, 13);
	else if (event_click_Summary_i == 2)
		displayJSOND(parsedObjD, 13, 21);
	else if (event_click_Summary_i == 3)
		displayJSOND(parsedObjD, 21, 29);
	else if (event_click_Summary_i == 4)
		displayJSOND(parsedObjD, 29, 37);
}
// selection from SUMMARY TABLE END============================

//THIS IS THE WEATHER DATA ============================

var xmlhttp = new XMLHttpRequest();
var url = "json_files/Detailed.json";

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		//Parse the JSON data to a JavaScript variable. 
		parsedObjD = JSON.parse(xmlhttp.responseText);

	}
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function displayJSOND(obj, startRow, endRow) {

	var readlist = obj.list;

	var displayTable1 = "<table border = 1 >";
	displayTable1 += "<tr><th>Date</th><th>Time</th><th>Icon</th><th>Weather</th><th>Temp:Min</th><th>Temp:Max</th><th id=colPressure>Pressure</th><th id=colHumidity>Humidity</th><th id=colWind>Wind Speed</th></tr>";
	for (var i = startRow; i < endRow; i++) {
		var day_data = readlist[i].dt_txt.substring(0, 10);
		var dt_data = readlist[i].dt_txt.substring(11, 20);
		var icon_data = null;
		var weather_data = readlist[i].weather[0].description;

		if (weather_data == "sky is clear") {
			icon_data = "images/01d.png";
		} else if (weather_data == "few clouds") {
			icon_data = "images/02d.png";
		} else if (weather_data == "scattered clouds") {
			icon_data = "images/03d.png";
		} else if (weather_data == "broken clouds") {
			icon_data = "images/04d.png";
		} else if (weather_data == "light rain") {
			icon_data = "images/09d.png";
		} else if (weather_data == "rain") {
			icon_data = "images/10d.png";
		} else if (weather_data == "thunderstorm") {
			icon_data = "images/11d.png";
		} else if (weather_data == "snow") {
			icon_data = "images/13d.png";
		} else if (weather_data == "overcast clouds") {
			icon_data = "images/02d.png";
		} else {
			icon_data = "weather icon";
		}

		var temp_min_data = readlist[i].main.temp_min;
		var temp_max_data = readlist[i].main.temp_max;
		var pressure_data = readlist[i].main.pressure;
		var humidity_data = readlist[i].main.humidity;
		var wind_speed_data = readlist[i].wind.speed;

		displayTable1 += "<tr><td>" + day_data + "</td><td>" + dt_data
				+ "</td><td><img src=\"" + icon_data + "\"></td><td>"
				+ weather_data + "</td><td>" + temp_min_data + "</td><td>"
				+ temp_max_data + "</td><td id=\"colPressure" + i + "\">"
				+ pressure_data + "</td><td id=\"colHumidity" + i + "\">"
				+ humidity_data + "</td><td id=\"colWind" + i + "\">"
				+ wind_speed_data + "</td></tr>";
	}
	// Close the table element.
	displayTable1 += "</table>";

	document.getElementById("id02").innerHTML = displayTable1;

	count_rows_weather = endRow;

}
//THIS IS THE WEATHER DATA END============================  

