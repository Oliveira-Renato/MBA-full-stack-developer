import express from 'express';
import carListJson from '../car-list.json' assert {type: 'json'};

const router = express.Router();
const carList = carListJson;


function handleFindMaxMinModel(pAction) {
  //retornar nome da marca que possui mais ou menos modelos
  let arrayModelsTotal = [],
    listTotal = [],
    maxMinModel = 0,
    result = [];

  Object.keys(carListJson).forEach((item, index) => {
    arrayModelsTotal.push({
      brand: carListJson[item]['brand'],
      total: parseInt(carListJson[item]['models'].length)
    })
    listTotal.push(parseInt(carListJson[item]['models'].length))
  })

  maxMinModel = pAction === 'max' ? Math.max(...listTotal) : Math.min(...listTotal);

  Object.keys(arrayModelsTotal).forEach((item) => {
    //console.log(carList[item]['brand'])
    if (arrayModelsTotal[item]['total'] === maxMinModel) {
      result.push({
        brand: arrayModelsTotal[item]['brand'],
        totalModels: arrayModelsTotal[item]['total']
      })
    }
  })

  return result;
}

router.get('/', (_, res) => {
  res.send('/marcas')
});

//feito
router.get('/maisModelos', (_, res) => {
  res.send(handleFindMaxMinModel('max'));
  res.end();
});

//feito
router.get('/menosModelos', (_, res) => {
  res.send(handleFindMaxMinModel('min'));
  res.end();
});

router.get('/listaMaisModelos/:id', (req, res, next) => {
  res.send('/listaMaisModelos/' + req.params.id)
});

router.get('/listaMenosModelos/:id', (req, res, next) => {
  res.send('/listaMenosModelos/' + + req.params.id)
});

router.post('/listaModelos', (req, res, next) => {
  res.send('/listaModelos')
});

export default router;

