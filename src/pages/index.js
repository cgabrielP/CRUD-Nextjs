import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import React from "react";


export default function Home({ products }) {
  /* git config --global core.autocrlf true  */
  return (
    <>
    <Layout>

      {products.map(product => (
        <Link key={product.id} href={`/products/${product.id}`}>
        <div className='border border-gray-200 shadow-md p-6'onClick={()=>{}} >
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
        </Link>
        )
      )}
      </Layout>
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
