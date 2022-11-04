function createGame(team1, hour, team2) {
  return `
    <li>
      <img 
        src="./assets/flags/flag-${team1}.svg" 
        alt="Bandeira do ${team1}"
      />
      <strong>${hour}</strong>
      <img
        src="./assets/flags/flag-${team2}.svg"
        alt="Bandeira do ${team2}"
      />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "Segunda-feira",
    createGame("england", "10:00", "iran") +
    createGame("senegal", "13:00", "netherland") +
    createGame("usa", "16:00", "wales")
  ) + 
  createCard (
    "22/11",
    "Terça-feira",
    createGame("england", "07:00", "iran") +
    createGame("senegal", "10:00", "netherland") +
    createGame("usa", "13:00", "wales")
  )
