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
//FORMAT NUMBER TO DECIMALS
function handleDecimals(pNumber) {
  let vNumber = pNumber;
  let vOptions = { minimumFractionDigits: 0, maximumFractionDigits: 0};
  let vFormattedNumber = vNumber.toLocaleString(undefined, vOptions);

  return vFormattedNumber.replaceAll(',','.');
}

document.addEventListener('DOMContentLoaded', async () => {
  await handleKPIinfoByCountry()
});