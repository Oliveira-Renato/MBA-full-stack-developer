import { IProducts } from "@/app/types/type"

export default async function getProduct(productId: string): Promise<IProducts> {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`, { next: { revalidate: 10 } })

  console.log('aqui')
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}