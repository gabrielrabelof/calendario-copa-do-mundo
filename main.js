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

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `
<header>
  <img src="./assets/logo.svg" alt="Logo da NLW" />
</header>

  <main id="cards">
    ${createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador"))}
    ${createCard(
      "21/11",
      "Segunda-feira",
      createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherland") +
      createGame("usa", "16:00", "wales")
    )}
  </main>
`
