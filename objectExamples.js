/*jshint esversion: 6 */

//simple ES6 class example

class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }
}

