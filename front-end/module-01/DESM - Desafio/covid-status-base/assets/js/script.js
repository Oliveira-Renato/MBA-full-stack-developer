//GET API DATA
async function getCovidData() {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/all');
    return await response.data;
  } catch (error) {
    console.error(error);
  }
}
//BASIC COVID INFO
async function handleBasicCovidInfo() {
  try {
    const CovidData = await getCovidData() || {}

    return { 
      cases :handleDecimals(CovidData.cases),
      deaths : handleDecimals(CovidData.deaths),
      recovered : handleDecimals(CovidData.recovered)
    }
  } catch (error) {
    console.log(error)
  }
}
//OUTPUT THE KPI DATA IN THE KPI SECTION INFO
async function handleKPIinfo() {
  try {
    const CovidData = await handleBasicCovidInfo() || {}
    let vCases = document.getElementById('confirmed')
    let vDeaths = document.getElementById('death')
    let vRecovered = document.getElementById('recovered')

    if(Object.keys(CovidData).length > 0) {
      vCases.innerHTML = CovidData.cases
      vDeaths.innerHTML = CovidData.deaths
      vRecovered.innerHTML = CovidData.recovered
    } else {
      throw new Error('No covid data')
    }
  } catch (error) {
    console.log(error)
  }
}
//FORMAT NUMBER TO DECIMALS
function handleDecimals(pNumber) {
  let vNumber = pNumber;
  let vOptions = { minimumFractionDigits: 0, maximumFractionDigits: 0};
  let vFormattedNumber = vNumber.toLocaleString(undefined, vOptions);

  return vFormattedNumber.replaceAll(',','.');
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

document.addEventListener('DOMContentLoaded', async () => {
  await handleKPIinfo()
  await handlePyzzaGraphyInfo()
});