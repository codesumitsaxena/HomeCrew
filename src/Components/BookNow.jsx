import React from 'react';

const BookNow = () => {
  return (
    <div className="hero-section text-white d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-white">
              Start Your Journey With <span className="text-dark" >Expert Home Services</span> Today.
            </h1>
            <p className="lead mt-3 text-dark">
              Book verified professionals for cleaning, plumbing, electrical work & more — all from the comfort of your home.
            </p>
            <div className="d-flex align-items-center mt-4 gap-3">
              <button className="btn btn-lg bg-dark text-white rounded-pill px-4">
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
