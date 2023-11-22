/* 
 * Main scripts file for the flight schedule website.
 * Assignment 4, CSCI 1170, Fall 2022
 * Starter code provided by Dr. Mayra Barrera Machuca
 */

//I modified the code by moving everything inside the for loop into a function called addFlightItem
//I created this function so that it can be easy for me to add flight items on A5
//Function to add flight item on container element 
function addFlightItem ( flight ) {
    /**
     * Create an aside "flight selection bag"
    */
       let flightsSelectionBag = document.querySelector(".flights-selection-bag");

    /**
     * Read the container element
    */
    let containerElement = document.querySelector(".container"); 

    //Create div container element to hold all flight item
    let divContainerElement = document.createElement("div");

    //Add class
    divContainerElement.className = "item-container";

    divContainerElement.innerHTML = "<h3 class='item-title'>" + flight.destination + "</h3>";

    // variable to hold stop label
    let stopsLabel = flight.stops;

    //check the flight stops, if it is equal to 0 set it to "Non-Stop"
    if (flight.stops == 0)
        stopsLabel = "Non-Stop";

    //appends stops label and flight time as sub-label on flight item container
    divContainerElement.innerHTML += "<p class='item-subtitle'>" + stopsLabel + ", " + flight.time + "min</p>";
    

    //appends flight time depart time as sub-label on flight item container
    divContainerElement.innerHTML += "<p class='item-subtitle'> Depart time: " + flight.departTime + "</p>";

    //Create variable to hold all li tag elements, to be appeded later on ul tag element on flight item container
    let liElements = "<li>Airline: " + flight.airline + "</li>";
    liElements += "<li>Airport: " + flight.airport + "</li>";
    liElements += "<li>Details: " + flight.info + "</li>";

    //appends all li tag elements inside ul tag element on flight item container
    divContainerElement.innerHTML += "<ul class='item-list'>" + liElements + "</ul>";

    //create select button element
    let button = document.createElement("button");
    button.className = "item-button";
    button.innerHTML = "select";

    //Apply click event (using EventListener) 
    button.addEventListener("click", function ( event ) {
        let divContainerFlightInfoElement = document.createElement("div");
        divContainerFlightInfoElement.className = "flight-info";
        divContainerFlightInfoElement.innerHTML = "<p class='flight-availability-info'>"+ " Flight " + flight.code + " to " + flight.destination + " added " + "</p>";

        //Appends DOM content as a child on Flights selection bag Element
        flightsSelectionBag.appendChild(divContainerFlightInfoElement);
    });

    //appends select button on flight item container
    divContainerElement.appendChild(button);

    //Appends DOM content as a child on Container Element
    containerElement.appendChild(divContainerElement);
}

for(let index = 0; index< FlightInfo.length; index++){
    let flight = FlightInfo[index];

    addFlightItem(flight);
}
