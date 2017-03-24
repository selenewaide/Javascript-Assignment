
var parsedObj;
    
/// / for the drop down menu of the number of
	// days============================
   function getOption() {
        var obj = document.getElementById("userSelect1");
        document.getElementById("selectedOutput1").innerHTML =
        obj.options[obj.selectedIndex].value;
         /// / This function is defined below and deals with the JSON data
			// parsed from the file.
       displayJSON(parsedObj,obj.options[obj.selectedIndex].value); 
        setDisplay();
    }
/// / for the drop down menu of the number of days
	// END============================
   
    
    
/// /THIS IS THE WEATHER DATA ============================
var xmlhttp1 = new XMLHttpRequest();
var url = "json_files/Daily.json";

xmlhttp1.onreadystatechange = function() {
    if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
       
        /// /Parse the JSON data to a JavaScript variable.
        parsedObj = JSON.parse(xmlhttp1.responseText);    
        console.log(parsedObj);
    }
};

xmlhttp1.open("GET", url, true);
xmlhttp1.send();

function displayJSON(obj, noOfDays) {
    
    var readlist = obj.list;
    
    /// / This code iterates through the array and writes html code to put
		// the weather information in a table.
   var displayTable1 = "<table border = 1 >";
    displayTable1 += "<tr><th>Day</th><th>Icon</th><th>Weather</th><th>Temp:Min</th><th>Temp:Max</th><th id=colPressureDaily>Pressure</th><th id=colHumidityDaily>Humidity</th><th id=colWindDaily>Wind Speed</th></tr>";    
    for (var i=0; i <noOfDays; i++) 
    {    
        var day_data = i+1;
        var icon_data = null;
        var weather_data = readlist[i].weather[0].description;
        
        
            if (weather_data == "clear sky") {
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
            } else if (weather_data == "mist") {
                icon_data = "images/50d.png";
            } else {
                icon_data = "weather icon";
            }
        
        var temp_min_data = readlist[i].temp.min; 
        var temp_max_data = readlist[i].temp.max;
        var pressure_data = readlist[i].pressure;
        var humidity_data = readlist[i].humidity;
        var wind_speed_data = readlist[i].speed;
        
        displayTable1 += "<tr>" +
            "<td><a id=\"sum1_to_det_day_selector" + i + "\" href=\"\" target=\"\" onclick=\"return false;\">" + day_data + "</a></td>" + 
            "<td><a id=\"asum2_to_det_day_selector" + i + "\" href=\"\" target=\"\" onclick=\"return false;\"><img id=\"sum2_to_det_day_selector" + i + "\" src=\"" + icon_data + "\"></a></td>" +
            "<td><a id=\"sum3_to_det_day_selector" + i + "\" href=\"\" target=\"\" onclick=\"return false;\">" + weather_data + "</a></td>" + 
            "<td><a id=\"sum4_to_det_day_selector" + i + "\" href=\"\" target=\"\" onclick=\"return false;\">" + temp_min_data + "</a></td>" +
            "<td><a id=\"sum5_to_det_day_selector" + i + "\" href=\"\" target=\"\" onclick=\"return false;\">" + temp_max_data + "</a></td>" + 
            "<td id=\"colPressureDaily" + i + "\"><a id=\"sum6_to_det_day_selector" + i + "\" href=\"\" target=\"\" onclick=\"return false;\">" + pressure_data + "</a></td>" +
            "<td id=\"colHumidityDaily" + i + "\"><a id=\"sum7_to_det_day_selector" + i + "\" href=\"\" target=\"\" onclick=\"return false;\">" + humidity_data + "</a></td>" + 
            "<td id=\"colWindDaily" + i + "\"><a id=\"sum8_to_det_day_selector" + i + "\" href=\"\" target=\"\" onclick=\"return false;\">" + wind_speed_data + "</a></td>" +
            "</tr>";
        console.log("line " + i + ": " + displayTable1);
    }
     /// / Close the table element.
   displayTable1 += "</table>"; 
    
    document.getElementById("id01").innerHTML = displayTable1;
    
    for(var i = 0;i < 5; ++i) {
        
        if (document.getElementById("sum1_to_det_day_selector" + i) == null){
            break;}
        
        document.getElementById("sum1_to_det_day_selector" + i).addEventListener("click", clickySummary);
        document.getElementById("sum2_to_det_day_selector" + i).addEventListener("click", clickySummary);
        document.getElementById("sum3_to_det_day_selector" + i).addEventListener("click", clickySummary);
        document.getElementById("sum4_to_det_day_selector" + i).addEventListener("click", clickySummary);
        document.getElementById("sum5_to_det_day_selector" + i).addEventListener("click", clickySummary);
        document.getElementById("sum6_to_det_day_selector" + i).addEventListener("click", clickySummary);
        document.getElementById("sum7_to_det_day_selector" + i).addEventListener("click", clickySummary);
        document.getElementById("sum8_to_det_day_selector" + i).addEventListener("click", clickySummary);
    }
    
    select_weather_cols('colPressureDaily');
    select_weather_cols('colHumidityDaily');
    select_weather_cols('colWindDaily');
    
}
/// /THIS IS THE WEATHER DATA END============================
   
/// /SHOW HIDE WEATHER DATA ============================ 
function setDisplay()
{
    var id01 = document.getElementById("id01");
    
    if (id01.style.display = "block")
    {
      ;  
    }
    else
    {
        id01.style.display = "block";
    }

}    
/// /SHOW HIDE WEATHER DATA END============================

/// /SHOW HIDE WEATHER DATA SUMMARY TO DETAILED ============================
        function clickySummary(event_click_Summary){
    
            getOptionD_from_Summary(event_click_Summary.target.id.slice(-1));
            
        }

        
/// /SHOW HIDE WEATHER DATA SUMMARY TO DETAILED END========================

/// /SHOW/HIDE TABLE COLUMN DETAILS =============================== 
function select_weather_cols(weather_select_col1)   
{
    
    
    var weather_sum_ticked_press = document.getElementById("pressureCheck1");
    var weather_sum_ticked_humid = document.getElementById("humidityCheck1");
    var weather_sum_ticked_wind = document.getElementById("windCheck1");
    
    var state = null;
    
    var th_col_check = document.getElementById(weather_select_col1);
    
    if (weather_select_col1 == 'colPressureDaily')
        state = weather_sum_ticked_press.checked;
    else if (weather_select_col1 == 'colHumidityDaily')
        state = weather_sum_ticked_humid.checked;
    else if (weather_select_col1 == 'colWindDaily')
        state = weather_sum_ticked_wind.checked;
    
    if (state == true)
        th_col_check.style.display = "table-cell";
    else
        th_col_check.style.display = "none";

    
    for(var i = 0;i < 5; ++i) {
        
        var td_col_check = document.getElementById(weather_select_col1 +i);

        if (td_col_check == null){
            break;}
        
        if (weather_select_col1 == 'colPressureDaily')
            state = weather_sum_ticked_press.checked;
        else if (weather_select_col1 == 'colHumidityDaily')
            state = weather_sum_ticked_humid.checked;
        else if (weather_select_col1 == 'colWindDaily')
            state = weather_sum_ticked_wind.checked;

        if (state == true)
            td_col_check.style.display = "table-cell";
        else
            td_col_check.style.display = "none";
        }
    
}
/// /SHOW/HIDE TABLE COLUMN DETAILS END============================




