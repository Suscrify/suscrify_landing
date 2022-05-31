import React from 'react';
import { BiNetworkChart } from 'react-icons/bi';
import { FaBezierCurve, FaChartPie, FaPenNib } from 'react-icons/fa';
import VideoModal from '../common/VideoModal';

const PromoWithVideo = () => {
  return (
    <>
      <section className="video-promo-with-icon">
        <div className="container">
          <div
            className="video-bg-with-icon"
            style={{
              background: "url('/video-bg.jpg')no-repeat center center / cover",
            }}
          >
            <VideoModal onlyButton />
          </div>
        </div>
        <div className="video-promo-icon-wrapper bg-light pt-80 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-xl-3 col-md-6 mt-4 mt-md-4 mt-lg-0">
                <div className="single-icon-box p-0 p-lg-4">
                  <span className="far icon-one">
                    <FaChartPie />
                  </span>
                  <h5 className="h6">Fully Functional</h5>
                  <p>
                    Eaton cheeky blimy bog bugger all mate simplify fully
                    pardon.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-6 mt-4 mt-md-4 mt-lg-0">
                <div className="single-icon-box p-0 p-lg-4">
                  <span className="far icon-two">
                    <FaPenNib />
                  </span>
                  <h5 className="h6">UX Design</h5>
                  <p>Eaton cheeky simplify fully bog bugger all mate pardon.</p>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-6 mt-4 mt-md-4 mt-lg-0">
                <div className="single-icon-box p-0 p-lg-4">
                  <span className="far icon-three">
                    <BiNetworkChart className="fa-lg" />
                  </span>
                  <h5 className="h6">Stay Connected</h5>
                  <p>
                    Eaton cheeky blimy bog bugger simplify fully all mate
                    pardon.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-6 mt-4 mt-md-4 mt-lg-0">
                <div className="single-icon-box p-0 p-lg-4">
                  <span className="far icon-four">
                    <FaBezierCurve className="fa-lg" />
                  </span>
                  <h5 className="h6">Easy to customized</h5>
                  <p>
                    Eaton cheeky blimy bog bugger all mate pardon simplify
                    fully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromoWithVideo;
