import express from 'express';
import { promises as fs } from 'fs';

const router = express.Router();
const { readFile } = fs;

async function getBrands() {
  const brands = await readFile('car-list.json');
  return JSON.parse(brands)
}

async function handeCarList() {
  let arrayModelsTotal = [],
    listTotal = [],
    brands = await getBrands();

  Object.keys(brands).forEach((item) => {
    arrayModelsTotal.push({
      brand: brands[item]['brand'],
      total: parseInt(brands[item]['models'].length)
    })
    listTotal.push(parseInt(brands[item]['models'].length))
  })

  return { 'arrayModelsBrand': arrayModelsTotal, 'arrayTotalModels': listTotal };
}

async function handleFindMaxMinModel(pAction) {
  let maxMinModel = 0,
    result = [];

  const { arrayModelsBrand, arrayTotalModels } = await handeCarList();
  console.log(arrayModelsBrand, arrayTotalModels)
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

async function handleFindModels(pAction, pQtd) {
  let { arrayModelsBrand } = await handeCarList(),
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
  let vModels = brands.filter(brands => ((brands.brand).toLowerCase() === (vBrand).toLowerCase()));

  return vModels ? vModels : [];
}

router.get('/', (_, res) => {
  res.send('/marcas')
});

//feito
router.get('/maisModelos', async (_, res) => {
  res.send(await handleFindMaxMinModel('max'));
});

//feito
router.get('/menosModelos', async (_, res) => {
  res.send(await handleFindMaxMinModel('min'));
});

//feito
router.get('/listaMaisModelos/:x', async (req, res) => {
  res.send(await handleFindModels('mais', req.params.x));
});

//feito
router.get('/listaMenosModelos/:x', async (req, res) => {
  res.send(await handleFindModels('menos', req.params.x));
});

//feito
router.post('/listaModelos', async (req, res) => {
  res.send(await handleBrandModels(req.body));
});

export default router;

