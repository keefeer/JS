let str = 'ahb acb aeb aeeb adcb axeb';
let res = str.match(/[a][a-z][b]/gm);
console.log(res);

let int = '2 + 3 223 2223';
let res_int = int.match(/[2][\s][+][\s][3]/gm);
console.log(res_int);

let now = new Date();
console.log(now.getDate(), now.getMonth(), now.getFullYear());