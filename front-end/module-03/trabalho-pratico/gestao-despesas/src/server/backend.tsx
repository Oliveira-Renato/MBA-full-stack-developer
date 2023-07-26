import { IDespesas } from "../types/types";

export async function getDespesasEndpoint() {
  try {
    const getdata = await fetch("http://localhost:3001/despesas");
    return await getdata.json()
  } catch (error) {
    console.log(error);
  }
}

