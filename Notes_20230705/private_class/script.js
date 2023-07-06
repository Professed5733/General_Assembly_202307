class SomeClass {
  #privateVariable;
  publicVariable;
  static #staticPrivateVariable = "static var 1";

  constructor(input) {
    this.#privateVariable = input;
  }

  #privateFunction() {
    return "two";
  }

  getPrivateVariable() {
    return this.#privateVariable;
  }

  callPrivateFunction() {
    return this.#privateFunction();
  }

  static getStaticPrivateVariable() {
    return this.#staticPrivateVariable;
  }

  static #staticPrivateFuncion() {
    return "three";
  }

  static callStaticPrivateFunction() {
    return this.this.#staticPrivateFunction();
  }
}

const classInstance = new SomeClass("the input");
console.log(classInstance.getPrivateVariable());
console.log(classInstance.callPrivateFunction());
console.log(classInstance.privateVariable);
classInstance.publicVariable = 17;
console.log(classInstance.publicVariable);

SomeClass.getStaticPrivateVariable();
SomeClass.callStaticPrivateFunction();
