import React from 'react';
import BigimgOurProcess from '../assets/SalonImg.jpeg';

function Ourproces() {
  return (
    <div className="container-fluid bg-white py-5">
      <div className="container">

        <div className="row mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold text-dark m-0">Our Process <span style={{color:"#8a6ff2"}}>is</span>,<br/><span style={{color:"#8a6ff2"}}>Simple and </span>Effective</h3>
            <button
              className="btn rounded-pill px-4 py-2 text-white"
              style={{ backgroundColor: '#A78BFA', border: 'none' }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="row">
          <div
            className="position-relative"
            style={{ height: '500px', borderRadius: '20px', overflow: 'hidden' }}
          >
            <img
              src={BigimgOurProcess}
              alt="BigimgOurProcess"
              className="img-fluid w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
            <div
  className="bg-white shadow rounded-4"
  style={{
    position: 'absolute',
    top: '20px',
    right: '30px',
    width: '370px',
    padding: '24px',
    zIndex: 2
  }}
>
  <h5 className="fw-semibold text-dark text-center mb-4">How It Works</h5>
  <div className="mb-4">
    <span
      className="badge rounded-pill d-inline-block mb-2"
      style={{ backgroundColor: '#A78BFA', color: '#fff', fontSize: '14px' }}
    >
      Step 1
    </span>
    <h6 className="fw-bold mb-1">Choose Your Service</h6>
    <p className="text-muted mb-0">
      Select from a wide range of services like Salon at Home, Cleaning, Repairs & more.
    </p>
  </div>

  <div className="mb-4">
    <span
      className="badge rounded-pill d-inline-block mb-2"
      style={{ backgroundColor: '#A78BFA', color: '#fff', fontSize: '14px' }}
    >
      Step 2
    </span>
    <h6 className="fw-bold mb-1">Pick a Time Slot</h6>
    <p className="text-muted mb-0">
      Choose your convenient date & time for the service to be scheduled.
    </p>
  </div>

  <div>
    <span
      className="badge rounded-pill d-inline-block mb-2"
      style={{ backgroundColor: '#A78BFA', color: '#fff', fontSize: '14px' }}
    >
      Step 3
    </span>
    <h6 className="fw-bold mb-1">Relax and Enjoy</h6>
    <p className="text-muted mb-0">
      Our professional arrives on time and delivers a top-notch experience.
    </p>
  </div>
</div>


          </div>
        </div>

      </div>
    </div>
  );
}

export default Ourproces;
