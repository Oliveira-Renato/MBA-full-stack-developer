const carModel = [
    'Onix',
    'T-Cross',
    'HB20',
    'Palio'
];

/* //FOR - Laço de repetição
for(let index = 0; index < carModel.length; index++){
    console.log(carModel[index]);
}

//WHILE - Laço de repetição
let index = 0;
while(index < carModel.length) {
    console.log(carModel[index]);
    index++;
}

//FOR-OF
for(const car of carModel) {
    console.log(car);
} */

const carModelAll = {
    allModel: {
        'Fiat': [
            'Palio',
            'Cronos',
            'Toro'
        ],
        'Volksvagem': [
            'Gol',
            'Up',
            'Nivus',
            'Tiguan'
        ],
        'Chevrolet': [
            'Onix',
            'Tracker',
            'Corsa'
        ]
    },
    [Symbol.iterator]() {
        const brands = Object.values(this.allModel)
        
        let currentModelIndex = 0;
        let currentBrandIndex = 0;

        return {
            next() {
             
                //Lista de todos os modelos da marca
                const models = brands[currentBrandIndex];
                //Verifica se ja navegou em todos os modelos da marca e passa para a proxima
                if(!(currentModelIndex < models.length)) {
                    currentBrandIndex++;
                    currentModelIndex = 0;
                }
                //Verifica se ja navegou em todas as marcas
                if(!(currentBrandIndex < brands.length)) {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            
                return {
                    value: brands[currentBrandIndex][currentModelIndex++],
                    done: false
                }
            }
        }
    } 
}

for(const car of carModelAll) {
    console.log(car);
}