Course Details:
COMP30680 Web Application Development
Semester 1
Assignment 2

Student Details:
Selene Waide
No: 16201922

Submission files and folders:
html document:		forecaster.html - web page
css document:		forecaster_style.css  - subfolder style
javascript:			scriptDaily.js (summary forecast) - subfolder scripts
					scriptDetailed.js (detailed forecast) - subfolder scripts
					scriptMap.js (Google map and weather marker) - subfolder scripts
json data files:		Daily.json - subfolder json_files
					Detailed.json - subfolder json_files		
weather icons:		png files - subfolder images



Assignment Requirements:

Requirement:
1. Begin by creating a webpage called forecaster.html. When this page is opened in a browser it should give a simple introduction the purpose of the webpage and display a map of Ireland from Google maps, focused on Dublin. 

Achieved in:
	Simple introduction:
		forecaster.html -  lines 30-33
	
	Map:
		forecaster.html -  line 35
		scriptMap.js - google map script
	
Requirement:
	o A simple form that allows the user to choose the number of days from 1 to 5 for which weather information will be shown.
	o A submit button.

Achieved in:
		forecaster.html -  lines 43-72
		scriptDaily.js -  script for summary forecast 


Requirement:
2. When the person clicks the submit button your page should update to display the following:
	o Weather information for each day requested in a format that is easy for a person to read. The following information should be displayed by default for each day:
		§ A brief summary of the overall weather forecast in both text and graphic format. Icons for the graphic format are available here: https://openweathermap.org/weather-conditions
		§ The minimum and maximum temperature.
	o Within your overall webpage also include checkboxes that allow the user to switch on and off the following additional information for each day: § Pressure.
		§ Humidity.
		§ Wind speed.
	o Note: The data needed for this step is available in the file daily.json.

Achieved in:
	forecaster.html -  lines 43-72 
	scriptDaily.js -  script for summary forecast 


Requirement:
3. Your page should be able to display more fine grained information for a particular day when the user requests this, e.g. by clicking on one of the days for which summary information is provided. To do this you will need to use the data available in detailed.json and display weather information in three hour blocks for the chosen day.

Achieved in:
	forecaster.html -  lines 74-83
	scriptDetailed.js -  script for detailed forecast 
	scriptDaily.js -  show/hide data based on click in Summary Forecast table - lines 135-143


Additional:
Use of the Google Maps API - used Google Maps API to add weather icon to map at the coordinates specified in the Daily.json file.

Footnote:
I do appreciate that the functions I have written such as "displayJSON ", in both daily and detailed scripts, could have been generalized so that a single function would have performed the task of the two functions.
Also, the weather icon displayed in the Google map could have been attached to an event listener such that it would display the relevant icon on click. Had there been more than one set of co-ordinates, the weather icons could have been attached to them in a similar manner, using a loop to iterate through the weather descriptions to display the relevant icon.




				



