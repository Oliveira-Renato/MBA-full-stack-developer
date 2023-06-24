/**-------------------------BigInt----------------------------------- */

console.log(Number.MAX_SAFE_INTEGER);

let b = 1n;
let c = BigInt(2);

console.log(1234567890123456789012345689n);

let sum = b + c;

console.log(sum);

/**---------------Promise.allSettled() */

//AULA JAVASCRIPT ASSINCRONO

/**------------------globalThis------------------------------ */

//window no navegador
//global no Node.js

/**-----------------Optional Chaining --------------------------*/

const entity = {
    car : {
        model: "Palio",
        owner: {
            name: "Lucas",
            age: 19,
            lastName: "Silva"
        },
        brand: "Fiat"
    }
}

if(entity.car && entity.car.owner && entity.car.owner.lastName){
    console.log(entity.car.owner.lastName);
}

let lastName = entity.car.owner && entity.car.owner.lastName;

let lastName2 = entity.car?.owner?.lastName;

console.log(lastName2);


/**------------------Nullish coalescing operator--------------------- */

const chassi = entity.car.chassi || "9B123456789123";

console.log(chassi);

let request = {
    header: {
        type: "",
        timeout: 0,
        active: false,
    },
}

console.log(request.header.type || "GET");
console.log(request.header.timeout || 300);
console.log(request.header.active || true);

console.log(request.header.type ?? "GET");
console.log(request.header.timeout ?? 300);
console.log(request.header.active ?? true);
