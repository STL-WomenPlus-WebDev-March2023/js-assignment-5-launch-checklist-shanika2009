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
  let numberInput = Number(testInput);
  if (testInput === "")
  {
      return "Empty";
  }
  else if (isNaN(numberInput))
  {
      return "Not a Number";
  }
  else if (isNaN(numberInput) === false)
  {
      return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStat = document.getElementById("pilotStatus").value;
  let copilotStat =  document.getElementById("copilotStatus").value;
  let fuel = document.getElementById("fuelStatus").value;
 let cargo = document.getElementById("cargoStatus").value;
 console.log(`PILOT: ${pilot}`)
 console.log(`FUEL: ${fuelLevel}`)
  if (validateInput(pilot) === 'Empty'|| validateInput(copilot) === 'Empty'||validateInput(fuelLevel)=== 'Empty'|| validateInput(cargoLevel) === 'Empty'){
    alert("All Fields are required");
  } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel)=== "Not a Number" || validateInput(cargoLevel)=== "Not a Number"){
    alert("Please enter valid information in all fields");

  }else {
    list.style.visibility = "visible";

    pilotStat.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStat.innerHTML = `Co-Pilot ${copilot} is ready for launch`
    let status = document.getElementById("launchStatus");
    if (fuelLevel < 10000 && cargoLevel <= 10000) {
        fuel.innerHTML = "Fuel level too low for launch";
        cargo.innerHTML = "Cargo mass low enough for launch"
        status.innerHTML = "Shuttle Not Ready for Launch";
        status.style.color = "red";
    } else if(fuelLevel >= 10000 && cargoLevel > 10000){
        fuel.innerHTML = "Cargo mass is too high for launch"
        status.innerHTML = "Shuttle Not Ready for Launch";
        status.style.color = "red"; 
    } else {
        fuel.innerHTML = "Fuel level high enough for launch"
        cargo.innerHTML = "Cargo mass low enough for launch"
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
