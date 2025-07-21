import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Footer from './Footer';
import AgentContainer from "./AgentContainer";
import Select from 'react-select';

function InsideCard() {
  const [filters, setFilters] = useState({
    location: "",
    sortBy: "",
    price: "",
    experience: "",
    availability: "",
  });

  // Options
  const sortOptions = [
    { value: "", label: "Select" },
    { value: "priceLow", label: "Price: Low to High" },
    { value: "priceHigh", label: "Price: High to Low" },
    { value: "rating", label: "Rating" },
    { value: "popularity", label: "Popularity" },
  ];

  const priceOptions = [
    { value: "", label: "Select" },
    { value: "500", label: "Up to ₹500" },
    { value: "700", label: "Up to ₹700" },
    { value: "1000", label: "Up to ₹1000" },
  ];

  const experienceOptions = [
    { value: "", label: "Select" },
    { value: "1", label: "1+ Years" },
    { value: "3", label: "3+ Years" },
    { value: "5", label: "5+ Years" },
  ];

  const availabilityOptions = [
    { value: "", label: "Select" },
    { value: "morning", label: "Morning" },
    { value: "afternoon", label: "Afternoon" },
    { value: "evening", label: "Evening" },
  ];

  const handleSelectChange = (selectedOption, field) => {
    setFilters(prev => ({ ...prev, [field]: selectedOption.value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters applied:", filters);
  };

  const selectStyles = {
    control: (base) => ({
      ...base,
      borderRadius: '0.375rem',
      minHeight: '38px',
      fontSize: '15px',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#6c757d',
    }),
  };

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
            <div style={{ minWidth: "180px" }}>
              <Form.Label className="fw-semibold">Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="location"
                value={filters.location}
                onChange={handleChange}
                
              />
            </div>

            <div style={{ minWidth: "180px" }}>
              <Form.Label className="fw-semibold">Sort By</Form.Label>
              <Select
                options={sortOptions}
                styles={selectStyles}
                value={sortOptions.find(opt => opt.value === filters.sortBy)}
                onChange={(selected) => handleSelectChange(selected, "sortBy")}
              />
            </div>

            <div style={{ minWidth: "180px" }}>
              <Form.Label className="fw-semibold">Price Range</Form.Label>
              <Select
                options={priceOptions}
                styles={selectStyles}
                value={priceOptions.find(opt => opt.value === filters.price)}
                onChange={(selected) => handleSelectChange(selected, "price")}
              />
            </div>

            <div style={{ minWidth: "180px" }}>
              <Form.Label className="fw-semibold">Experience</Form.Label>
              <Select
                options={experienceOptions}
                styles={selectStyles}
                value={experienceOptions.find(opt => opt.value === filters.experience)}
                onChange={(selected) => handleSelectChange(selected, "experience")}
              />
            </div>

            <div style={{ minWidth: "180px" }}>
              <Form.Label className="fw-semibold">Availability</Form.Label>
              <Select
                options={availabilityOptions}
                styles={selectStyles}
                value={availabilityOptions.find(opt => opt.value === filters.availability)}
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
        <AgentContainer />
        <Footer />
      </div>
    </div>
  );
}

export default InsideCard;
