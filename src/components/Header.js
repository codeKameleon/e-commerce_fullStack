import React from 'react'
import '../styles/header.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header>
            <section className='header-left'>
                <Link to={"/"}>
                    <img src="./icon/logo.png" alt="logo" className='logo' />
                </Link>
            </section>

            <section className='header-center'>
                <Link to={"/"}>
                    <button className='btn-nav'>Home</button>
                </Link>
                <p className='space'>|</p>
                <Link to={"/product"}>
                    <button className='btn-nav'>Shop</button>
                </Link>
                <p className='space'>|</p>
                <Link to={"/"}>
                    <button className='btn-nav'>About</button>
                </Link>
                <p className='space'>|</p>
                <Link to={"/"}>
                    <button className='btn-nav'>Contact</button>
                </Link>
            </section>

            <section className='header-right'>
                <Link to={"/cart"} className='link-cart'>
                    <button className='btn-cart'><i className="fas fa-shopping-bag"></i></button>
                </Link>
                <Link to={"/login"}>
                    <button className='btn-user'>Login</button>
                </Link>
                <Link to={"/register"} className='register'>
                    <button className='btn-user'>Register</button>
                </Link>
            </section>
        </header>
    )
}
