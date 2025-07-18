import React from "react";
import { FaRegHeart, FaArrowRight } from "react-icons/fa";
import AcRepair from "../assets/AcrepairImg.jpg";
import Electrical from "../assets/electricalImg.jpg";
import Saloon from "../assets/SalonImg.jpeg";
import Cleaning from "../assets/CleaningImg.jpg";

const mostBookedData = [
  {
    id: 1,
    name: "AC Repair",
    location: "Cooling solutions",
    price: "₹499",
    image: AcRepair,
    category: "Verified Express",
  },
  {
    id: 2,
    name: "Home Cleaning",
    location: "Deep home clean",
    price: "₹849",
    image: Cleaning,
    category: "Verified Express",
  },
  {
    id: 3,
    name: "Salon at Home",
    location: "Beauty services",
    price: "₹699",
    image: Saloon,
    category: "Verified Express",
  },
  {
    id: 4,
    name: "Electrician",
    location: "Electrical fixes",
    price: "₹399",
    image: Electrical,
    category: "Verified Express",
  },
];

function MostBooked() {
  return (
    <>
      <div
        className="container-fluid py-5 d-flex align-items-center"
        style={{
          backgroundColor: "#fafafa",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <h3 className="fw-semibold text-center fs-4">Most Booked Services</h3>
          <p className="text-center text-muted mb-4 fs-6">
            Trusted by thousands across India. Get quick and reliable service at
            your doorstep.
          </p>

          <div className="row g-4 justify-content-center">
            {mostBookedData.map((item) => (
              <div key={item.id} className="col-md-3 col-sm-6">
                <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top rounded-3"
                    style={{ height: "160px", objectFit: "cover" }}
                  />
                  <div className="card-body px-0">
                    <h5 className="card-title fw-semibold fs-6 mb-1">
                      {item.name}
                    </h5>
                    <p className="text-muted fs-6 mb-2">{item.location}</p>
                    <div className="fw-bold fs-5 mb-2 text-dark">
                      {item.price}
                    </div>
                    <span className="badge bg-light text-danger d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill fw-medium fs-6">
                      {item.category} <FaArrowRight size={12} />
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3 px-0">
                    <button className="btn btn-dark fw-semibold rounded-pill px-3 py-2 flex-grow-1">
                      Book Now +
                    </button>
                    <button
                      className="btn border-0 d-flex align-items-center justify-content-center rounded-circle ms-2"
                      style={{
                        backgroundColor: "#A78BFA",
                        color: "#000",
                        width: "40px",
                        height: "40px",
                      }}
                      title="Add to Wishlist"
                    >
                      <FaRegHeart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MostBooked;
