import React from 'react'
import { useNavigate } from 'react-router'
import '../styles/header.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default function Header() {
    let navigate = useNavigate();

    function goToProduct() {
        navigate("/product")
    }
    function goToHome() {
        navigate("/")
    }

    return (
        <header>
            <section className='header-left'>
                <button className='btn-shop' onClick={goToProduct}>Shop <i className="fas fa-angle-down"></i></button>
                <button className='btn-about'>About <i className="fas fa-angle-down"></i></button>
                <button className='btn-discover'>Discover <i className="fas fa-angle-down"></i></button>
            </section>

            <section className='header-center'>
                <img src="logo.png" alt="logo" className='logo' onClick={goToHome} />
            </section>

            <section className='header-right'>
                <button className='btn-currency'>$ USD <i className="fas fa-angle-down"></i></button>
                <button className='btn-user'><i className="far fa-user"></i></button>
                <button className='btn-cart'><i className="fas fa-shopping-basket"></i></button>
            </section>
        </header>
    )
}
