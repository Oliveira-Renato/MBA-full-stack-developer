import express from 'express';
import carListJson from '../car-list.json' assert {type: 'json'};

const router = express.Router();
router.use(express.json())

function handeCarList() {
  let arrayModelsTotal = [],
    listTotal = [];

  Object.keys(carListJson).forEach((item) => {
    arrayModelsTotal.push({
      brand: carListJson[item]['brand'],
      total: parseInt(carListJson[item]['models'].length)
    })
    listTotal.push(parseInt(carListJson[item]['models'].length))
  })

  return { 'arrayModelsBrand': arrayModelsTotal, 'arrayTotalModels': listTotal };
}

function handleFindMaxMinModel(pAction) {
  let maxMinModel = 0,
    result = [];

  const { arrayModelsBrand, arrayTotalModels } = handeCarList();

  maxMinModel = pAction === 'max' ? Math.max(...arrayTotalModels) : Math.min(...arrayTotalModels);

  Object.keys(arrayModelsBrand).forEach((item) => {
    if (arrayModelsBrand[item]['total'] === maxMinModel) {
      result.push({
        brand: arrayModelsBrand[item]['brand'],
        totalModels: arrayModelsBrand[item]['total']
      })
    }
  })
  return result;
}

function handleFindModels(pAction, pQtd) {
  let { arrayModelsBrand } = handeCarList(),
    vQtdModels = parseInt(pQtd),
    count = 0,
    vResult = [],
    container = {};

  let arrayModelsBrandSorted = pAction === 'mais' ?
    arrayModelsBrand.sort((a, b) => b.total - a.total) :
    arrayModelsBrand.sort((a, b) => a.total - b.total)

  for (let i = 0; i < vQtdModels; i++) {
    vResult.push(arrayModelsBrandSorted[i])
  }

  for (let i = 0; i < vResult.length; i++) {
    for (let j = 1; j < vResult.length; j++) {
      if (vResult[i].total === vResult[j].total) {
        count += 1;
        if (count === 2) {
          if (vResult[i].brand > vResult[j].brand) {
            container = vResult[i]
            vResult[i] = vResult[j]
            vResult[j] = container
          }
        }
      }
    }
  }
  return vResult;
}

function handleBrandModels(pReq) {
  let vBrand = pReq.brand;
  let vModels = carListJson.filter(carListJson => ((carListJson.brand).toLowerCase() === (vBrand).toLowerCase()));

  return vModels ? vModels : [];
}

router.get('/', (_, res) => {
  res.send('/marcas')
});

//feito
router.get('/maisModelos', (_, res) => {
  res.send(handleFindMaxMinModel('max'));
});

//feito
router.get('/menosModelos', (_, res) => {
  res.send(handleFindMaxMinModel('min'));
});

//feito
router.get('/listaMaisModelos/:x', (req, res, next) => {
  res.send(handleFindModels('mais', req.params.x));
});

//feito
router.get('/listaMenosModelos/:x', (req, res, next) => {
  res.send(handleFindModels('menos', req.params.x));
});

//feito
router.post('/listaModelos', (req, res, next) => {
  res.send(handleBrandModels(req.body));
});

export default brandRouter;

