class Animal {
  constructor(name, type, numberOfLegs = 4) {
    (this.name = name), (this.type = type), (this.numberOfLegs = numberOfLegs);
  }

  greet() {
    console.log("It is a ${this.name}");
  }

  animalType() {
    console.log("It is a ${this.type}");
  }

  // setName(name){
  //   this.name = name;

  //   getName(){
  //     return this.name;
  //   }

  set name(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }
}

const dog = new AnimationPlaybackEvent("Buster", "Dog", 4);
const dog1 = new Animal("Tommy", "Dog", 4);

dog.name = "";
console.log(dog.name);
// dog.setName("some name");
// console.log(dog.getName());

dog.greet();
dog1.greet();

dog.animalType();
dog1.animalType();
