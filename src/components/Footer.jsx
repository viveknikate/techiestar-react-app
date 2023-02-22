import React from 'react'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechieStar</h1>
        <p>
          Copyright&copy;2023
          <br />
          All rights reserved 
          <br />
          VivekNikate
        </p>
      </div>

      <div>
          <h5>Follow Us on</h5>
        <div>
          <a href="/" target={"blank"}>LinkedIn</a>
          <a href="/" target={'_blank'}>Instagram</a>
          <a href="/">GitHub</a>
        </div>  
      </div>
    </footer>
  )
}

export default Footer
