import React from 'react'
import img1 from '../../assets/orange fruit.jpeg';
import img2 from '../../assets/search.jpeg'

export default function Navbar() {
  return (
    <nav className="navbar  navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <a className="navbar-brand" href="#"><img src={img1} alt=""/><strong>TROPIKO</strong> </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
          <li className="nav-item">
            <a className="nav-link active me-lg-5" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active me-lg-5" href="#fruits">Fruits</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active me-lg-5" href="services">Services</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active me-lg-5" href="contact us">Contact us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active me-lg-5" href=""><img src={img2} alt=""/></a>
          </li>

          <li className="nav-item">
            <a className="nav-link active me-lg-5" href=""><button className="btn btn-warning button-nav">GET A
                QUOTE</button></a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  )
}
