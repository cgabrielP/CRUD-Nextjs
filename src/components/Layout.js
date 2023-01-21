import React from 'react'

const Layout = ({children}) => {
    return (
        <>
        <h1>layout</h1>
        <div className='container mx-auto h-full' >{children}</div>
        </>
        )
}

export default Layout