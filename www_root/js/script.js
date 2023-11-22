
let mainContainer = document.querySelector(".container");

//Clear the main container
function clearMainContainer() {
	mainContainer.innerHTML = "";
}

// handle Search Event
function handleSearchEvent ( event ) {

	let keywords = formInput.value;
	console.log(keywords);

	//Remove white spaces
	keywords = keywords.trim();
	console.log(keywords);

	//Convert the search keywords to lower case
	keywords = keywords.toLowerCase();
	console.log(keywords);

	if ( 0 === keywords.length ) {
		console.log("the search keyword is empty");

		clearMainContainer();
		
	} else {

		clearMainContainer();

		//Determine if the Flight has been found or not
		let flightFound  = false;

		for ( let index = 0; index < FlightInfo.length; index++) {
			let flight = FlightInfo[index];

			//Convert destination to lower case
			let destination = flight.destination.toLowerCase();

			//Convert airport to lower case
			let airport = flight.airport.toLowerCase();

			if ( destination.includes(keywords) ) {
				console.log("found");

				addFlightItem(flight);

				//Set Flight found to true, since we found one
				flightFound = true;

			} else if ( airport.includes(keywords) ) {
				console.log("found");

				addFlightItem(flight);

				//Set Flight found to true, since we found one
				flightFound = true;

			} else {
				console.log("not found");
			}
		}

		if ( ! flightFound ) {
			console.log("Sorry! Flight does not exist");
			clearMainContainer();
		}
	}
}

let form = document.createElement("form");
form.className = "search-form";

//Prevent form from reloading the page when submititng
form.addEventListener("submit", function ( event ) {
	event.preventDefault();
});

//Add paragraph text on the form
let paragraph = document.createElement("p");
paragraph.className = "search-form-left-label";
paragraph.innerHTML = "Search for flights to add";
form.appendChild(paragraph);

//Add form input on the form
let formInput = document.createElement("input");
formInput.className = "search-form-input";
formInput.placeholder = "Search using flight destination or airport";
form.appendChild(formInput);

//Add form button on the form
let formButton = document.createElement("button");
formButton.className = "search-form-button";
formButton.innerHTML = "Find flight(s)";

formButton.addEventListener("click", handleSearchEvent);

form.appendChild(formButton);

//Add form before main container
document.body.insertBefore(form, mainContainer);