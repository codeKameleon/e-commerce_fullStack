import React from 'react'
import '../styles/home.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Product from './Product';


export default function Home() {

  return (
    <>
      <main className='home'>
        <section className='homeImg'>
          <img src="https://fakestoreapi.com/icons/intro.svg" alt="img" className='png' />
        </section>

        <Product />
      </main>
    </>
  )
}
