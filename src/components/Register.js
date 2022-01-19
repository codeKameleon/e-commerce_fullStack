import React from 'react'
import { Cookies } from 'react-cookie'

export default function Register() {
    console.log(Cookies);
    return (
        <main className='home'>
            <section className='homeImg'>
                <img src="https://fakestoreapi.com/icons/intro.svg" alt="img" className='png' />
            </section>

            <section className='sectionRegister'>
                <h1>Register</h1>
                <input type="text" name="Email" placeholder='Email' />
                <input type="text" name='password' placeholder='Password' />
                <input type="text" name='username' placeholder='User name' />
            </section>
        </main>
    )
}
