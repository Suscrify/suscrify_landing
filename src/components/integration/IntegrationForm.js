import React from 'react';
import Link from 'next/link';

const IntegrationForm = () => {
  return (
    <div className="job-overview-wrap bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
      <h5>Apply for Integration</h5>
      <form action="#" className="mt-4">
        <div className="row">
          <div className="col-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                aria-label="Your name"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Company"
                aria-label="company"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group mb-3">
              <textarea
                className="form-control"
                placeholder="Tell about your company"
                style={{ height: '120px' }}
              ></textarea>
            </div>
          </div>
        </div>
        <Link href="#!">
          <a className="btn btn-primary mt-4">Apply Now</a>
        </Link>
      </form>
    </div>
  );
};

export default IntegrationForm;
