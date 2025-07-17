import React from 'react';
import HeroImage from '../assets/HeroSection.jpg';
import { FaSearch, FaMapMarkerAlt, FaStar } from "react-icons/fa";

function HeroSection() {
  return (
    <>
      <div className="bg-[#fdf9f5] py-5 relative">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold text-dark">
                Reliable Home Services,<br />Delivered to Your Doorstep.
              </h1>
              <p className="text-muted mt-3" style={{ fontSize: '1.1rem' }}>
                From beauty and wellness to repairs and deep cleaning, book trusted professionals in just a few clicks. Safe, affordable, and on-time services — all from the comfort of your home.
              </p>
            </div>

            <div className="col-lg-6 text-center position-relative">
              <img
                src={HeroImage}
                alt="Home Service Professional"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '420px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        <div className="position-absolute start-50 translate-middle-x" style={{ bottom: '50px', width: '85%' }}>
  <div className="bg-white py-4 px-3 px-md-5 rounded-4 shadow-lg">
    <div className="row g-3 align-items-center">

      <div className="col-md-3">
        <div className="input-group rounded-pill bg-body-tertiary px-3 py-2 align-items-center">
          <FaSearch className="text-purple me-2 fs-5" />
          <input
            type="text"
            placeholder="Search Services"
            className="form-control border-0 bg-transparent p-0 focus:outline-none shadow-none"
            style={{ fontSize: '15px' }}
          />
        </div>
      </div>

      <div className="col-md-2">
        <select className="form-select rounded-pill bg-body-tertiary border-0 shadow-none focus:outline-none">
          <option>Electrician</option>
          <option>AC Repair</option>
          <option>Plumber</option>
          <option>Salon at Home</option>
        </select>
      </div>

      <div className="col-md-3">
        <div className="input-group rounded-pill bg-body-tertiary px-3 py-2 align-items-center">
          <FaMapMarkerAlt className="text-purple me-2 fs-5" />
          <input
            type="text"
            placeholder="Enter Location"
            className="form-control border-0 bg-transparent p-0 focus:outline-none shadow-none"
            style={{ fontSize: '15px' }}
          />
        </div>
      </div>

      <div className="col-md-2">
        <div className="input-group rounded-pill bg-body-tertiary px-3 py-2 align-items-center">
          <FaStar className="text-purple me-2 fs-5" />
          <select className="form-select border-0 bg-transparent p-0 shadow-none focus:outline-none" style={{ fontSize: '15px' }}>
            <option>★★★★★</option>
            <option>★★★★</option>
            <option>★★★</option>
            <option>★★</option>
          </select>
        </div>
      </div>

      <div className="col-md-2">
        <button className="btn w-100 py-2 rounded-pill text-white" style={{ backgroundColor: '#A78BFA'}}>
          Search Now
        </button>
      </div>

    </div>
  </div>
</div>

      </div>

      <div className="mb-5" style={{ marginTop: '90px' }}></div>
    </>
  );
}

export default HeroSection;
