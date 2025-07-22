import React, { useRef } from "react";
import Suggestion1 from '../assets/HostIcon1.jpg'
import Suggestion2 from '../assets/HostIcon2.jpg'
import Suggestion3 from '../assets/HostIcon3.jpg'
import Suggestion4 from '../assets/HostIcon4.jpg'
import Suggestion5 from '../assets/HostIcon5.jpg'
import Suggestion6 from '../assets/HostIcon6.jpg'
import Suggestion7 from '../assets/HostIcon7.jpg'
import Suggestion8 from '../assets/HostIcon8.jpg'
import Suggestion10 from '../assets/HostIcon10.jpg'



const suggestions = [
  {
    name: "Sahil Mehra",
    role: "AC Repair",
    rating: "4.82",
    time: "40 mins",
    price: 699,
    desc: "AC checkup, gas refill, & filter cleaning.",
    offer: "🔥 Flat ₹100 OFF",
    image: Suggestion1,
    link: "/services/ac-repair",
  },
  {
    name: "Tanvi Kapoor",
    role: "Pest Control",
    rating: "4.9",
    time: "50 mins",
    price: 899,
    desc: "Anti-termite, mosquito & cockroach treatment.",
    offer: "⏳ Limited Time Deal",
    image: Suggestion2,
    link: "/services/pest-control",
  },
  {
    name: "Deepak Rawat",
    role: "Washing Machine Repair",
    rating: "4.7",
    time: "60 mins",
    price: 799,
    desc: "Motor, pipe & sensor repair.",
    offer: "⚡ Save ₹150 Today",
    image: Suggestion3,
    link: "/services/washing-machine-repair",
  },
  {
    name: "Meena Joshi",
    role: "Home Sanitization",
    rating: "4.85",
    time: "90 mins",
    price: 1199,
    desc: "Hospital-grade disinfectant service.",
    offer: "🛡️ 20% OFF this week",
    image: Suggestion4,
    link: "/services/home-sanitization",
  },
  {
    name: "Abhay Singh",
    role: "Carpenter",
    rating: "4.6",
    time: "45 mins",
    price: 499,
    desc: "Furniture & hinge fixing.",
    offer: "🎁 ₹50 Cashback",
    image: Suggestion5,
    link: "/services/carpenter",
  },
  {
    name: "Riya Patel",
    role: "Salon at Home",
    rating: "4.92",
    time: "75 mins",
    price: 999,
    desc: "Facial, waxing, threading & more.",
    offer: "💄 ₹200 OFF Today",
    image: Suggestion6,
    link: "/services/salon-at-home",
  },
  {
    name: "Ankit Suri",
    role: "Electrician",
    rating: "4.75",
    time: "30 mins",
    price: 349,
    desc: "Switch board, fan, light fixing.",
    offer: "🔧 Save ₹50 Instantly",
    image: Suggestion7,
    link: "/services/electrician",
  },
  {
    name: "Neha Sharma",
    role: "Kitchen Deep Cleaning",
    rating: "4.88",
    time: "90 mins",
    price: 1299,
    desc: "Stove, tiles, slab & appliance cleaning.",
    offer: "🍳 15% OFF",
    image: Suggestion8,
    link: "/services/kitchen-cleaning",
  },
  {
    name: "Aman Verma",
    role: "RO Repair",
    rating: "4.6",
    time: "60 mins",
    price: 599,
    desc: "Water purifier check & filter change.",
    offer: "💧 Flat ₹100 Cashback",
    image: Suggestion1,
    link: "/services/ro-repair",
  },
  {
    name: "Kritika Roy",
    role: "Curtain Cleaning",
    rating: "4.78",
    time: "50 mins",
    price: 699,
    desc: "Steam-based curtain sanitization.",
    offer: "🧼 Limited Time Offer",
    image: Suggestion10,
    link: "/services/curtain-cleaning",
  },
];

function SuggestionsForYou() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const scrollAmount = 320;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container my-5 position-relative">
      <h4 className="fw-bold mb-4">Suggestions for you</h4>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="btn btn-light shadow position-absolute top-50 start-0 translate-middle-y z-3"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      >
        <i className="bi bi-arrow-left"></i>
      </button>

      <button
        onClick={() => scroll("right")}
        className="btn btn-light shadow position-absolute top-50 end-0 translate-middle-y z-3"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      >
        <i className="bi bi-arrow-right"></i>
      </button>

      <div
        className="d-flex gap-3 overflow-auto pb-2 px-2"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
        ref={scrollRef}
      >
        {suggestions.map((sugg, index) => (
          <a
            href={sugg.link}
            key={index}
            className="card shadow-sm border-0 rounded-4 text-decoration-none text-dark"
            style={{
              width: "260px",
              flex: "0 0 auto",
              cursor: "pointer",
              minHeight: "100%",
            }}
          >
            <div className="position-relative">
              <img
                src={sugg.image}
                alt={sugg.name}
                className="card-img-top rounded-top-4"
                style={{ height: "180px", objectFit: "cover" }}
              />
              {/* <span
                className="badge bg-danger position-absolute top-0 start-0 m-2"
                style={{ fontSize: "0.75rem" }}
              >
                {sugg.offer}
              </span> */}
            </div>
            <div className="card-body px-3 py-3 d-flex flex-column justify-content-between">
              <div>
                <h6 className="fw-bold mb-1">{sugg.role}</h6>
                <p className="text-muted small mb-2">{sugg.name}</p>
                <div className="d-flex justify-content-between mb-1">
                  <div className="text-warning small">
                    ★ <span className="fw-bold text-dark">{sugg.rating}</span>
                  </div>
                  <div className="small text-muted">{sugg.time}</div>
                </div>
                <p className="small text-secondary mb-2">{sugg.desc}</p>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="fw-semibold text-success small">
                  ₹{sugg.price}
                </span>
                <span
                  className="btn btn-sm rounded-pill fw-semibold"
                  style={{
                    fontSize: "0.75rem",
                    backgroundColor: "#F3F0FF",
                    color: "#7D4CDB",
                    border: "1px solid #D0C3F6",
                  }}
                >
                  {sugg.offer}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SuggestionsForYou;
