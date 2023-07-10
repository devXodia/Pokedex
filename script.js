let currentPokemon;
let pokemonCount = 25;

async function loadPokemon(startIndex) {
  document.getElementById("loadButton").disabled = true;
  for (let x = startIndex; x < startIndex + pokemonCount; x++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${x}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    let pokemonName = currentPokemon["name"];
    let formatName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    document.getElementById("pokemonContainer").innerHTML += `
    <div id="${x}"class="small-pokemon" onclick="openModal('${pokemonName}', '${x}')"><img src="${currentPokemon["sprites"]["front_default"]}"><span>${formatName}</span></div>`;
    getLink(pokemonName);
  }
  document.getElementById("loadButton").disabled = false;
}

function loadMorePokemon() {
  let startIndex =
    document.getElementById("pokemonContainer").childElementCount + 1;
  loadPokemon(startIndex);
}

function changeClass(id) {
  document.getElementById("stats").style = "display: none;";
  document.getElementById("about").style = "display: none;";
  document.getElementById("moves").style = "display: none;";
  document.getElementById(id).style = "display: flex;";
}

function getLink(pokemonName) {
  document.getElementById(
    "link"
  ).innerHTML = `<a href="https://www.pokewiki.de/${pokemonName}" target="_blank">Poké Wiki</a>`;
}

function changeAbout() {
  let height = +currentPokemon["height"];
  let weight = currentPokemon["weight"];

  let formatweight = (weight / 10).toFixed(1);
  let formatheight = height * 2.54;
  document.getElementById("height").innerHTML = `${formatheight}cm`;
  document.getElementById("weight").innerHTML = `${formatweight}kg`;
  getElements();
}

function getElements() {
  let elementsarray = [];
  // element.charAt(0).toUpperCase() + element.slice(1);
  for (let i = 0; i < currentPokemon["types"].length; i++) {
    let element = currentPokemon["types"][i]["type"]["name"];
    let formatElementString =
      element.charAt(0).toUpperCase() + element.slice(1);
    elementsarray.push(formatElementString);
    document.getElementById("element").innerHTML = elementsarray;
  }
}

function getStats() {
  let hp = currentPokemon["stats"][0]["base_stat"];
  let attack = currentPokemon["stats"][1]["base_stat"];
  let def = currentPokemon["stats"][2]["base_stat"];
  let spAtk = currentPokemon["stats"][3]["base_stat"];
  let spDef = currentPokemon["stats"][4]["base_stat"];
  let speed = currentPokemon["stats"][5]["base_stat"];

  changeBasicStats(hp, attack, def, spAtk, spDef, speed);
}

function changeBasicStats(hp, attack, def, spAtk, spDef, speed) {
  document.getElementById("hp").innerHTML = hp;
  document.getElementById(
    "hp-bar"
  ).innerHTML = `<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning " style="width: ${hp}%"></div>
</div>`;
  document.getElementById("attack").innerHTML = attack;
  document.getElementById(
    "attack-bar"
  ).innerHTML = `<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger " style="width: ${attack}%"></div>
</div>`;
  document.getElementById("defense").innerHTML = def;
  document.getElementById(
    "defense-bar"
  ).innerHTML = `<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning " style="width: ${def}%"></div>
</div>`;
  document.getElementById("spatk").innerHTML = spAtk;
  document.getElementById(
    "spatk-bar"
  ).innerHTML = `<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger " style="width: ${spAtk}%"></div>
</div>`;
  document.getElementById("spdef").innerHTML = spDef;
  document.getElementById(
    "spdef-bar"
  ).innerHTML = `<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning " style="width: ${spDef}%"></div>
</div>`;
  document.getElementById("speed").innerHTML = speed;
  document.getElementById(
    "speed-bar"
  ).innerHTML = `<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-info " style="width: ${speed}%"></div>
</div>`;
}

