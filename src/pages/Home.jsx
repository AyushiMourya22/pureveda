import React from 'react'
import { Announcement } from '../components/Announcement'
import { Navbar } from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { Caraousel } from '../components/Caraousel'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import { About } from '../components/About'
import { Category } from '../components/Category'

export const Home = () => {
  return (
    <>
      <Navbar/>
      <Caraousel/>
      <Announcement/>
      <Products/>
      <About/>
      <Category/>
      < Newsletter/>
      <Footer/>
    </>
  )
}
