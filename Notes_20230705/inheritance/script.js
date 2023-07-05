class Character {
  constructor(hitpoints = 100, weapon = false, movement = 100) {
    (this.hitpoints = hitpoints),
      (this.weapon = weapon),
      (this.movement = movement);
  }
  damage(amount) {
    this.hitpoints -= amount;
    return this.hitpoints;
  }
}

class Worker extends Character {
  constructor(strength) {
    super();
    this.strength = strength;
  }
}

class Warrior extends Character {
  constructor(
    hitpoints = 300,
    weapon = true,
    movement = 20,
    weaponDamage = 20
  ) {
    //super(hitpoints, weapon, movement);
    super();
    this.weaponDamage = weaponDamage;
  }

  fight() {
    return Math.floor(Math.random() * this.weaponDamage);
  }

  damage(amount) {
    this.hitpoints = his.hitpoints - (amount - 10);
    return this.hitpoints;
  }
}

const warrior1 = new Warrior();
const worker1 = new Worker();

const damage = warrior1.fight();
worker1.damage(damage);

console.log(
  `Warrior hit worker for ${damage}. Worker's hitpoint now is ${worker1.hitpoints}`
);

// class SomeClass {
//   static someVariable = "one";

//   static someFunction() {
//     return "static function";
//   }
// }

// SomeClass.someFunction();