function getBgColor() {
  if (currentPokemon["types"][0]["type"]["name"] == "fire") {
    document.getElementById("pokedex").style = "background-color: #fc6c6d";
  } else if (currentPokemon["types"][0]["type"]["name"] == "grass") {
    document.getElementById("pokedex").style = "background-color: #49D0B0";
  } else if (currentPokemon["types"][0]["type"]["name"] == "water") {
    document.getElementById("pokedex").style = "background-color: #76BEFE";
  } else if (currentPokemon["types"][0]["type"]["name"] == "bug") {
    document.getElementById("pokedex").style = "background-color: #83AD25";
  } else if (currentPokemon["types"][0]["type"]["name"] == "psychic") {
    document.getElementById("pokedex").style = "background-color: #E55973";
  } else if (currentPokemon["types"][0]["type"]["name"] == "ice") {
    document.getElementById("pokedex").style = "background-color: #68BAAC";
  } else if (currentPokemon["types"][0]["type"]["name"] == "electric") {
    document.getElementById("pokedex").style = "background-color: #FFD86F";
  } else if (currentPokemon["types"][0]["type"]["name"] == "normal") {
    document.getElementById("pokedex").style = "background-color: #A8A899";
  } else if (currentPokemon["types"][0]["type"]["name"] == "rock") {
    document.getElementById("pokedex").style = "background-color: #A8995B";
  } else if (currentPokemon["types"][0]["type"]["name"] == "dragon") {
    document.getElementById("pokedex").style = "background-color: #4D64AB";
  } else if (currentPokemon["types"][0]["type"]["name"] == "poison") {
    document.getElementById("pokedex").style = "background-color: #864AB8";
  } else if (currentPokemon["types"][0]["type"]["name"] == "fairy") {
    document.getElementById("pokedex").style = "background-color: #D480CF";
  } else if (currentPokemon["types"][0]["type"]["name"] == "dark") {
    document.getElementById("pokedex").style = "background-color: #463E3E";
  } else if (currentPokemon["types"][0]["type"]["name"] == "ghost") {
    document.getElementById("pokedex").style = "background-color: #633C64";
  } else if (currentPokemon["types"][0]["type"]["name"] == "ground") {
    document.getElementById("pokedex").style = "background-color: #956833";
  } else if (currentPokemon["types"][0]["type"]["name"] == "steel") {
    document.getElementById("pokedex").style = "background-color: #9999A8";
  } else if (currentPokemon["types"][0]["type"]["name"] == "fighting") {
    document.getElementById("pokedex").style = "background-color: #A84C3D";
  } else if (currentPokemon["types"][0]["type"]["name"] == "flying") {
    document.getElementById("pokedex").style = "background-color: #87B5E5";
  }
}

async function openModal(name, id) {
  let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  let response = await fetch(url);
  currentPokemon = await response.json();
  let pokemonName = currentPokemon["name"];
  getLink(pokemonName);
  renderPokemonInfo();
  document.getElementById("modal").style = "display: none;";
  document.getElementById("modal").style = "display:'' ;";
  document.getElementById("loadButton").style = "display: none;";
}

function getMoves() {
  document.getElementById("movesContainer").innerHTML = "";
  for (let y = 0; y < 5; y++) {
    let move = currentPokemon["moves"][y]["move"]["name"];
    let formatMove = move.charAt(0).toUpperCase() + move.slice(1);
    document.getElementById(
      "movesContainer"
    ).innerHTML += `<div class="move-info">${formatMove}</div>`;
  }
}

function renderPokemonInfo() {
  let pokemonName = currentPokemon["name"];
  let formatName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  let pokemonImage =
    currentPokemon["sprites"]["other"]["official-artwork"]["front_default"];
  document.getElementById("pokemonName").innerHTML = formatName;
  document.getElementById("pokemonImg").src = pokemonImage;
  getBgColor();
  changeAbout();
  getStats();
  getMoves();
}

function closeModal() {
  document.getElementById("modal").style = "display: none;";
  document.getElementById("loadButton").style = "display: '';";
}
