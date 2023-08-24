import { IProducts } from "@/app/types/type"

export default async function getProducts(): Promise<IProducts[]> {
  const res = await fetch(`https://fakestoreapi.com/products?limit=10`, { next: { revalidate: 10 } })
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}