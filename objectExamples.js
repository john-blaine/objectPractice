/*jshint esversion: 6 */

//simple ES6 class example

class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  //getter method
  get activity() {
    const today = new Date();
    const hour = today.getHours();

    if (hour > 8 && hour <= 20) {
      return 'playing';
    } else {
      return 'sleeping';
    }

  }

  get owner() {
    return this._owner;
  }

  set owner(owner) {
    this._owner = owner;
    console.log(`setter called: ${owner.name}`);
  }

  speak() {
    console.log(this.sound);
  }
}

class Owner {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  get phone() {
    return this._phone;
  }

  set phone(phone) {
    this._phone = phone.replace(/[^0-9]/g, '');
  }

}

const onyx = new Pet('dog', 9, 'pug', 'bark bark');
const jasper = new Pet('dog', 4, 'pug', 'yip yip');

//The getter method will return it's computed/dynamic value
console.log(onyx.activity);

//But the instance of the class will not have the getter method as a property
console.log(onyx);

//Set owner and owner's phone number
onyx.owner = new Owner('John', '1201 Davidson Drive');
onyx.owner.phone = '(970) 646-3137';

console.log(onyx.owner.phone);




