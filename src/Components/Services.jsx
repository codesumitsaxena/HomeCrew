import React from 'react';
import AcRepair from '../assets/air-conditioner.png';
import Electrical from '../assets/electrical-service.png';
import Plumber from '../assets/plumber.png';
import Saloon from '../assets/Saloon2.png';
import WaterPurifiers from '../assets/water-filter.png';
import WomenSpa from '../assets/face-massage.png';

function Services() {
  const servicesData = [
    {
      id: 1,
      img: AcRepair,
      heading: 'AC Repair & Services',
    },
    {
      id: 2,
      img: Electrical,
      heading: 'Electrician',
    },
    {
      id: 3,
      img: Plumber,
      heading: 'Plumber',
    },
    {
      id: 4,
      img: Saloon,
      heading: 'Salon at Home',
    },
    {
      id: 5,
      img: WomenSpa,
      heading: 'Women Salon & Spa',
    },
    {
      id: 6,
      img: WaterPurifiers,
      heading: 'Water Purifiers',
    },
  ];

  return (
    <div className="container-fluid py-5 services">
        <div className="container">
        <h3 className="text-start text-dark mb-5 fw-semibold">
        Explore Popular Services</h3>
      <div className="row g-4 justify-content-center">
        {servicesData.map((item) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={item.id}>
<div className="card h-100 text-center border-0 shadow-sm p-3 rounded-4 service-card">
              <img
                src={item.img}
                alt={item.heading}
                className="card-img-top mx-auto"
                style={{ height: '60px', width: '60px', objectFit: 'contain' }}
              />
              <div className="card-body p-0 mt-3">
                <h6 className="card-title" style={{ fontSize: '0.95rem', color: '#333' }}>
                  {item.heading}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
  
    </div>
  );
}

export default Services;
