const path = "assets/Dueling_Peaks_Stable/"

const periods = {
	6: "1.jpg",
	9: "2.jpg",
	14: "3.jpg",
	17: "4.jpg",
	18: "5.jpg",
	20: "6.jpg"
}

function setBackground(hour) {
	var image = path + periods[hour];
	document.body.style.backgroundImage = "url("+image+")";
	document.body.style.backgroundSize = "cover";
}

var hours = Object.keys(periods);
var currentTime = new Date().getHours();
/* var currentTime = 18; */

for (var i=0; i<hours.length-1; i++) {
	if (currentTime >= hours[i] && currentTime < hours[i+1]) {
		setBackground(hours[i]);
	}
}

if (currentTime >= hours[hours.length-1] || currentTime < hours[0]) {
	setBackground(hours[hours.length-1]);
}
