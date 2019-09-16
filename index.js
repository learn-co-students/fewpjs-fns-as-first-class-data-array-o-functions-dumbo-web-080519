function wakeDog(dogName, dogBreed) {
    let walk = `Wake ${dogName} the ${dogBreed}`;
    console.log(walk);
    return walk;
}

function leashDog(dogName, dogBreed) {
    let leash = `Leash ${dogName} the ${dogBreed}`;
    console.log(leash);
    return leash;
}

function walkToPark(dogName, dogBreed) {
    let walk = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(walk);
    return walk;
}

function throwFrisbee(dogName, dogBreed) {
    let frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(frisbee);
    return frisbee;
}

function walkHome(dogName, dogBreed) {
    let walkHome = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(walkHome);
    return walkHome;
}

function unleashDog(dogName, dogBreed) {
    let unleash = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleash);
    return unleash;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let arrayOfFunctions = []
    let activity = ""
    for (let index = 0; index < routine.length; index++) { 
        activity = routine[index](dogName, dogBreed);
        arrayOfFunctions.push(activity)
    } 
    return arrayOfFunctions
}