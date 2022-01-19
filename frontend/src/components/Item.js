import React from 'react'
import { Link } from 'react-router-dom';

export default function Item({ item }) {

    return (
        <>
            <article className={"product " + item.category} id={item._id}>
                <Link to={`/product/${item._id}`} style={{ color: 'inherit', textDecoration: 'inherit' }} className='linkProduct'>
                    <p className='productText' id={item._id}>{item.title.substring(0, 40)}...</p>
                    <img src={item.image} alt={item.title} className='productImg' id={item._id} />
                    <p id={item._id} className='productText'>{"$" + item.price}</p>
                </Link>
            </article>
        </>

    )
}
