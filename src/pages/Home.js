import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img src="images/banner-1.jpg" alt="main banner" 
              className='image-fluid rounded-5'
            />
            <div className="main-banner-content position-absolute">
              <h4>Best Choice for Pros</h4>
              <h5>iPhone Pro 14 </h5>
              <p>From $41.62/mo. for 24 mo. or $999 before trade‑in</p>
              <Link className='button'>Buy Now</Link>
            </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default Home