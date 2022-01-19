import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/register.css'

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();

    const navigate = useNavigate()

    async function registerUser(credentials) {
        return fetch(`${process.env.REACT_APP_API}account/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(credentials)
        })
            .then(data => {
                if (data.status === 400) {
                    navigate("/", { replace: true })
                }
                else if (data.status === 200) {
                    navigate("/", { replace: true })
                }
            }
            )
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await registerUser({
            email,
            password,
            username,
            "name": {
                firstname,
                lastname
            },
        });
    }

    return (
        <main className='register'>
            <section className='homeImg'>
                <img src="https://fakestoreapi.com/icons/intro.svg" alt="img" className='png' />
            </section>

            <form className='formRegister'>
                <h1 className='registerH'>Register</h1>
                <hr />
                <input className='registerInput' type="text" name="firstname" placeholder='firstname' onChange={e => setFirstname(e.target.value)} />
                <br />
                <input className='registerInput' type="text" name="lastname" placeholder='lastname' onChange={e => setLastname(e.target.value)} />
                <br />
                <input className='registerInput' type="email" name="Email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                <br />
                <input className='registerInput' type="password" name='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <br />
                <input className='registerInput' type="text" name='username' placeholder='User name' onChange={e => setUsername(e.target.value)} />
                <br />
                <button className='btn-register' onClick={handleSubmit}>Register</button>
            </form>
        </main>
    )
}
