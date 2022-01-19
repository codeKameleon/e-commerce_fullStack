import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    const [err, setErr] = useState()
    const [token, setToken] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function loginUser(credentials) {
        return fetch('https://becode-e-commerce.herokuapp.com/api/account/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => {
                            if (data.status === 400) {
                                data.text().then(text => setErr(text))
                                console.log(err);
                            }
                            else if (data.status === 200) {
                                console.log(data);
                                // console.log(token);
                            }
                        }
          )}

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        });
        setToken(token);
      }

    return (
        <main className='home'>
        <section className='homeImg'>
            <img src="https://fakestoreapi.com/icons/intro.svg" alt="img" className='png' />
        </section>
        <section className='homeLogin'>
            <h1 className='homeH'>Login</h1>
            <hr />
            <label htmlFor="email" className='homeLabel' >email : <br /></label>
            <input type="email" name='email' className='homeLoginInput' placeholder='name@mail.com' onChange={e => setEmail(e.target.value)}/>
            <br />
            <label htmlFor="password" className='homeLabel'>password : <br /></label>
            <input type="password" name='password' className='homeLoginInput' placeholder='password' onChange={e => setPassword(e.target.value)}/>
            <br />
            <button className='homeLoginButton' onClick={handleSubmit}>Login</button>
            <p className='homeP'>Don't have an account ? <Link to="/register" className='homeRegister'>Sign up</Link></p>
        </section>
    </main>
    )
}
