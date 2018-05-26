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

  speak() {
    console.log(this.sound);
  }
}

const onyx = new Pet('dog', 9, 'pug', 'bark bark');
const jasper = new Pet('dog', 4, 'pug', 'yip yip');

//The getter method will return it's computed/dynamic value
console.log(onyx.activity);

//But the instance of the class will not have the getter method as a property
console.log(onyx);




