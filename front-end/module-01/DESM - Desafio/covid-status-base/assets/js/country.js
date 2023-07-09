//GET API DATA BY COUNTRY
async function getCovidDataByCountry(pCountry) {
  try {
    let country = pCountry || 'Brazil'
    const response = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`);
    return await response.data;
  } catch (error) {
    console.error(error);
  }
}
//GET HISTORICAL DATE FROM ANY COUNTRY
async function getCovidHistoricalByCountry(pCountry) {
  try {
    let country = pCountry || 'Brazil'
    const response = await axios.get(`https://disease.sh/v3/covid-19/historical/${country}?strict=true`);
    return await response.data;
  } catch (error) {
    console.error(error);
  }
}
//OUTPUT THE KPI DATA IN THE KPI SECTION INFO
async function handleKPIinfoByCountry(pCountry) {
  try {
    const CovidData = await getCovidDataByCountry() || {}
    let vCases = document.getElementById('kpiconfirmed')
    let vDeaths = document.getElementById('kpideaths')
    let vRecovered = document.getElementById('kpirecovered')

    if(Object.keys(CovidData).length > 0) {
      vCases.innerHTML = handleDecimals(CovidData.cases)
      vDeaths.innerHTML = handleDecimals(CovidData.deaths)
      vRecovered.innerHTML = handleDecimals(CovidData.recovered)
    } else {
      throw new Error('No covid data')
    }
  } catch (error) {
    console.log(error)
  }
}


async function filter(pOption = 1, pCountry, pInicialDate, pFinalDate) {
  const covidData = await getCovidHistoricalByCountry(pCountry) || {}
  const { country } = covidData

  console.log(covidData)
  const { deaths, cases, recovered } = covidData.timeline
  let resultData = []

  const getInfo = (pFilter) => {
    Object.keys(pFilter).forEach(elem => {
      resultData.push({
        country,
        numbers : pFilter[elem],
        date: handleDateFormat(elem),
      })
    })
  }

  switch(pOption) {
    case 2://cases
      getInfo(cases)
      break;
    case 3://recovered
      getInfo(recovered)
      break;
    default://deaths
      getInfo(deaths)
      break;
  }

  console.log(resultData)
  handleLineGraphyInfo()
}



//PIZZA GRAPHY
function handleLineGraphyInfo(pLabels = [], pData = []) {
  const lineCvx = document.getElementById('linhas');

  let dados = {
    labels: pLabels,
    datasets: [{
      label: 'Número de Mortes',
      data: pData,
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgb(255, 155, 80)',
      fill: false,
      hoverOffset: 4
    }]
  }
  
  let options =  {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Curva diária de Covid-19'
      },
    },
    interaction: {
      intersect: false,
    }
  }
  
  new Chart(lineCvx, {
    type: 'line',
    data: dados,
    options: options
  });
}
//FORMAT NUMBER TO DECIMALS
function handleDecimals(pNumber) {
  let vNumber = pNumber;
  let vOptions = { minimumFractionDigits: 0, maximumFractionDigits: 0};
  let vFormattedNumber = vNumber.toLocaleString(undefined, vOptions);

  return vFormattedNumber.replaceAll(',','.');
}
//FORMAT DATE
function handleDateFormat(pDate) {
  let partes = pDate.split('/');
  let mes = partes[0];
  let dia = partes[1];
  let ano = '20' + partes[2];

  const adicionarZeroEsquerda =  (numero) => {
    return numero < 10 ? '0' + numero : numero;
  }

  let dataObj = new Date(ano, mes - 1, dia);
  let diaFormatado = adicionarZeroEsquerda(dataObj.getDate());
  let mesFormatado = adicionarZeroEsquerda(dataObj.getMonth() + 1);
  let anoFormatado = dataObj.getFullYear();
  
  return diaFormatado + '/' + mesFormatado + '/' + anoFormatado;
}
//FILTER DATE AND RETURN AN ARRAY OF IT
function verificarData(dataReferencia, dataInicio, dataFim) {
  // Converter as datas para objetos do tipo Date
  const dataRef = new Date(dataReferencia);
  const inicio = new Date(dataInicio);
  const fim = new Date(dataFim);

  // Verificar se a data de referência está entre as datas de início e fim
  if (dataRef >= inicio && dataRef <= fim) {
    return true; // A data está entre as datas especificadas
  } else {
    return false; // A data está fora do intervalo especificado
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await handleKPIinfoByCountry()
  handleLineGraphyInfo()
});