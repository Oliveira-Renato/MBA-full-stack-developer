import { IProducts } from "@/app/types/type"
import getProduct from "@/lib/getProduct"
import getProducts from "@/lib/getProducts"

type Params = {
  params: {
    productId: string
  }
}

export default async function UserPage({ params: { productId } }: Params) {
  const productData: Promise<IProducts> = getProduct(productId)
  const product = await productData

  if (!product.id) return (<>NOT FOUND</>)//notFound()

  return (
    <>
      <h2>{product.title}</h2>
      <div>
        <p>
          {product.description}
        </p>
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const productSData: Promise<IProducts[]> = getProducts()
  const products = await productSData

  return products.map(products => ({
    productId: products.id.toString()
  }))
}