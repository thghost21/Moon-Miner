// SECTION
let moonRock = 0
let clickStats = 1
let autoStats = 0

let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 5,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'drill',
    price: 100,
    quantity: 0,
    bonus: 5,
  }
];

let automaticUpgrades = [
  {
    name: 'astronaut',
    price: 1000,
    quantity: 0,
    bonus: 50
  },
  {
    name: 'spaceStation',
    price: 10000,
    quantity: 0,
    bonus: 500
  }
];




// SECTION


function mine() {
  moonRock += clickStats
  console.log(moonRock);
  update()
}

function buyUpgrade(indexNumber) {


  for (let i = 0; i < clickUpgrades.length; i++) {
    const upgrade = clickUpgrades[indexNumber];
    if (moonRock < 1) {
      return

    } else if (moonRock >= upgrade.price) {
      moonRock -= upgrade.price
      clickStats += upgrade.bonus
      upgrade.quantity++
      update()

      clickUpgrades.forEach(upgrade => updateClickStats(upgrade.name))
      automaticUpgrades.forEach(upgrade => updateAutoStats(upgrade.name))
    }

  }
  console.log(moonRock, clickStats);
  update()

}






// SECTION
function update() {
  const moonRockElem = document.getElementById('moonRock')
  moonRockElem.innerText = `${moonRock} 🪨`





};


function updateClickStats(name) {
  const statsElem = document.getElementById(name + 'Stats')
  const foundClickStats = clickUpgrades.find(upgrade => upgrade.name == name)

  let bonus = foundClickStats.bonus * foundClickStats.quantity

  statsElem.innerText = `${foundClickStats.quantity} ${foundClickStats.name} => ${bonus}`
}


function updateAutoStats(name) {
  let autoBonus = 0

  const statsElem = document.getElementById(name + 'Stat')
  const foundAutoStats = clickUpgrades.find(upgrade => upgrade.name == name)

  autoBonus = foundAutoStats.bonus * foundAutoStats.quantity

  statsElem.innerText = `${foundAutoStats.quantity} ${foundAutoStats.name} ${autoBonus}`
}


update()
updateAutoStats()
updateClickStats()

