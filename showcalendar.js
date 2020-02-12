	function _(x) { return document.getElementById(x) };
	
	function hasClass(element, className){
		return element.className.split(" ").indexOf(className) > -1;
	}
	
	function addClass(element, className){
		if(hasClass(element, className)){
			return element.classList;
		} else {
			return element.classList.add(className);
		}
	}
	
	function removeClass(element, className){
		if(hasClass(element, className)){
			return element.classList.remove(className);
		}else{
			return element.classList;
		}
	}
	
	let today = new Date();
	let currentMonth = today.getMonth();
	let currentYear = today.getFullYear();
	let todaysDate = new Date().getDate()
	console.log(todaysDate);
	let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
			
	let monthAndYear = document.getElementById("monthAndYear");
	function showCalendar(month, year){
		let firstDay = new Date(year, month).getDay();
		let daysInMonth = 32 - new Date(year, month, 32).getDate();
		let tbl = document.getElementById("calendar-body");
		tbl.innerHTML = "";
		monthAndYear.innerHTML = months[month]+" "+year;
		let date=1;
		for(let i=0;i<6;i++){
			let row = document.createElement("tr");
			for(let  j=0; j<7; j++){
				if(i === 0 && j<firstDay){
					let cell = document.createElement("td");
					cell.className = "no-day";
					let cellText = document.createTextNode("");
					cell.appendChild(cellText);
					row.appendChild(cell);
				}else if(date>daysInMonth){
					break; 
				}else{
					
					let cell = document.createElement("td");
					cell.setAttribute("data-id", date+"-"+currentMonth+"-"+currentYear);
					
					if(date == todaysDate){
						cell.className = "today";
					}else{
						cell.className = "day";
					}
					let cellText = document.createTextNode(date);
					cell.appendChild(cellText);
					row.appendChild(cell);
					date++;	
				}
			}
			tbl.appendChild(row);
		}
					
	}
	function previous(){
		currentYear = (currentMonth === 0)? currentYear - 1: currentYear;
		currentMonth = currentMonth === 0? 11: currentMonth - 1;
		showCalendar(currentMonth, currentYear)
	}
	function next(){
		currentYear = currentMonth === 11 ? currentYear + 1: currentYear;
		currentMonth = (currentMonth + 1) % 12;
		showCalendar(currentMonth, currentYear);				
	}
window.onload = function(){
	showCalendar(currentMonth, currentYear);
	_("previousMonth").addEventListener("click", function(){previous();});
	_("nextMonth").addEventListener("click", function(){next();});
	
}