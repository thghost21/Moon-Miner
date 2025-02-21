// SECTION
let moonRock = 0

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

function mine() {
  moonRock++
  console.log(moonRock);

}

// SECTION
function update() {


}