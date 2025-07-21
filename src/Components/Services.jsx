import React from "react";
import AcRepair from "../assets/air-conditioner.png";
import Electrical from "../assets/electrical-service.png";
import Plumber from "../assets/plumber.png";
import Saloon from "../assets/Saloon2.png";
import WaterPurifiers from "../assets/water-filter.png";
import WomenSpa from "../assets/Saloon2.png";
import YogaTrainer from "../assets/Yoga.png";
import CookingTiffin from "../assets/cooking.png";
import HomePainting from "../assets/renovation.png";
import Cleaning from "../assets/Cleaning.png";

function Services() {
  const services = [
    {
      id: 1,
      image: AcRepair,
      title: "AC Repair",
      desc: "Cooling solutions",
      bgColor: "#E6F0FF",
    },
    {
      id: 2,
      image: Electrical,
      title: "Electrician",
      desc: "Electrical fixes",
      bgColor: "#E5FFF3",
    },
    {
      id: 3,
      image: Plumber,
      title: "Plumber",
      desc: "Leakage & repairs",
      bgColor: "#FFF3E5",
    },
    {
      id: 4,
      image: Saloon,
      title: "Salon at Home",
      desc: "Beauty services",
      bgColor: "#F9E6FF",
    },
    {
      id: 5,
      image: HomePainting,
      title: "Home Painting",
      desc: "Wall design & paint",
      bgColor: "#FFF0F0",
    },
    {
      id: 6,
      image: WaterPurifiers,
      title: "Water Purifier",
      desc: "RO service",
      bgColor: "#E9F5FF",
    },
    {
      id: 7,
      image: YogaTrainer,
      title: "Yoga Trainer",
      desc: "Personal yoga coach",
      bgColor: "#E8FFE8",
    },
    {
      id: 8,
      image: CookingTiffin,
      title: "Home Tiffin",
      desc: "Healthy meals",
      bgColor: "#FFF9E6",
    },
    {
      id: 9,
      image: WomenSpa,
      title: "Women Spa",
      desc: "Relaxing therapy",
      bgColor: "#FFE9F5",
    },
    {
      id: 10,
      image: Cleaning,
      title: "Home Cleaning",
      desc: "Deep home clean",
      bgColor: "#E5F6FF",
    },
  ];

  return (
    <div className="container-fluid py-5" style={{backgroundColor: '#f9f7f3'}}>
        <div className="container">
      <h3 className='py-2 serviceHeading' style={{ marginBottom: "24px", fontWeight: "600" }}>
        Explore Popular Services
      </h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "flex-start",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              width: "18.2%", 
              backgroundColor: "#fff",
              padding: "16px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            className='cardContainer'
          >
            <div
              style={{
                backgroundColor: service.bgColor,
                borderRadius: "50%",
                padding: "12px",
                marginBottom: "12px",
              }}
              
            >
              <img
                src={service.image}
                alt={service.title}
                style={{ height: "30px", width: "30px" }}
              />
            </div>
            <h4
              style={{
                fontSize: "16px",
                marginBottom: "6px",
                fontWeight: "600",
              }}
            >
              {service.title}
            </h4>
            <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
      </div>

    </div>
  );
}

export default Services;
