import React from 'react'
import './Header.scss'
import { useHistory } from 'react-router-dom';

const Header = () => {
  const History = useHistory();
  return (
    <div className='header'>
      <p className='logo-app'>MERN-Blog</p>
      <p className='menu-item' onClick={() => History.push('/login')}>Log out</p>
    </div>
  )
}

export default Header
