import React, { useState, useRef } from 'react'
import '../styles/home.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Product from './Product';

export default function Home() {
    const inputRef = useRef();
    const [log, setLogin] = useState({ rating: {} })

    function emailInput() {
        const inputElement = inputRef.current;
    }

    function passwordInput() {
        const inputElement = inputRef.current;
    }

    const login = {
        email: emailInput,
        password: passwordInput
    }

    function sendLogin() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login })
        };
        fetch('https://becode-e-commerce.herokuapp.com/api/login', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ login }));
    }

    return (
        <>
            <main className='home'>
                <section className='homeImg'>
                    <img src="https://fakestoreapi.com/icons/intro.svg" alt="img" className='png' />
                </section>
                <section className='homeLogin'>
                    <h1>Login</h1>
                    <hr />

                    <label htmlFor="email" className='homeLabel' >email : <br /></label>
                    <input type="email" name='email' className='homeLoginInput' placeholder='name@mail.com' ref={emailInput} />
                    <br />
                    <label htmlFor="password" className='homeLabel'>password : <br /></label>
                    <input type="password" name='password' className='homeLoginInput' placeholder='password' ref={passwordInput} />
                    <br />
                    <button className='homeLoginButton' onClick={() => sendLogin()}>Login</button>
                    <p className='homeP'>Don't have an account ? <a href="/register" className='homeRegister'>Sign up</a></p>
                </section>
                <Product />
            </main>
        </>
    )
}
