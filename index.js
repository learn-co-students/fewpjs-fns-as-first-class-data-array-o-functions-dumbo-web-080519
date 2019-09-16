const wakeDog = function wakeDog(dogName, dogBreed) {
  let str = `Wake ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

const leashDog = function leashDog(dogName, dogBreed) {
  let str = `Leash ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

const walkToPark = function walkToPark(dogName, dogBreed) {
  let str = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

const throwFrisbee = function  throwFrisbee(dogName, dogBreed) {
  let str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

const walkHome = function walkHome(dogName, dogBreed) {
  let str = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

const unleashDog = function unleashDog(dogName, dogBreed) {
  let str = `Unleash ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  const value = routine.map(fn => fn(dogName, dogBreed));
  console.log(this.routine());
  console.log(value)
  return value;
}
