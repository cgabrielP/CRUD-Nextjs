import Layout from '@/components/Layout'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

const ProductView = ({ product }) => {
    const router=useRouter()

    const handleDelete = async id =>{
        const res= await axios.delete('/api/products/'+id)
        router.push('/')
        console.log(res);
    }
    return (
        <>
            <Layout>
                <h1>{product.name}</h1>
                <button className='bg-red-300 rounded hover:bg-red-600 text-white px-3 py-2' onClick={()=>handleDelete(product.id)}>Delete</button>
            </Layout>
        </>
    )
}
export const getServerSideProps = async (context) => {
    const { data: product } = await axios.get('http://localhost:3000/api/products/' + context.query.id)

    return {
        props: {
            product
        }
    }
}

export default ProductView