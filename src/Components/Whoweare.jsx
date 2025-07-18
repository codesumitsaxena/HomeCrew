import React from 'react';
import { FaUserShield, FaClock, FaTools, FaThumbsUp } from "react-icons/fa";
import ServiceImg from '../assets/whoweareImg.jpg'; // 🖼️ Replace with your image path

function Whoweare() {
  return (
    <div
      className="container-fluid py-5 d-flex align-items-center"
      style={{ backgroundColor: '#f9f7f3', minHeight: '100vh' }}
    >
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Side - Image */}
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src={ServiceImg}
              alt="Home Service"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6">
            <h5 className="text-uppercase text-secondary fw-bold mb-2">Who We Are</h5>
            <h2 className="fw-bold text-dark mb-3" style={{ fontSize: '2rem' }}>
              Reliable & Verified Home Experts
            </h2>
            <p className="text-muted" style={{ fontSize: '1.05rem' }}>
              From plumbing and repairs to beauty and wellness, we bring trusted professionals to your home. On time, every time.
            </p>

            {/* Feature Cards */}
            <div className="row g-4 my-4">

              <div className="col-sm-6">
                <div className="p-3 bg-white rounded-4 shadow-sm d-flex align-items-start h-100">
                  <FaUserShield className="text-primary me-3 fs-2" />
                  <div>
                    <h6 className="fw-semibold mb-1">Verified Experts</h6>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                      All professionals are background-checked.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="p-3 bg-white rounded-4 shadow-sm d-flex align-items-start h-100">
                  <FaClock className="text-warning me-3 fs-2" />
                  <div>
                    <h6 className="fw-semibold mb-1">On-Time Service</h6>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                      Timely arrival at your convenience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="p-3 bg-white rounded-4 shadow-sm d-flex align-items-start h-100">
                  <FaTools className="text-success me-3 fs-2" />
                  <div>
                    <h6 className="fw-semibold mb-1">All Home Services</h6>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                      From AC repair to beauty services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="p-3 bg-white rounded-4 shadow-sm d-flex align-items-start h-100">
                  <FaThumbsUp className="text-danger me-3 fs-2" />
                  <div>
                    <h6 className="fw-semibold mb-1">4.8+ Rating</h6>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                      Loved by 10k+ happy customers.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <button
              className="btn rounded-pill px-4 py-2 text-white"
              style={{ backgroundColor: '#9A9AB8', border: 'none' }}
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whoweare;
