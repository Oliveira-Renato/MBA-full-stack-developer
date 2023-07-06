async function getCovidData() {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/all');
    return await response.data;
  } catch (error) {
    console.error(error);
  }
}
async function handleKPIinfo() {
  try {
    const CovidData = await getCovidData() || {}
    console.log(CovidData)
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

function handleDecimals(pNumber) {
  let vNumber = pNumber;
  let vOptions = { minimumFractionDigits: 0, maximumFractionDigits: 0};
  let vFormattedNumber = vNumber.toLocaleString(undefined, vOptions);

  return vFormattedNumber.replaceAll(',','.');
}
