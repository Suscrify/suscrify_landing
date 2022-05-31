import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { ourTeam } from '../../utils/data';

const OurTeam = () => {
  return (
    <section id="our-team" className="team-section ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center">
              <h5 className="h6 text-primary">Our Team</h5>
              <h2>The People Behind Quiety</h2>
              <p>
                Intrinsicly strategize cutting-edge before interoperable
                applications incubate extensive expertise through integrated
                intellectual capital.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {ourTeam.map((team, i) => (
            <div key={i + 1} className="col-lg-3 col-md-6">
              <div className="team-single-wrap mb-5">
                <div className="team-img rounded-custom">
                  <Image width={306} height={306} src={team.image} alt="team" />
                  <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                    <li className="list-inline-item">
                      <Link href="#!">
                        <a>
                          <i className="fab">
                            <FaLinkedinIn />
                          </i>
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#!">
                        <a>
                          <i className="fab">
                            <FaTwitter />
                          </i>
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#!">
                        <a>
                          <i className="fab">
                            <FaGithub />
                          </i>
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#!">
                        <a>
                          <i className="fab">
                            <FaFacebookF />
                          </i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="team-info mt-4 text-center">
                  <h5 className="h6 mb-1">{team.name} </h5>
                  <p className="text-muted small mb-0">{team.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
