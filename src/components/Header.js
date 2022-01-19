import React, { useEffect } from 'react'
import '../styles/header.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

export default function Header() {
    const [cookies, setCookie] = useCookies(['jwt']);

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
                {
                    !cookies.jwt ?
                        // if there isn't cookie
                        <>
                            <Link to={"/login"}>
                                <button className='btn-user'>Login</button>
                            </Link>
                            <Link to={"/register"} className='register'>
                                <button className='btn-user'>Register</button>
                            </Link>
                        </>
                        // if there is cookie
                        :
                        <Link to={"/user"}>
                            <button className='userProfil'><i className="fas fa-user"></i></button>
                        </Link>
                }

            </section>
        </header>
    )
}
