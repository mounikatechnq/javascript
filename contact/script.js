//constructor()
class Car{

    constructor(make, model, year, color){
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }

    drive(){
          console.log("You drive the car!");
        }
    brake(){
          console.log("You step on the brakes!");
        }
      }

  let car1 = new Car("Ford", "Mustang", 2022, "red");
  let car2 = new Car("Chevy", "Corvette", 2021, "blue");

  console.log(car1.make);
  console.log(car1.model);
  console.log(car1.year);
  console.log(car1.color);

  console.log(car2.make);
  console.log(car2.model);
  console.log(car2.year);
  console.log(car2.color);
  				
//console()
const str1 = 'Good';
const str2 = 'Morning';

console.log(str1.concat(' ', str2));


console.log(str2.concat(', ', str1));
//endsWith():
const str3 = 'foxs are the best!';
console.log(str3.endsWith('best!'));

console.log(str3.endsWith('best', 17));


const str4 = 'Is this a question?';

console.log(str4.endsWith('question'));
//fromCharCode():					   

console.log(String.fromCharCode(189, 43, 190, 61)); 
//includes():
const sentence = 'The quick brown dog jumps over the lazy dog.';
const word = 'dog';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);                    
	   //indexOf()				   

const paragraph = 'The quick brown fox jumps over the lazy dog. If the raja barked, was it really lazy?';

const searchTerm = 'raja';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
//charAt()
const sentence1 = 'The quick brown cats jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
//charCodeAt()
const sentence2 = 'Hii Hello This is mounika.';

const index1 = 4;

console.log(`The character code ${sentence1.charCodeAt(index1)} is equal to ${sentence.charAt(index1)}`);
//codePointAt()
const icons = '😒 😞 😔 😟';
console.log(icons.codePointAt(1));
//at()
const sentence3 = 'My cat name is jessy it is over lazy cat.';

let index3 = 5;

console.log(`Using an index of ${index3} the character returned is ${sentence3.at(index3)}`);

index3 = -4;

console.log(`Using an index of ${index3} the character returned is ${sentence.at(index3)}`);