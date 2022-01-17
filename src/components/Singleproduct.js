import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Rating from './Rating';
import '../styles/singleproduct.css'
import '@fortawesome/fontawesome-free/js/all.js'


export default function Singleproduct() {
    const { id } = useParams();
    const [item, setItem] = useState({ rating: {} })

    useEffect(() => {
        fetchItem()
    }, [])

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://becode-e-commerce.herokuapp.com/api/products/${id}`)
        const item = await fetchItem.json();
        setItem(item)
    }

    return (
        <main className='mainSingle'>
            <section className='sectionSingleOne'>
                <img src={item.image} alt={item.title} className='singleProdImg' />
            </section>

            <section className='sectionSingleTwo'>
                <div className='ratingDiv'>
                    {Rating(item.rating.rate)}
                    <p className='rating'>{item.rating.count + " Reviews"}</p>
                </div>
                <h1>{item.title}</h1>
                <p>{item.category}</p>
                <h3>DETAILS</h3>
                <p>{item.description}</p>
                <h2>{"$" + item.price}</h2>
                <div className='order'>
                    <div className='quantityDiv'>
                        <button className='minus'>-</button>
                        <input type="number" className='quantity' />
                        <button className='plus'>+</button>
                    </div>
                    <button className='addToBag'>ADD TO BAG</button>
                </div>
            </section>
        </main>
    )
}
