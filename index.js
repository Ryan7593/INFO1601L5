let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;

let name = "Bob";
let age = 24;

console.log(typeof(name));
console.log(typeof(age))

console.log(`hello my name is ${name}, i am ${age} years old`)

console.log(`i was born in ${2020 - age}`)

console.log('\n');

console.log('1' == 1); 
console.log(1 == true);
console.log("false" == false);
console.log("false" == true);

if("false")
  console.log("hello false!")


console.log('1' === 1);
console.log(1 === true);
console.log("true" === true);

console.log('\n');

for(let i=0; i<50; i++)
{
  if(i%3 === 0 && i%5 === 0)
  {
    console.log('fizzbuzz');
  }
  else if(i%3 === 0)
  {
    console.log('fizz');
  }
  else if(i%5 === 0)
  {
    console.log('buzz');
  }
  else 
  {
    console.log(i);
  } 
}

console.log('\n');

function happyPrint(string)
{
  console.log("😃: " + string);
}

function sadPrint(string)
{
  console.log("😢: " + string);
}

function add(a, b, callback)
{
  let ans= a+b;
  callback(ans);
}

add(5, 10, happyPrint);
add(11, 12, sadPrint);

console.log('\n');

// function printDate()
// {
//   let date = new Date(2019, 11, 17, 3, 24, 0);
//   console.log(date.toLocaleTimeString("en-US"));
// }

// setInterval(printDate, 1000);

let arr = [ -5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));

arr.push(11);

console.log(arr);

let lastItem = arr.pop();

console.log(lastItem, arr);

arr.unshift(22);

console.log(arr);

let firstItem = arr.shift();
console.log(firstItem, arr);

let reversed = arr.reverse(); 
console.log(reversed);
console.log(arr.join('-'));

console.log('\n');



let arr2 = [12, 33, 4, 5, -4, 8, 19, 25];
                
function double(num)
{
  return num * 2;
}

let doubledArr = arr2.map(double); 
console.log(doubledArr);

function isOdd(num)
{
  return num%2 !== 0; 
}

let odds = arr2.filter(isOdd);
console.log(odds);


function has5Factor(ele)
{
  return ele % 5 === 0;
}

let hasFiveFactor = arr2.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b)
{
 return a - b;
}


let ascending = arr2.sort(intCompare)
console.log(ascending);

console.log('\n');


function createPerson(name, height, weight)
{
  return {name: name, height: height, weight: weight };
}

function calcBMI (weight, height)
{
  return weight / (height*height);
}

function avgBMI(people)
{
   let sum = 0;
   for (let person of people)
   {
    sum += calcBMI(person.weight, person.height);
   }

   return sum/people.length;
}

let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelley", 50, 1.7)
];

console.log(avgBMI(people));
