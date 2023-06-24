

//ESCOPO DE BLOCO
if(true) {
    const message = "Olá";
    console.log(message);
}
//console.log(message); //ReferenceError: message is not defined

for(const color of ['verde','vermelho','amarelo']){
    const message = "Olá";
    console.log(color);
    console.log(message);
}

//console.log(color);
//console.log(message);

//EXEMPLO DE ESCOPO DE BLOCO COM VAR POREM SERA ESCOPO GLOBAL
if(true){
    var count = 0;
    console.log(count);
}
console.log(count);


//EXEMPLO DE ESCOPO LOCAL COM VAR
function executar() {
    var text = "Escopo local com o VAR";
    console.log(text);
}
executar();
//console.log(text); //ReferenceError: text is not defined

//EXEMPLO DE ESCOPO LOCAL LET CONST
function executar2() {
    let txt = 0;
    const test = 2;

    function executar3 () {};

    console.log(txt);
    console.log(test);
    console.log(executar3);
}

executar2();
//console.log(txt); //ReferenceError: txt is not defined
//console.log(test); //ReferenceError: txt is not defined
//console.log(executar3); //ReferenceError: txt is not defined

//ESCOPO ANINHADO
function executar3(){

    const txt = 'Escopo aninhado';

    if(true) {
        const name = 'Carro';
        console.log(txt);
    }

    //console.log(name); //ReferenceError: name is not defined
}

executar3();

//EXEMPLO ESCOPO GLOBAL

let gName = "Bruno";

console.log(gName);

//EXEMPLO HOISTING
printName();

function printName(){
    console.log("Nome: "+gName);
}