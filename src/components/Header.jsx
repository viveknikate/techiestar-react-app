import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import '../styles/header.scss';


const Header = () => {
  return (
      <nav>
        <h1>TechieStar</h1>
        <main>
          <HashLink to={"/#"}>Home</HashLink>
          <Link to={"/contact"}>Contact</Link>
          <HashLink to='/#brand'>Brands</HashLink>
          <HashLink to='/#about'>About</HashLink>
          <Link to={'/service'}>Services</Link>
        </main>
      </nav>
    )
}

export default Header
