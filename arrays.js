let films = ["El Patron", "Kambucha", "Zabiw na suharevskoy"];
films.forEach(value => console.log(value));

console.log ("-----------------");
let cars = ["Renault", "Lada", "Ford", "SAAB"];
let cars_line = cars.join(", ");
let cars_array = cars_line.split(", ");
console.log(cars_array);

console.log ("-----------------");
let names_of_friend = ["Sasha", "Gena", "Gruzilo"];
let hello_names = names_of_friend.map(names => `Hello ${names}`);
console.log(hello_names);

console.log ("-----------------");
let bool = [12,35,65,0];
let bool_revers = bool.map(bool => Boolean(bool));
console.log(bool_revers);

console.log ("-----------------");
let numbers = [1,6,7,8,3,4,5,6];
let sort = numbers.sort().reverse();
console.log(sort);


console.log ("-----------------");
let sort_3 = [1,6,7,8,3,4,5,6];
let complete_sort = sort_3.filter(value => value > 3);
console.log(complete_sort);


let two_param = [12,53,79]
let find_index = (arr, element) => console.log(arr.indexOf(element));
find_index(two_param, 53);

console.log ("-----------------");
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
} 


const isPrime = (n) => {

    if (n===1) {
      return false;
    } else if(n === 2) {
      return true;
    } else {
      for(let x = 2; x < n; x++) {
        if(n % x === 0) {
          return false;
        }
      }
      return true;  
    }
  }
  console.log ("-----------------");
  for (let i = 0; i < 10; i++) {
    if (isPrime (i)) {
        console.log(i);
    }
  }

  console.log ("-----------------");
  for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
  }