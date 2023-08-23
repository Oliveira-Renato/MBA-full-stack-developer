import { IAnos } from "@/app/types/types"

export async function getCampeonatos(): Promise<IAnos[]> {
  const response = await fetch('http://localhost:3001/db')
  const anos = await response.json()
  return anos
}