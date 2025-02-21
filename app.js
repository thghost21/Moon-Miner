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

function buyClickUpgrade(indexNumber) {


  for (let i = 0; i < clickUpgrades.length; i++) {
    const upgrade = clickUpgrades[indexNumber];
    if (moonRock < 1) {
      return

    } else if (moonRock >= upgrade.price) {
      moonRock -= upgrade.price
      clickStats += upgrade.bonus
      upgrade.quantity++
      upgrade.price *= 1.20
      upgrade.price = Math.trunc(upgrade.price)

      drawClickUpdatedPrices(upgrade.name)
      update()

      clickUpgrades.forEach(upgrade => updateClickStats(upgrade.name))
      return
    }

  }
  console.log(moonRock, clickStats);
  update()

}

function buyAutoUpgrade(indexNumber) {


  for (let i = 0; i < automaticUpgrades.length; i++) {
    const upgrade = automaticUpgrades[indexNumber];
    if (moonRock < 1) {
      return

    } else if (moonRock >= upgrade.price) {
      moonRock -= upgrade.price
      autoStats += upgrade.bonus
      upgrade.quantity++

      upgrade.price *= 1.20
      upgrade.price = Math.trunc(upgrade.price)

      drawAutoUpdatedPrices(upgrade.name)
      update()

      automaticUpgrades.forEach(upgrade => updateAutoStats(upgrade.name))
      return
    }

  }
  console.log(moonRock, clickStats);
  update()

}

function autoMoonRocks() {
  moonRock += autoStats
  update()
}

setInterval(autoMoonRocks, 3000)

function test() {
  moonRock += 100000

}



// SECTION
function update() {
  const moonRockElem = document.getElementById('moonRock')
  moonRockElem.innerText = `${moonRock} 🪨`

  const clickStatElem = document.getElementById('perClick')
  clickStatElem.innerText = `+${clickStats} Per Click`

  const autoStatElem = document.getElementById('perCycle')
  autoStatElem.innerText = `+${autoStats} Per Cycle`
};


function updateClickStats(name) {
  const statsElem = document.getElementById(name + 'Stats')
  const foundClickStats = clickUpgrades.find(upgrade => upgrade.name == name)

  let bonus = foundClickStats.bonus * foundClickStats.quantity

  statsElem.innerText = `${foundClickStats.quantity} ${foundClickStats.name} => ${bonus} per click`
}


function updateAutoStats(name) {

  const statsElem = document.getElementById(name + 'Stat')
  const foundAutoStats = automaticUpgrades.find(upgrade => upgrade.name == name)

  let autoBonus = foundAutoStats.bonus * foundAutoStats.quantity

  statsElem.innerText = `${foundAutoStats.quantity} ${foundAutoStats.name} => ${autoBonus} per Cycle`
}

function drawAutoUpdatedPrices(name) {
  const updatedPriceElem = document.getElementById(name + 'Price')
  const foundPriceUpdate = automaticUpgrades.find(upgrade => upgrade.name == name)

  updatedPriceElem.innerText = `${foundPriceUpdate.price} 🪨`

}
function drawClickUpdatedPrices(name) {
  const updatedPriceElem = document.getElementById(name + 'Pricey')
  const foundPriceUpdate = clickUpgrades.find(upgrade => upgrade.name == name)

  updatedPriceElem.innerText = `${foundPriceUpdate.price} 🪨`
}

update()
//updateAutoStats()
//updateClickStats()


