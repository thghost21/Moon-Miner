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
    price: 600,
    quantity: 0,
    bonus: 20
  },
  {
    name: 'spaceStation',
    price: 600,
    quantity: 0,
    bonus: 100
  }
];

// SECTION
update()

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

    } else if (moonRock > upgrade.price) {
      moonRock -= upgrade.price
      clickStats += upgrade.bonus
      upgrade.quantity++



    }

  }
  console.log(moonRock, clickStats);
  update()

}

// SECTION
function update() {
  const moonRockElem = document.getElementById('moonRock')
  moonRockElem.innerText = `${moonRock} 🪨`



}