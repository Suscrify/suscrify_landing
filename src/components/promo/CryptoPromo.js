import React from 'react';
import { FiCommand, FiDollarSign, FiCpu } from "react-icons/fi";
import {FaArrowRight}from 'react-icons/fa'
import Link from 'next/link';

const CryptoPromo = () => {
  return (
    <section className="crypto-promo bg-dark-black pt-120 pb-60">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="section-title text-center mb-5">
            <h2>Most Trusted Cryptocurrency Platform in World</h2>
            <p className="px-5">
              A cryptocurrency is a tradable digital asset or digital form of
              money, built on blockchain technology that only exists online.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="bg-soft-black crypto-promo-box mb-30 mb-lg-0">
            <div className="crypt-promo-icon">
              <i><FiCommand/></i>
            </div>
            <h4 className="fw-medium">Best Trading Platform</h4>
            <p>
              Cryptocurrency does not exist in physical form like paper money
              and is typically not issued by a central authority.
            </p>
            <Link href="/about-us">
              <a> Explore More <FaArrowRight/></a>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="bg-soft-black crypto-promo-box mb-30 mb-lg-0">
            <div className="crypt-promo-icon">
              <i><FiDollarSign/></i>
            </div>
            <h4 className="fw-medium">Transparent Pricing</h4>
            <p>
              Cryptocurrency does not exist in physical form like paper money
              and is typically not issued by a central authority.
            </p>
            <Link href="/about-us">
              <a> Explore More <FaArrowRight/></a>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="bg-soft-black crypto-promo-box">
            <div className="crypt-promo-icon">
              <i><FiCpu/></i>
            </div>
            <h4 className="fw-medium">Trusted Security</h4>
            <p>
              Cryptocurrency does not exist in physical form like paper money
              and is typically not issued by a central authority.
            </p>
            <Link href="/about-us">
              <a> Explore More <FaArrowRight/></a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CryptoPromo