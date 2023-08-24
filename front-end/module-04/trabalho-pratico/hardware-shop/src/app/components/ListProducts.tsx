'use client'

import { useEffect, useState } from "react";
import { IProducts } from "../types/type";
import getProducts from "@/lib/getProducts";
import Link from "next/link";

type IProduct = {
  products?: IProducts[]
}

export function ListProducts({ products }: IProduct) {
  if (!products) {
    return <p>Loading...</p>; // Add a loading indicator or handle the loading state
  }

  return (
    <ul>
      {
        products.map(product => (
          <li key={product.id.toString()} style={{ marginTop: '16px' }}>
            <Link href={`/products/${product.id}`}> {product.title}</Link>
            <div>
              <ul>
                <li>Category: {product.category}</li>
                <li>Rate: {product.rating.rate}</li>
                <li>Count: {product.rating.count}</li>
              </ul>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export async function getStaticProps() {
  try {
    const products = await getProducts();
    return { props: { products } };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { props: { products: [] } };
  }
}

