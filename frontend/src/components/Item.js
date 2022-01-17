import React from 'react'
import Rating from './Rating';
import { useNavigate } from 'react-router'

export default function Item({ item }) {

    let navigate = useNavigate();

    function goTo(e) {
        navigate(e.target.id)
    }
    
    return (

        <article className={"product " + item.category} id={item._id} onClick={goTo}>
            <p className='productText' id={item._id}>{item.title.substring(0, 40)}...</p>
            <img src={item.image} alt={item.title} className='productImg' id={item._id} />
            <p id={item._id} className='productText'>{"$" + item.price}</p>
        </article>

    )
}
