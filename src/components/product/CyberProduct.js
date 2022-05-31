import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiHeart,FiShoppingCart} from 'react-icons/fi'

const CyberProduct = () => {
  return (
    <section className="cyber-store-product">
      <div
        className="store-bg-header"
        style={{
          background: "url('/shop_bg.png')no-repeat center center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="section-heading text-center mb-5">
                <h5 className="h6 text-white">Online Store</h5>
                <h2 className="text-white">
                  Our popular Cyber security products
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row product-row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="single-product position-relative mb-30">
              <div className="product-img">
                <Image
                  src="/pro-1.jpg"
                  alt="product "
                  className="img-fluid"
                  width={306}
                  height={306}
                  layout='responsive'
                />
              </div>
              <div className="product-cart-wishlist-icon">
                <div className="cart">
                  <i><FiShoppingCart/> </i>
                </div>
                <div className="heart">
                  <i><FiHeart/></i>
                </div>
              </div>
              <div className="bg-white text-center shadow-sm py-4 product-info">
                <h6>
                  <Link href='/about-us' >
                      <a className="text-decoration-none">   Combination Padlock</a>
                  </Link>
                </h6>
                <span className="fw-bold">120.00$ </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="single-product position-relative mb-30">
              <div className="product-img">
                <Image
                  src="/pro-2.jpg"
                  alt="product "
                  className="img-fluid"
                  width={306}
                  height={306}
                  layout='responsive'
                />
              </div>
              <span className="bg-primary text-white px-2 rounded sale-badge">
                Sale!
              </span>
              <div className="product-cart-wishlist-icon">
                <div className="cart">
                  <i><FiShoppingCart/> </i>
                </div>
                <div className="heart">
                <i><FiHeart/></i>
                </div>
              </div>
              <div className="bg-white text-center shadow-sm py-4 product-info">
                <h6>
                  <Link href='/about-us'>
                    <a className="text-decoration-none">
                    Biometrics-Fingerprint
                    </a>
                  </Link>
                </h6>
                <span className="fw-bold">56.00$ </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="single-product position-relative mb-30">
              <div className="product-img">
                <Image
                  src="/pro-3.jpg"
                  alt="product"
                  className="img-fluid"
                  width={306}
                  height={306}
                  layout='responsive'
                />
              </div>

              <div className="product-cart-wishlist-icon">
                <div className="cart">
                  <i><FiShoppingCart/> </i>
                </div>
                <div className="heart">
                <i><FiHeart/></i>
                </div>
              </div>
              <div className="bg-white text-center shadow-sm py-4 product-info">
                <h6>
                  <Link href='/about-us' >
                    <a className="text-decoration-none"> WeJupit Fingerprint Key</a>
                  </Link>
                </h6>
                <span className="fw-bold">175.00$ </span>
                <span className="text-decoration-line-through"> 150.00$</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="single-product position-relative mb-30">
              <div className="product-img">
                <Image
                  src="/pro-4.jpg"
                  alt="product "
                  className="img-fluid"
                  width={306}
                  height={306}
                  layout='responsive'
                />
              </div>
              <div className="product-cart-wishlist-icon">
                <div className="cart">
                  <i><FiShoppingCart/> </i>
                </div>
                <div className="heart">
                <i><FiHeart/></i>
                </div>
              </div>
              <div className="bg-white text-center shadow-sm py-4 product-info">
                <h6>
                  <Link href='/about-us' >
                   <a className="text-decoration-none"> Smart Fingerprint Lock</a>
                  </Link>
                </h6>
                <span className="fw-bold">175.00$ </span>
                <span className="text-decoration-line-through"> 150.00$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CyberProduct