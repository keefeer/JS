const car = {color: "black",power: () => console.log("340Hp")};
car.power();
const getVelue = () => {
    let apple = prompt("Введите яблочки", '');
    let pearl = prompt("Введите грушки");
console.log(+apple + +pearl);}

car.color = "green";
console.log(car);
getVelue();


let person = prompt ("Who are you?", '');
const name = "Mikita";
const trueName = (person, name) => {
    if (name === person) {
        alert(`Hello ${person}`);
    } else {
        alert("Noname");
    }
 }
trueName(person, name);

const calculate = value => console.log(typeof value);
calculate(5);
calculate('hello');
calculate(true);


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
  console.log(isPrime(4));
  console.log(isPrime(101));