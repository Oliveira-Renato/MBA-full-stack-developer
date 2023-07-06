//GET API DATA
async function getCovidData() {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/all');
    return await response.data;
  } catch (error) {
    console.error(error);
  }
}
//GET API DATA BY COUNTRIES
async function getCovidDataByCountries() {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/countries');
    const data =  await response.data;
    // Ordenar o array de objetos com base no número de mortes em ordem decrescente e retorna o mesmo
    return data.sort((a, b) => b.deaths - a.deaths);
  } catch (error) {
    console.error(error);
  }
}
//OUTPUT THE KPI DATA IN THE KPI SECTION INFO
async function handleKPIinfo() {
  try {
    const CovidData = await getCovidData() || {}
    let vCases = document.getElementById('confirmed')
    let vDeaths = document.getElementById('death')
    let vRecovered = document.getElementById('recovered')

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
//PIZZA GRAPHY
async function handlePyzzaGraphyInfo() {
  const covidData = await getCovidData() || {}
  const pizzaCvx = document.getElementById('pizza');

  let dados = {
    labels: ['Confirmados', 'Recuperados', 'Mortes'],
    datasets: [{
      data: [covidData.cases, covidData.recovered, covidData.deaths],
      backgroundColor: [
        'rgb(255, 99, 132)', 
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ], // Cores das fatias
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
        text: 'Distribuições de novos casos'
      }
    }
  }
  
  new Chart(pizzaCvx, {
    type: 'pie',
    data: dados,
    options: options
  });
}
//BAR GRAPHY
async function handleBarGraphyInfo() {
  const covidData = await getCovidDataByCountries() || {}
  const barCvx = document.getElementById('barras');

  let deaths = covidData.slice(0,10).map(({deaths}) => deaths)
  let countries = covidData.slice(0,10).map(({country}) => country)

  const data = {
    labels: countries,
    datasets: [{
      label: 'Total de mortes por país - Top 10',
      data: deaths,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(55, 200, 70, 0.2)',
        'rgba(21, 100, 207, 0.2)',
        'rgba(201, 80, 207, 0.2)',
        'rgba(111, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(134, 203, 207)',
        'rgb(452, 203, 207)',
        'rgb(255, 100, 207)',
        'rgb(111, 120, 207)'
      ],
      borderWidth: 1
    }],
  };
  
  new Chart(barCvx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  });
}
//FORMAT NUMBER TO DECIMALS
function handleDecimals(pNumber) {
  let vNumber = pNumber;
  let vOptions = { minimumFractionDigits: 0, maximumFractionDigits: 0};
  let vFormattedNumber = vNumber.toLocaleString(undefined, vOptions);

  return vFormattedNumber.replaceAll(',','.');
}

document.addEventListener('DOMContentLoaded', async () => {
  await handleKPIinfo()
  await handlePyzzaGraphyInfo()
  await handleBarGraphyInfo()
});