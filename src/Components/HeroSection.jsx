import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Select from 'react-select';
import Fuse from 'fuse.js';
import CitiesData from '../cities.json'
import HeroImage from '../assets/HeroSection.jpg';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";
 


const cities = [];
CitiesData.forEach(city => {
  cities.push({ name: city.name }); 
  city.areas.forEach(area => {
    cities.push({ name: `${area}, ${city.name}` }); 
  });
});

const fuse = new Fuse(cities, {
  threshold: 0.3,
  keys: ["name"],
});

const priceOptions = [
  { value: '', label: 'Price Range' },
  { value: 'low', label: 'Below ₹500' },
  { value: 'medium', label: '₹500 - ₹1K' },
  { value: 'high', label: 'Above ₹2K' },
];

const experienceOptions = [
  { value: '', label: 'Experience' },
  { value: '0-1', label: '0-1 Years' },
  { value: '1-3', label: '1-3 Years' },
  { value: '3+', label: '3+ Years' },
];

const availabilityOptions = [
  { value: '', label: 'Availability' },
  { value: 'today', label: 'Today' },
  { value: 'week', label: 'This Week' },
  { value: 'weekends', label: 'Weekends' },
];

const customStyles = {
  control: (base) => ({
    ...base,
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    padding: 0,
    fontSize: '15px',
    minHeight: 'auto',
  }),
  menu: (base) => ({
    ...base,
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    zIndex: 9999,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? '#f0f0ff' : '#fff',
    color: '#333',
    fontSize: '14px',
    padding: '10px 15px',
    cursor: 'pointer',
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: '0px',
    color: '#666',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
};

function HeroSection() {
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);

    if (value.length > 1) {
      const results = fuse.search(value).map((result) => result.item);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion.name);
    setSuggestions([]);
  };

  return (
    <div className="bg-[#fdf9f5] py-5">
      <Container className="pt-2">
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="display-5 fw-bold text-dark">
              Reliable Home Services,<br />Delivered to Your Doorstep.
            </h1>
            <p className="text-muted mt-3" style={{ fontSize: '1.1rem' }}>
              From beauty and wellness to repairs and deep cleaning, book trusted professionals in just a few clicks.
            </p>
          </Col>
          <Col lg={6} className="text-center">
            <img
              src={HeroImage}
              alt="Home Service Professional"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: '420px', objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 mb-5 position-relative">
        <div className="bg-white py-4 px-3 px-md-5 rounded-4 shadow-lg">
          <Row className="g-3 align-items-center">

            {/* Service Input */}
            <Col lg={2} md={4} sm={6}>
              <div className="input-group rounded-pill bg-body-tertiary px-3 py-2">
                <FaSearch className="text-purple me-2 fs-5" />
                <input
                  type="text"
                  placeholder="Service"
                  className="form-control border-0 bg-transparent p-0 shadow-none"
                  style={{ fontSize: "15px" }}
                />
              </div>
            </Col>

            {/* Location Autocomplete Input */}
            <Col lg={2} md={4} sm={6} className="position-relative">
              <div className="input-group rounded-pill bg-body-tertiary px-3 py-2">
                <FaMapMarkerAlt className="text-purple me-2 fs-5" />
                <input
                  type="text"
                  placeholder="Location"
                  className="form-control border-0 bg-transparent p-0 shadow-none"
                  value={location}
                  onChange={handleLocationChange}
                  style={{ fontSize: "15px" }}
                />
              </div>
              {suggestions.length > 0 && (
                <ul className="list-group position-absolute w-100 mt-1" style={{ zIndex: 9999 }}>
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="list-group-item list-group-item-action"
                      style={{ cursor: 'pointer', fontSize: '14px' }}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.name}
                    </li>
                  ))}
                </ul>
              )}
            </Col>

            {/* Filters */}
            <Col lg={2} md={4} sm={6}>
              <div className="d-flex align-items-center rounded-pill bg-body-tertiary px-3 py-2">
                <FaRupeeSign className="text-purple me-2 fs-5" />
                <Select
                  options={priceOptions}
                  styles={customStyles}
                  isSearchable={false}
                  defaultValue={priceOptions[0]}
                />
              </div>
            </Col>

            <Col lg={2} md={4} sm={6}>
              <div className="d-flex align-items-center rounded-pill bg-body-tertiary px-3 py-2">
                <FaBriefcase className="text-purple me-2 fs-5" />
                <Select
                  options={experienceOptions}
                  styles={customStyles}
                  isSearchable={false}
                  defaultValue={experienceOptions[0]}
                />
              </div>
            </Col>

            <Col lg={2} md={4} sm={6}>
              <div className="d-flex align-items-center rounded-pill bg-body-tertiary px-3 py-2">
                <FaClock className="text-purple me-2 fs-5" />
                <Select
                  options={availabilityOptions}
                  styles={customStyles}
                  isSearchable={false}
                  defaultValue={availabilityOptions[0]}
                />
              </div>
            </Col>

            <Col lg={2} md={4} sm={6}>
              <Button
                className="w-100 py-2 rounded-pill text-white"
                style={{
                  backgroundColor: "#A78BFA",
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                }}
              >
                Search
              </Button>
            </Col>

          </Row>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
