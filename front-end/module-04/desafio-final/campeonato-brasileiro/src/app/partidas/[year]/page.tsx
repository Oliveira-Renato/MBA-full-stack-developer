// import { IProducts } from "@/app/types/type"
// import { getCampeonatos } from "@/lib/getCampeonatos"
// import getProduct from "@/lib/getProduct"
// import getProducts from "@/lib/getProducts"
// import { IPartidas } from "@/types/types"

// // type Params = {
// //   params: {
// //     productId: string
// //   }
// // }

// export default async function UserPage({ params: { year } }: Params) {
//   //const response: Promise<IPartidas[]> = getPartidas(year)
//   const partidas = await response

//   if (!partidas) return (<>NOT FOUND</>)//notFound()

//   return (
//     <>
//       <h2>{product.title}</h2>
//       <div>
//         <p>
//           {product.description}
//         </p>
//       </div>
//     </>
//   )
// }

// export async function generateStaticParams() {
//   const productSData: Promise<IPartidas[]> = getCampeonatos()
//   const products = await productSData

//   return products.map(products => ({
//     productId: products.id.toString()
//   }))
// }