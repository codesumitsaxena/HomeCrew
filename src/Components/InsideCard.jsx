import React, { useState } from 'react';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import profile1 from '../assets/electrical-serviceImg.avif';
import profile2 from '../assets/SalonImg.jpeg';
import profile3 from '../assets/cleaning-service.png';

const agents = [
  {
    id: 1,
    name: 'Rohit Sharma',
    description: 'Expert in cupboard fittings and furniture.',
    rating: 4.8,
    price: 1500,
    image: profile1
  },
  {
    id: 2,
    name: 'Ankit Singh',
    description: 'Specialist in kitchen cabinets and shelves.',
    rating: 4.5,
    price: 1200,
    image: profile2
  },
  {
    id: 3,
    name: 'Suresh Yadav',
    description: '5+ years in carpentry and repair.',
    rating: 4.9,
    price: 1800,
    image: profile3
  },
  {
    id: 4,
    name: 'Vikram Chauhan',
    description: 'Quick fixes & modular kitchen setup.',
    rating: 4.6,
    price: 1100,
    image: profile1
  },
  {
    id: 5,
    name: 'Deepak Rawat',
    description: 'Trusted handyman for all fittings.',
    rating: 4.7,
    price: 1300,
    image: profile2
  },
  {
    id: 6,
    name: 'Ravi Mehra',
    description: 'Fast and neat woodwork expert.',
    rating: 4.4,
    price: 1400,
    image: profile3
  },
  {
    id: 7,
    name: 'Manish Verma',
    description: 'Affordable carpentry & repairs.',
    rating: 4.2,
    price: 1000,
    image: profile1
  },
  {
    id: 8,
    name: 'Amit Thakur',
    description: 'Experienced with modern fittings.',
    rating: 4.5,
    price: 1600,
    image: profile2
  }
];

function InsideCard() {
  const [filters, setFilters] = useState({
    location: '',
    sortBy: '',
    price: 2000,
    verified: false,
    experience: '',
    availability: '',
    services: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "services") {
      const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
      setFilters({ ...filters, services: selectedOptions });
    } else {
      setFilters({
        ...filters,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSliderChange = (e) => {
    setFilters({
      ...filters,
      price: parseInt(e.target.value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters applied:", filters);
  };

  return (
    <div className="container-fluid py-5 bg-light cardMoreData">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Carpenter Services Near You</h2>
          <p className="text-muted">Verified Experts. Upfront Pricing. Trusted by 1000+ Customers.</p>
        </div>

        {/* Filter Form */}
        <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm mb-5 border">
          <Row className="align-items-end flex-nowrap overflow-auto g-3 justify-content-start">
            <Col xs="auto" style={{ minWidth: "160px" }}>
              <Form.Label className="fw-semibold">Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="location"
                value={filters.location}
                onChange={handleChange}
              />
            </Col>

            <Col xs="auto" style={{ minWidth: "160px" }}>
              <Form.Label className="fw-semibold">🔽 Sort By</Form.Label>
              <Form.Select name="sortBy" value={filters.sortBy} onChange={handleChange}>
                <option value="">Select</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="popularity">Popularity</option>
              </Form.Select>
            </Col>

            <Col xs="auto" style={{ minWidth: "220px" }}>
              <Form.Label className="fw-semibold d-block text-center small">
                Price: ₹100 – ₹{filters.price}
              </Form.Label>
              <Form.Range
                min={100}
                max={2000}
                step={100}
                value={filters.price}
                onChange={handleSliderChange}
              />
            </Col>

            <Col xs="auto" style={{ minWidth: "160px" }}>
              <Form.Label className="fw-semibold">Experience</Form.Label>
              <Form.Select name="experience" value={filters.experience} onChange={handleChange}>
                <option value="">Select</option>
                <option value="1">1+ Years</option>
                <option value="3">3+ Years</option>
                <option value="5">5+ Years</option>
              </Form.Select>
            </Col>

            <Col xs="auto" style={{ minWidth: "160px" }}>
              <Form.Label className="fw-semibold">Availability</Form.Label>
              <Form.Select name="availability" value={filters.availability} onChange={handleChange}>
                <option value="">Select</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </Form.Select>
            </Col>

            <Col xs="auto" className="pt-4" style={{ minWidth: "120px" }}>
              <Button type="submit" variant="dark" className="px-4 py-2 rounded-pill w-100">
                Apply
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

      {/* Agent Cards */}
      <div className="container">
        <div className="row">
          {agents.map((agent, index) => (
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
              <Card className="p-3 shadow-sm rounded-4 border-0 h-100 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="rounded-pill"
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                  />
                  <div className="d-flex flex-column align-items-end">
                    <Button variant="light" className="border-0 p-0 mb-1">
                      <span className="text-primary fw-semibold" style={{ fontSize: '13px' }}>+ Add to Cart</span>
                    </Button>
                    <div className="d-flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.round(agent.rating) ? 'text-warning' : 'text-secondary'} style={{ fontSize: '12px' }} />
                      ))}
                    </div>
                  </div>
                </div>

                <h6 className="text-start mt-3 fw-bold mb-1">{agent.name}</h6>
                <p className="text-muted text-start small mb-2 pe-2">{agent.description}</p>

                <div className="mt-auto">
                  <div className="fw-semibold mb-2 text-start" style={{ fontSize: '14px' }}>
                    Starts at ₹{agent.price}
                  </div>
                  <Button variant="dark" size="sm" className="rounded-pill w-100">
                    View Profile
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InsideCard;
