import React, { useRef } from "react";

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
];

function SuggestionsForYou() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Suggestions for you</h4>
        <button
          className="btn btn-light rounded-circle shadow-sm"
          onClick={scrollRight}
        >
          <i className="bi bi-arrow-right fs-5"></i>
        </button>
      </div>

      <div
        className="d-flex gap-3 overflow-auto pb-2 slider-container"
        ref={scrollRef}
      >
        {suggestions.map((sugg, index) => (
          <div
            key={index}
            className="card shadow-sm border-0 rounded-4"
            style={{ width: "260px", flex: "0 0 auto" }}
          >
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
                <span className="fw-semibold text-success small">₹{sugg.price}</span>
                <button
                  className="btn btn-sm btn-primary rounded-pill fw-semibold"
                  style={{ backgroundColor: "#7D4CDB", border: "none" }}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestionsForYou;
