const baseURL = "https://ergast.com/api/f1/current/next.json"


const getNextRace = async() => {
    let res = await fetch(baseURL);
    console.log(res)

    let json = await res.json();
    console.log(json)
    
    var nextRaceArr = {
        date: json.MRData.RaceTable.Races[0].date,
        time: json.MRData.RaceTable.Races[0].time,
        round: json.MRData.RaceTable.Races[0].round,
        circuit: json.MRData.RaceTable.Races[0].Circuit.circuitName,
        country: json.MRData.RaceTable.Races[0].Circuit.Location.country
    };

    var myArr = Object.values(nextRaceArr);
    console.log(myArr);
    
    displayResults(myArr)
}
getNextRace()

function displayResults(race) {
    let parentDiv = document.getElementById("nextRace")

    let date = document.createElement("h3")
    date.innerHTML = race[0]
    parentDiv.appendChild(date)

    let time = document.createElement("h3")
    time.innerHTML = race[1]
    parentDiv.appendChild(time)

    let round = document.createElement("h3")
    round.innerHTML = race[2]
    parentDiv.appendChild(round)

    let circuit = document.createElement("h3")
    circuit.innerHTML = race[3]
    parentDiv.appendChild(circuit)

    let country = document.createElement("h3")
    country.innerHTML = race[4]
    parentDiv.appendChild(country)
}   