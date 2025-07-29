import React from 'react';

const BookNow = () => {
  return (
    <div className="Book-section text-white d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <h1 className="fw-bold text-white mb-3 fs-2 fs-md-3 fs-lg-1">
              Start Your Journey With <span className="text-dark">Expert Home Services</span> Today.
            </h1>
            <p className="text-dark lead mb-4">
              Book verified professionals for cleaning, plumbing, electrical work & more — all from the comfort of your home.
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3">
              <button className="btn bg-dark text-white rounded-pill px-4 py-2">
                Book Now
              </button>
              <div>
                <small className="d-block text-dark">Need Help?</small>
                <strong className="text-dark">(+91) 987 654 3210</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;