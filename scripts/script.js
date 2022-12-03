function numberOfYearsToMinutes(){
	var years = document.getElementById("years").value;
	if(years > 0){
		var DayOfOneYear = 365;
		var HoursOfOneDay = 24;
		var MinutesOfOneHours = 60;
		var extraHoursInOneYear = 6;
		var extraMinutesInOneYear = 9.1626;

		var yearsToDay = years * DayOfOneYear;
		var yearsToHours = yearsToDay * HoursOfOneDay;
		yearsToHours = yearsToHours + (years * extraHoursInOneYear);
		var HoursToMinutes = yearsToHours * MinutesOfOneHours;
		HoursToMinutes = HoursToMinutes + (years * extraMinutesInOneYear);
		document.getElementById("totalMinutes").innerHTML = HoursToMinutes;
	}
}