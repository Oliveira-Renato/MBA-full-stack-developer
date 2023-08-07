import { IUser } from "../types/types";

export async function getDespesasEndpoint() {
  try {
    const getdata = await fetch("http://localhost:3001/despesas", {
      credentials: "include",
    });
    return await getdata.json() || []
  } catch (error) {
    console.error(error);
  }
}

export async function getDespesas(from: string, to: string) {
  const getData = await fetch(`http://localhost:3001/despesas?mes=${from}-${to}&_sort=dia`, {
    credentials: "include",
  })
  return await getData.json() || []
}

export function signInEndpoint(email: string, senha: string): Promise<IUser> {
  return fetch(`http://localhost:3001/sessao/criar`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  }).then(handleResponse);
}

export function signOutEndpoint(): Promise<IUser> {
  return fetch(`http://localhost:3001/sessao/finalizar`, {
    credentials: "include",
    method: "POST",
  }).then(handleResponse);
}

export function getUserEndpoint(): Promise<IUser> {
  return fetch(`http://localhost:3001/sessao/usuario`, {
    credentials: "include",
  }).then(handleResponse);
}


function handleResponse(resp: Response) {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error(resp.statusText);
  }
}