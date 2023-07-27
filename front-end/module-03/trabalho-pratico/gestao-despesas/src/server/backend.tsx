export async function getDespesasEndpoint() {
  try {
    const getdata = await fetch("http://localhost:3001/despesas");
    return await getdata.json() || []
  } catch (error) {
    console.log(error);
  }
}

export async function getDespesas(from: string, to: string) {
  const getData = await fetch(`http://localhost:3001/despesas?mes=${from}-${to}&_sort=dia`)
  return await getData.json() || []
}