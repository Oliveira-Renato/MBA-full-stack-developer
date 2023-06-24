//EXEMPLO PROXY COM REFLECT
let tradutor = {
    'Carro': 'Car',
    'Ano': 'Year'
};

let handlerTradutor = {
    get(target, property) {
        if( property in target){
            return Reflect.get(target, property);
        } else {
            return property;
        }
    },
    set(target, property, value) {
        if( typeof value == 'string') {
            return Reflect.set(target,property,value);
        } else {
            return false;
        }
    }
};

tradutor = new Proxy(tradutor,handlerTradutor);

console.log(tradutor['Carro']);
console.log(tradutor['Modelo']);

tradutor["Modelo"] = "Model";
tradutor["Marca"] = 123456;

console.log(tradutor['Modelo']);
console.log(tradutor['Marca']);

//EXEMPLO DE PROXY/REFLECT PARA OCULTAR PROPRIEDADES NO OBJETO
const hide = (target, prefix = '_') => new Proxy(target, {
    has: (target, property) => (!property.startsWith(prefix) && property in target),
    get: (target, property, receiver) => (property in receiver) ? target[property] : undefined,
    ownKeys: (target) => Reflect.ownKeys(target)
    .filter( property => (!property.startsWith(prefix) || typeof property !== "string" ))
} );

let Carro = hide({
    Ano: 2020,
    Modelo: 'Polo',
    _proprietario: "João" 
});

console.log(Carro._proprietario);
console.log('_proprietario' in Carro);
console.log(Object.keys(Carro));