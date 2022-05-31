import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const OurTeamTwo = () => {
  return (
    <section className="crypto-team bg-dark-black ptb-60">
    <div className="container">
      <div className="row align-items-center mb-30">
        <div className="col-lg-5 col-md-8">
          <div className="section-title">
            <h2 className="text-white mb-4">Our Motivated Team</h2>
            <p className="">
              If you use this site regularly and would like to help keep the
              site on the Internet, please consider donating a small.
            </p>
          </div>
        </div>
        <div className="col-lg-7 col-md-4">
          <div className="team-btn text-lg-end">
            <Link href="/about-us">
              <a className="rounded-btn text-decoration-none">More Member</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="single-crypto-team bg-soft-black mb-30 mb-lg-0">
            <Image
              src="/team/c-team-1.jpg"
              alt="team member"
              width={266} height={278}
              className="Image-fluid"
              layout="responsive"
            />
            <div className="crypto-team-info pt-4 pb-1">
              <h4 className="text-white h5">Leslie Alexander</h4>
              <p className=" m-0 py-1">Crypto Director</p>
              <ul className="crypto-team-social list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link href="/about-us" className="text-decoration-none">
                    Linkedin
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/about-us" className="text-decoration-none">
                    Dribble
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/about-us" className="text-decoration-none">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="single-crypto-team bg-soft-black mb-30 mb-lg-0">
            <Image
              src="/team/c-team-2.jpg"
              alt="team member"
              width={266} height={278}
              layout="responsive"
              className="Image-fluid"
            />
            <div className="crypto-team-info pt-4 pb-1">
              <h4 className="text-white h5">John M. Smith</h4>
              <p className=" m-0 py-1">Crypto Director</p>
              <ul className="crypto-team-social list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link href="/about-us" className="text-decoration-none">
                    Linkedin
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/about-us" className="text-decoration-none">
                    Dribble
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/about-us" className="text-decoration-none">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="single-crypto-team bg-soft-black mb-30 mb-lg-0">
            <Image
              src="/team/c-team-3.jpg"
              width={266} height={278}
              alt="team member"
              className="Image-fluid"
              layout="responsive"
            />
            <div className="crypto-team-info pt-4 pb-1">
              <h4 className="text-white h5">Kenneth L. Wood</h4>
              <p className=" m-0 py-1">Crypto Director</p>
              <ul className="crypto-team-social list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link href="/about-us" className="text-decoration-none">
                    Linkedin
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/about-us" className="text-decoration-none">
                    Dribble
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/about-us" className="text-decoration-none">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="single-crypto-team bg-soft-black mb-30 mb-lg-0">
            <Image
              src="/team/c-team-4.jpg"
              width={266} height={278}
              alt="team member"
              layout="responsive"
              className="Image-fluid"
            />
            <div className="crypto-team-info pt-4 pb-1">
              <h4 className="text-white h5">William R. Ross</h4>
              <p className="m-0 py-1">Crypto Director</p>
              <ul className="crypto-team-social list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link href="/about-us" className="text-decoration-none">
                    Linkedin
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/about-us" className="text-decoration-none">
                    Dribble
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/about-us" className="text-decoration-none">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurTeamTwo