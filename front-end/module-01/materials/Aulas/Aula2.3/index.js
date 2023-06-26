function Pessoa(nome) {
    if(!nome) this.nome = "Fulano";
    else this.nome = nome;

    this.dizerOla = () => console.log( this.nome + " diz: Olá!");
}

let pessoaA = new Pessoa("Alberto");

Pessoa.digaOla = function () { console.log( "Olá, meu nome é: "+this.nome); };

let pessoaB = new Pessoa("Maria");

console.log("-------------------------------------");
try{
    pessoaA.digaOla();
} catch (e) {
    console.log("Falha no pessoaA.digaOla");
}
try{
    pessoaB.digaOla();
} catch (e) {
    console.log("Falha no pessoaB.digaOla");
}
console.log("-------------------------------------");

pessoaB.digaOla = function () { console.log("Oi, meu nome é "+this.nome); };
try{
    pessoaA.digaOla();
} catch (e) {
    console.log("Falha no pessoaA.digaOla");
}
try{
    pessoaB.digaOla();
} catch (e) {
    console.log("Falha no pessoaB.digaOla");
}

Pessoa.prototype.digaOla = function () { console.log("Ola, eu sou o: "+this.nome); };

let pessoaC = new Pessoa("Ana");

console.log("-------------------------------------");

try{
    pessoaA.digaOla();
} catch (e) {
    console.log("Falha no pessoaA.digaOla");
}
try{
    pessoaB.digaOla();
} catch (e) {
    console.log("Falha no pessoaB.digaOla");
}
try{
    pessoaC.digaOla();
} catch (e) {
    console.log("Falha no pessoaC.digaOla");
}

Pessoa.prototype.dizerOla = function() {
    console.log(this.nome + " vou dizer outro Ola");
}

pessoaB.dizerOla = function () {
    console.log(this.nome + " consigo dizer outro Ola");
}

console.log("-------------------------------------");

try{
    pessoaA.dizerOla();
} catch (e) {
    console.log("Falha no pessoaA.dizerOla");
}
try{
    pessoaB.dizerOla();
} catch (e) {
    console.log("Falha no pessoaB.dizerOla");
}
try{
    pessoaC.dizerOla();
} catch (e) {
    console.log("Falha no pessoaC.dizerOla");
}