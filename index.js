function wakeDog(dogName='Byron', dogBreed='husky') {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`;
  }
function leashDog(dogName='Byron', dogBreed='husky') {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
  }
function walkToPark(dogName='Byron', dogBreed='husky') {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`;
  }
function throwFrisbee(dogName='Byron', dogBreed='husky') {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}
function walkHome(dogName='Byron', dogBreed='husky') {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`;
}
function unleashDog(dogName='Byron', dogBreed='husky') {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`;
}

  
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog, exerciseDog];

function arrayOfActions(dog, breed) {
  return routine.map(fn => fn(dog, breed))
}
// routine = routine.exercise(`Bernie`, `poodle`);

// routine.forEach( function(text){
//   console.log(text);
// })