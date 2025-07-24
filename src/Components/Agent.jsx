import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const suggestions = [
  {
    name: "Sahil Mehra",
    role: "AC Repair",
    rating: "4.82",
    time: "40 mins",
    price: 699,
    desc: "Quick AC checkup, gas refill, & filter cleaning at your doorstep.",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Tanvi Kapoor",
    role: "Pest Control",
    rating: "4.9",
    time: "50 mins",
    price: 899,
    desc: "Anti-cockroach, termite, and mosquito treatment expert.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Deepak Rawat",
    role: "Washing Machine Repair",
    rating: "4.7",
    time: "60 mins",
    price: 799,
    desc: "Motor, pipe & sensor repair for semi/fully automatic machines.",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Meena Joshi",
    role: "Home Sanitization",
    rating: "4.85",
    time: "90 mins",
    price: 1199,
    desc: "Full home sanitization with hospital-grade disinfectants.",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    name: "Abhay Singh",
    role: "Carpenter",
    rating: "4.6",
    time: "45 mins",
    price: 499,
    desc: "Furniture repair, door hinge fixing, and woodwork service.",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    name: "Pooja Sharma",
    role: "Electrician",
    rating: "4.92",
    time: "30 mins",
    price: 349,
    desc: "Switch board, wiring, and light fitting specialist.",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    name: "Rohit Yadav",
    role: "Plumber",
    rating: "4.75",
    time: "35 mins",
    price: 399,
    desc: "Leak repair, tap fitting, and pipe fixing expert.",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    name: "Anjali Verma",
    role: "Beautician",
    rating: "4.91",
    time: "60 mins",
    price: 999,
    desc: "Bridal makeup, facials & grooming at your doorstep.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    name: "Suresh Raina",
    role: "Refrigerator Repair",
    rating: "4.68",
    time: "50 mins",
    price: 749,
    desc: "Cooling issue, gas refill, and compressor repair.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    name: "Nidhi Mehta",
    role: "Salon for Women",
    rating: "4.95",
    time: "70 mins",
    price: 1299,
    desc: "Haircut, waxing, and manicure/pedicure services.",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "Amit Chauhan",
    role: "Painter",
    rating: "4.66",
    time: "100 mins",
    price: 1499,
    desc: "Wall painting, texture, and waterproofing expert.",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Simran Kaur",
    role: "Yoga Trainer",
    rating: "4.88",
    time: "45 mins",
    price: 499,
    desc: "Home yoga sessions for flexibility, strength & peace.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

function SuggestionsForYou() {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {suggestions.map((sugg, index) => (
          <div className="col-12 col-sm-6 col-lg-4" key={index}>
            <div className="card shadow-sm border-0 rounded-4 h-100">
              <div className="position-relative">
                <img
                  src={sugg.image}
                  alt={sugg.name}
                  className="card-img-top rounded-top-4"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <button
                  className="btn position-absolute top-0 end-0 m-2 rounded-circle shadow"
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
                <h6 className="fw-bold mb-1">{sugg.name}</h6>
                <p className="text-muted small mb-2">{sugg.role}</p>

                <div className="d-flex justify-content-between mb-1">
                  <div className="text-warning small">
                    ★ <span className="fw-bold text-dark">{sugg.rating}</span>
                  </div>
                  <div className="small text-muted">{sugg.time}</div>
                </div>

                <p className="small text-secondary mb-2">{sugg.desc}</p>

                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-semibold text-success small">
                    ₹{sugg.price}
                  </span>
                  <button
                    className="btn btn-sm btn-primary rounded-pill fw-semibold"
                    style={{ backgroundColor: "#7D4CDB", border: "none" }}
                  >
                    Book
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

export default SuggestionsForYou;
