'use strict';
console.log('app file is connect!');




function Pet(petName, interests, isGoodWithKids, isGoodWithCats, isGoodWithDogs){
  this.petName = petName;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
}


Pet.prototype.setAge = function(){
  this.age = randomAge(3,12) + 'Months old.';
};

function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth + 1) + minMonth);
}

Pet.prototype.getInterests = function(){
  let randomIndexArray = Math.floor((Math.random() * this.interests.length));
  console.log('pet interests:',randomIndexArray);
};



// create (aka instantiate) some Kittens
const frankie = new Pet('Frankie', ['cuddling', 'chasing string', 'catnip'], true, true, true, 'frankie.jpeg');

const serena = new Pet('Serena', ['sitting in laps', 'climbing curtains', 'eating treats'], false, true, false, 'littleDragon.jpeg');

const jumper = new Pet('Jumper', ['sunbeams', 'yarn', 'milk', 'paper bags'], false, true, true, 'jummper.jpeg');


frankie.setAge();
frankie.getInterests();






let allPets = [frankie, serena,jumper];
console.log('do we get pets?', allPets);
