
/*----------------OPERADOR DE EXPONENCIACAO--------*/
let r = 3;

let area = Math.PI * r * r;

console.log(area);

let area1 = Math.PI * Math.pow(r, 2);

console.log(area);

let area2 = Math.PI * (r ** 2);

console.log(area2);

let quadrado = 2;

quadrado **= 2;

/*-----------------Array.prototype.includes()------------*/

console.log([1, 2, 3].includes(2));

console.log([1, 2, 3].includes(4));

console.log([1, 2, 3].includes(3, 3));

console.log([1, 2, 3].includes(3, -1));

console.log([1, 2, NaN].includes(NaN));



