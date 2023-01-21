import React from 'react'
import axios from 'axios'

const ProductForm = () => {
const [price, setPrice]=React.useState(0)
const [name, seName]=React.useState(0)
const [description, setDescription]=React.useState(0)

    const handleSubmit= (e)=>{
        e.preventDefault()
        axios.post('api/products',{
            name:'Producto',
            description: 'Lorem ipsum',
            price:1000
        })
    }
    return (
        <>
        <div>
            <form onSubmit={ handleSubmit}>
                <label htmlFor='name' >Name</label>
                <input type={'text'} name='name' />

                <label htmlFor='price' >Price:</label>
                <input type={'text'} name='price' id='price' />

                <label htmlFor='description' name='description'>description</label>
                <textarea name='description' rows='2'></textarea>
                <button>Save Product</button>
            </form>
            </div>
        </>
    )
}

export default ProductForm