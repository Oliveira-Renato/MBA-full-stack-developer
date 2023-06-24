//EXEMPLO Promise.resolve
const p1 = new Promise((resolve) => resolve(console.log("Sempre será resolvida")));

Promise.resolve(console.log("Sempre será resolvida")); 

//EXEMPLO Promise.reject

//Promise.reject(console.log("Sempre será rejeitada"));

//EXEMPLO Promise.all

 Promise.all([
    new Promise(resolve => setTimeout(resolve, 1200, "P1")),
    new Promise(resolve => setTimeout(resolve, 700, "P2")),
    new Promise(resolve => setTimeout(resolve, 2900, "P3"))
]).then(results => results.data[0].name)
.then(name => console.info(name))
.catch(erro => console.error(`Exceção lançada na: ${erro}`)); 

//EXEMPLO Promise.all Sucesso na execução de todas as promises

 Promise.all([
    new Promise(resolve => setTimeout(() => resolve([]), 1200)),
    new Promise(resolve => setTimeout(() => resolve([10]), 700)),
    new Promise(resolve => setTimeout(() => resolve([3,4]), 2900))
]).then(results => results.length)
.then(size => console.info(size))
.catch(erro => console.error(erro)); 

//EXEMPLO Promise.all - Uma das promises será rejeitada

 Promise.all([
    new Promise(resolve => setTimeout(() => resolve([]), 2800)),
    new Promise((resolve,reject) => setTimeout(() => reject([10]), 1200)),
    new Promise(resolve => setTimeout(() => resolve([3,4]), 800))
]).then(results => results.length)
.then(size => console.info(size))
.catch(erro => console.error(erro)); 

//EXEMPLO Promise.race - Corrida de promises, qual retorna primeiro?

 const p5 = Promise.race([
    new Promise(resolve => setTimeout(resolve, 2000, "P1")),
    new Promise((resolve, reject) => setTimeout(reject, 3000, "P2"))
])

p5.then(result => console.log(result));
p5.catch(error => console.error(error));
 
//EXEMPLO Promise.race - Varias promises com rejeicao

 const p5 = Promise.race([
    new Promise(resolve => setTimeout(resolve, 3000, "P1")),
    new Promise((resolve, reject) => setTimeout(reject, 2000, "P2")),
    new Promise(resolve => setTimeout(resolve, 4000, "P3"))
])

p5.then(result => console.log(result));
p5.catch(error => console.error(error)); 

//EXEMPLO Promise.race
 function showStatus() {
    console.log("Aguarde dados sendo carregados.....")
}

function timeout(delay, result) {
    return new Promise(resolve => {
        setTimeout(() => resolve(result), delay);
    });
}

function getCarInfo(car) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Car details: ${car}`), Math.floor(600*Math.random))
    });
}

function showCarInfo(car) {
    return getCarInfo(car).then(info => {
        console.log(`Car info: ${car}`)
        return true;
    })
}

Promise.race([showCarInfo("Palio"), timeout(300)])
.then( displayed => { if(!displayed) showStatus()}); 

//EXEMPLO Promise.allSettled 
 
const p8 = Promise.allSettled([
    new Promise(resolve => setTimeout(resolve, 3000, "P1")),
    new Promise((resolve, reject) => setTimeout(reject, 2000, "P2")),
    new Promise(resolve => setTimeout(resolve, 4000, "P3"))
])

p8.then(result => console.log(result))
p8.catch(error => console.error(error)) 

//EXEMPLO Promise.any - Retorna a primeira promise fulfilled/realizada/resolvida
const p9 = Promise.any([
    new Promise(resolve => setTimeout(resolve, 3000, "P1")),
    new Promise((resolve, reject) => setTimeout(reject, 2000, "P2")),
    new Promise(resolve => setTimeout(resolve, 4000, "P3"))
])

p9.then(result => console.log(result))
p9.catch(error => console.error(error))

