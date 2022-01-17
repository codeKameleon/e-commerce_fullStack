import React from 'react'
import Rating from './Rating';
import { useNavigate } from 'react-router'

export default function Item({ item }) {

    let navigate = useNavigate();

    function goTo(e) {
        navigate(e.target.id)
    }

    return (

        <article className={"product " + item.category} id={item.id} onClick={goTo}>
            <p className='productText'>{item.title.substring(0, 40)}...</p>
            <img src={item.image} alt={item.title} className='productImg' id={item.id} />
            <p className='productText'>{"$" + item.price}</p>
        </article>

    )
}
