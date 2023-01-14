import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components'



const Home = () => {
  return (
    <div>
      <Header/>
      <p>Home page</p>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default Home
