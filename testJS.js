const number = 2;
const str = "34";
const bool = true;
const result_a = +str + bool;
const result_b = +str + number;
const result_c = number + bool;
console.log("Result A", result_a);
console.log("Result B", result_b);
console.log(`Result C ${result_c}`);

const result_d = str * bool;
const result_e = str * number;
const result_f = number * bool;
console.log("Result D", result_d);
console.log("Result E", result_e);
console.log(`Result F ${result_f}`);

const result_j = str / bool;
const result_k = str / number;
const result_l = number / bool;
console.log("Result J", result_j);
console.log("Result K", result_k);
console.log(`Result L ${result_l}`);

const bool_to_str = String(bool);
const num_to_str = String(number);
console.log("Result BOOL", typeof bool_to_str);
console.log("Result NUM", typeof num_to_str);