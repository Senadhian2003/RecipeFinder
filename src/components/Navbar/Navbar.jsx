import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand d-flex" style={{marginTop: "8px"}} href="/">
              
              <p
                class="poppins-bold"
                style={{marginLeft : '10px', color:"black", fontSize:'26px'}}
              >
           Recipe Finder!
              </p>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse poppins-semibold"
              id="navbarNav"
              style={{marginLeft: "70px"}}
            >
              {/* <ul class="navbar-nav" style={{fontSize: "14px", textAlign:'start'}}>
                <li class="nav-item">
                  <a class="nav-link active" href="/products">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Cart">Store</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/OrderHistory">Contact</a>
                </li>
                <li class="nav-item" id="authentication" >
                <a style={{cursor : "pointer"}} class="nav-link" >About</a> 
                </li>
              </ul> */}

              {/* <ul class="navbar-nav" style={{fontSize: "14px", textAlign:'start'}}>
                <li class="nav-item">
                  <a class="nav-link active" href="/products"></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Cart">Store</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/OrderHistory">Contact</a>
                </li>
                <li class="nav-item" id="authentication" >
                <a style={{cursor : "pointer"}} class="nav-link" >About</a> 
                </li>
              </ul> */}


            </div>
          </div>
        </nav>

    </div>
  )
}

export default Navbar