import ProductForm from "@/components/ProductForm";
import axios from "axios";
import React from "react";


export default function Home({ products }) {
  /* git config --global core.autocrlf true  */
  console.log(products)
  return (
    <>
      <ProductForm />

      {products.map(product => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <span>{product.id}</span>

        </div>)
      )
      }
    </>
  )
}
export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      products
    }
  }
}
