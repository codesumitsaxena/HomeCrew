import React from 'react';

const agents = [
  {
    name: "Rahul Sharma",
    role: "Chimney Cleaning Expert",
    rating: "4.86",
    time: "45 mins",
    price: 799,
    desc: "Expert in deep chimney cleaning for homes and restaurants. Uses tools.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Priya Singh",
    role: "Electrician",
    rating: "4.9",
    time: "30 mins",
    price: 499,
    desc: "Specialist in residential electrical repair and wiring safety.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Ankit Verma",
    role: "AC Repair Technician",
    rating: "4.7",
    time: "60 mins",
    price: 999,
    desc: "Quick AC service, refilling, and maintenance at doorstep.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Neha Rana",
    role: "Salon at Home",
    rating: "4.8",
    time: "90 mins",
    price: 1199,
    desc: "Bridal & party makeup, facial, waxing. Home salon expert.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    name: "Ravi Tripathi",
    role: "Plumber",
    rating: "4.5",
    time: "35 mins",
    price: 399,
    desc: "Leakage repair, tap fitting, and bathroom installation expert.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Ayesha Khan",
    role: "Home Cleaning",
    rating: "4.95",
    time: "2 hrs",
    price: 1499,
    desc: "Deep kitchen, bathroom, and full-home cleaning expert.",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
  },
];

function Agent() {
  return (
    <div className="container">
      <div className="row gy-4 my-4">
        {agents.map((agent, index) => (
          <div className="col-md-6 col-xl-4" key={index}>
            <div className="card shadow rounded-4 border-0 h-100">
              <div className="position-relative">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="card-img-top rounded-top-4"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <button
                  className="btn position-absolute top-0 end-0 m-3 rounded-circle shadow"
                  style={{
                    backgroundColor: "#7D4CDB",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>

              <div className="card-body px-3 py-3">
                <h5 className="fw-bold mb-1">{agent.name}</h5>
                <p className="text-muted mb-2">{agent.role}</p>

                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div>
                    <span className="text-warning">★</span>
                    <span className="fw-bold ms-1 me-2">{agent.rating}</span>
                    <span className="text-muted small">{agent.time}</span>
                  </div>
                  <span className="fw-semibold text-success">₹{agent.price}</span>
                </div>

                <p className="text-secondary small mb-3">{agent.desc}</p>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-dark px-3 rounded-pill fw-semibold"
                  >
                    View Profile
                  </button>
                  <button
                    className="btn btn-primary px-4 rounded-pill fw-semibold"
                    style={{ backgroundColor: "#7D4CDB", border: "none" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agent;
