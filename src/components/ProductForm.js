import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const ProductForm = () => {
    const [product, setProduct] = React.useState({
        name: '',
        description: '',
        price: 0,
    })
    const router=useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('api/products', product
        );
        router.push('/')
    }
    const handleChange = ({ target: { name, value } }) =>
        setProduct({ ...product, [name]: value });

    return (
        <>
            <div className='w-full max-w-xs'>
                <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <label htmlFor='name' >Name</label>
                    <input type={'text'} name='name' onChange={handleChange} className='shadow border rounded py-2 px-3 text-gray-700' />

                    <label htmlFor='price' >Price:</label>
                    <input type={'text'} name='price' id='price' onChange={handleChange} className='shadow border rounded py-2 px-3 text-gray-700' />

                    <label htmlFor='description' name='description'>Description</label>
                    <textarea name='description' rows='2' onChange={handleChange} className='shadow border rounded py-2 px-3 text-gray-700' ></textarea>
                    <button className='bg-red-500 hover:bg-red-700 p-2 rounded focus:outline:none focus:shadow-outline font-bold text-white'>Save Product</button>
                </form>
            </div>
        </>
    )
}

export default ProductForm