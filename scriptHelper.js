// Write your helper functions here!
require("isomorphic-fetch");
function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
    let target = document.getElementById("missionTarget")
  target.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
                
   
}

function validateInput(testInput) {
  let numInput = Number(testInput);
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(numInput)) {
    return "Not a number";
  } else if (!isNaN(numInput)) {
    return "Is a number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilots = document.getElementById("pilotStatus");
  let copilots =  document.getElementById("copilotStatus");
  let fuelLevels = document.getElementById("fuelStatus");
  let cargoLevels = document.getElementById("cargoStatus");
  if (validateInput(pilot) === 'Empty'|| validateInput(copilot) === 'Empty'||validateInput(fuelLevel)=== 'Empty'|| validateInput(cargoLevel) === 'Empty'){
    alert("All Fields are required");
  } else if(validateInput(pilot) === "Is a Number" || (validateInput(copilot) === "Is a Number")){
    alert("Please enter a name for both Pilot and Co-pilot");

  } else if (validateInput(fuelLevel) === "Not a Number" || isNaN(validateInput(cargoLevel)) === "Not a Number"){
    alert('Please enter a valid number for both the fuel level and cargo level')
  }else {
    list.style.visibility = "visible";

    pilots.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilots.innerHTML = `Co-Pilot ${copilot} is ready for launch`
    let status = document.getElementById("launchStatus");
    if (fuelLevel < 10000 && cargoLevel <= 10000) {
        fuelLevels.innerHTML = "Fuel level too low for launch";
        cargoLevels.innerHTML = "Cargo mass low enough for launch"
        status.innerHTML = "Shuttle Not Ready for Launch";
        status.style.color = "red";
    } else if(fuelLevel > 10000 && cargoLevel > 10000){
        fuelLevels.innerHTML = "Cargo mass is too high for launch"
        status.innerHTML = "Shuttle Not Ready for Launch";
        status.style.color = "red"; 
    } else {
        fuelLevels.innerHTML = "Fuel level high enough for launch"
        cargoLevels.innerHTML = "Cargo mass low enough for launch"
        status.innerHTML = "Shuttle is Ready for Launch";
        status.style.color = "green";
    }
  }
};



async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
     return response.json()
     })
    

  

  return planetsReturned;
}

function pickPlanet(planets) {
    let planetOptions = Math.floor(Math.random()*planets.length);
    return planets[planetOptions];
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
