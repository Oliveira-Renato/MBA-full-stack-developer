import { IAnos, IPartidas } from "@/app/types/types"

export async function getPartidas(year: string): Promise<IPartidas[]> {
  const response = await fetch(`http://localhost:3001/${year}`)
  const partidas = await response.json()
  return partidas
}
