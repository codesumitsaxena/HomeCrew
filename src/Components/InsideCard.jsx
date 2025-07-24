// 📁 InsideCard.jsx
import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import citiesData from "../cities.json";
import { Button, Form } from "react-bootstrap";
import Footer from "./Footer";
import AgentContainer from "./AgentContainer";
import Select from "react-select";

function InsideCard() {
  const [filters, setFilters] = useState({
    location: "",
    sortBy: "",
    price: "",
    experience: "",
    availability: "",
  });

  const [suggestions, setSuggestions] = useState([]);
  const [fuse, setFuse] = useState(null);

  // ✅ Fuse.js setup for city/area search
  useEffect(() => {
    const fuseInstance = new Fuse(citiesData, {
      keys: ["name"], // cities.json me "name" field hone chahiye
      threshold: 0.3,
    });
    setFuse(fuseInstance);
  }, []);

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, location: value });
  
    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const matches = citiesData
        .filter(city => city.name.toLowerCase().startsWith(value.toLowerCase()))
        .map(city => city.name);
      
      setSuggestions(matches.slice(0, 5));
    }
  };
  

  const handleSuggestionClick = (value) => {
    setFilters({ ...filters, location: value });
    setSuggestions([]);
  };

  const handleSelectChange = (selectedOption, field) => {
    setFilters((prev) => ({ ...prev, [field]: selectedOption.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters applied:", filters);
  };

  const selectStyles = {
    control: (base) => ({
      ...base,
      borderRadius: "0.375rem",
      minHeight: "38px",
      fontSize: "15px",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#6c757d",
    }),
  };

  // ✅ Dropdown Options
  const sortOptions = [
    { value: "rating", label: "Rating" },
    { value: "priceLowToHigh", label: "Price: Low to High" },
    { value: "priceHighToLow", label: "Price: High to Low" },
  ];

  const priceOptions = [
    { value: "under500", label: "Under ₹500" },
    { value: "500to1000", label: "₹500 - ₹1000" },
    { value: "above1000", label: "Above ₹1000" },
  ];

  const experienceOptions = [
    { value: "1", label: "1+ years" },
    { value: "3", label: "3+ years" },
    { value: "5", label: "5+ years" },
  ];

  const availabilityOptions = [
    { value: "morning", label: "Morning" },
    { value: "afternoon", label: "Afternoon" },
    { value: "evening", label: "Evening" },
  ];

  return (
    <div className="container-fluid py-5 bg-light cardMoreData">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Carpenter Services Near You</h2>
          <p className="text-muted">
            Verified Experts. Upfront Pricing. Trusted by 1000+ Customers.
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm mb-5 border">
          <div className="d-lg-flex flex-wrap gap-3">
            {/* ✅ Location input + suggestions */}
            <div style={{ minWidth: "180px", position: "relative" }}>
              <Form.Label className="fw-semibold">Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city or area"
                name="location"
                value={filters.location}
                onChange={handleLocationChange}
                autoComplete="off"
              />
              {suggestions.length > 0 && (
                <div
                  className="position-absolute bg-white shadow rounded w-100 mt-1 z-3"
                  style={{ maxHeight: "150px", overflowY: "auto" }}
                >
                  {suggestions.map((suggestion, idx) => (
                    <div
                      key={idx}
                      className="p-2 border-bottom text-dark"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 🔽 Other dropdown filters */}
            <div style={{ minWidth: "180px" }}>
              <Form.Label className="fw-semibold">Sort By</Form.Label>
              <Select
                options={sortOptions}
                styles={selectStyles}
                value={sortOptions.find((opt) => opt.value === filters.sortBy)}
                onChange={(selected) => handleSelectChange(selected, "sortBy")}
              />
            </div>

            <div style={{ minWidth: "180px" }}>
              <Form.Label className="fw-semibold">Price Range</Form.Label>
              <Select
                options={priceOptions}
                styles={selectStyles}
                value={priceOptions.find((opt) => opt.value === filters.price)}
                onChange={(selected) => handleSelectChange(selected, "price")}
              />
            </div>

            <div style={{ minWidth: "180px" }}>
              <Form.Label className="fw-semibold">Experience</Form.Label>
              <Select
                options={experienceOptions}
                styles={selectStyles}
                value={experienceOptions.find((opt) => opt.value === filters.experience)}
                onChange={(selected) => handleSelectChange(selected, "experience")}
              />
            </div>

            <div style={{ minWidth: "180px" }}>
              <Form.Label className="fw-semibold">Availability</Form.Label>
              <Select
                options={availabilityOptions}
                styles={selectStyles}
                value={availabilityOptions.find((opt) => opt.value === filters.availability)}
                onChange={(selected) => handleSelectChange(selected, "availability")}
              />
            </div>

            <div className="d-flex align-items-end" style={{ minWidth: "140px" }}>
              <Button type="submit" variant="dark" className="w-100 py-2 rounded-pill">
                Apply
              </Button>
            </div>
          </div>
        </Form>
      </div>

      <div>
        <div className="container">
          <AgentContainer />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default InsideCard;
