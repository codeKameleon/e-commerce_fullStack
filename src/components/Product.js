import React, { useState, useEffect } from 'react'
import '../styles/product.css'
import Item from './Item';

export default function Product() {
    const [product, setProduct] = useState([])
    const [filterProduct, setFilterProduct] = useState(product)


    useEffect(() => {
        fetch('https://becode-e-commerce.herokuapp.com/api/products')
            .then(res => res.json())
            .then(data => (setProduct(data), setFilterProduct(data)))
    }, [])

    function filter(cat) {
        const updatedList = product.filter((item) => item.category === cat);
        setFilterProduct(updatedList)
    }

    return (
        <>
            <main className='productPage'>
                <div className='divShop'>
                    <h1 className='titleShop'>Shop</h1>
                </div>

                <nav className='productNav'>
                    <button className='productButton' onClick={() => setFilterProduct(product)}>All</button>
                    <button className='productButton' onClick={() => filter("men's clothing")}>Men's clothing</button>
                    <button className='productButton' onClick={() => filter("women's clothing")}>Women's clothing</button>
                    <button className='productButton' onClick={() => filter("electronics")}>Electronics</button>
                    <button className='productButton' onClick={() => filter("jewelery")}>Jewelery</button>
                </nav>

                <section className='allProduct'>
                    {product.length > 0 ? filterProduct.map((item, index) => {
                        return (<Item item={item} key={index} />);
                    })
                        : null}
                </section>
            </main>
        </>
    )
}
