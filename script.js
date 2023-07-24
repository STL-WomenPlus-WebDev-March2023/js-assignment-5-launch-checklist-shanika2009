// Write your JavaScript code here!


// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
   
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
    //    console.log(listedPlanets);
   }).then(function () {
    //    console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   let selectPlanet = pickPlanet(listedPlanets);
   addDestinationInfo(document, selectPlanet.name, selectPlanet.diameter, selectPlanet.star, selectPlanet.distance, selectPlanet.moon, selectPlanet.image
     );
    })

    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let forms = document.querySelector("form");
    forms.addEventListener('submit', function (event) {
        let pilots1 = document.querySelector("input[name=pilotName]");
        let pilot = pilots1.value;
        let copilots1 = document.querySelector("input[name=copilotName]");
        let copilot = copilots1.value;
        let fuelLevel1 = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelLevel1.value);
        let cargoLevels1 = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoLevels1.value);
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)   
    event.preventDefault();

    });
     
});