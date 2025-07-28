import React, { useState } from 'react';
import angentUser from '../assets/FlatGurugramhost71.jpeg';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { TextField, Button as MUIButton } from '@mui/material';
import { Accordion } from "react-bootstrap";
import Testimonails from './Testimonials'
import FaqaImg from '../assets/Faq.jpg'
import Footer from './Footer'
import BookNow from './BookNow'
import ServiceDate from './ServiceDate'
import SuggestionsSlider from './Suggestion'
import HowitsWorkAgent from './HowitsWorkAgent'


function AgentDetail() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const services = [
    {
      title: "Chimney Deep Cleaning",
      description: "Complete cleaning for better suction and hygiene.",
      bgColor: "white",
    },
    {
      title: "Gas Stove Repair",
      description: "Fix burner issues, leakage, and ignition faults.",
      bgColor: "white",
    },
    {
      title: "Kitchen Hob Servicing",
      description: "Deep service to enhance hob performance.",
      bgColor: "white",
    },
    {
      title: "Cooktop Installation",
      description: "Safe and professional gas cooktop fitting.",
      bgColor: "white",
    },
    {
      title: "Exhaust Fan Repair",
      description: "Resolve noise and low-speed issues quickly.",
      bgColor: "white",
    },
    {
      title: "Gas Pipe Leak Fix",
      description: "Immediate solution for gas leakage problems.",
      bgColor: "white",
    },
  ];


  const faqData=[ 
    {
      key: "0",
      question: "What types of spaces do you clean?",
      answer: "We clean homes, offices, retail spaces, and even post-renovation sites. Custom packages are available based on your needs."
    },
    {
      key: "1",
      question: "Are your cleaning products eco-friendly?",
      answer: "Yes, we use non-toxic, biodegradable products that are safe for both your family and pets."
    },
    {
      key: "2",
      question: "How do I book a cleaning session?",
      answer: "You can book via our website, mobile app, or by calling our helpline. Choose your time slot and we’ll handle the rest."
    },
    {
      key: "3",
      question: "Do I need to be home during the service?",
      answer: "Not at all! You can trust our verified professionals to get the job done even if you're away."
    },
    {
      key: "4",
      question: "What if I’m not satisfied with the service?",
      answer: "We offer a satisfaction guarantee. If you're not happy, we'll re-clean the space at no extra cost."
    }
  ];
  return (
    <>
    <div className="container-fluid bg-white">
    <div className='container py-5'>
  <div className="row">
    <div className="col-lg-8 col-md-12">
      <div className="d-flex flex-column flex-md-row align-items-center bg-white p-4 rounded shadow-sm">
        <img
          src={angentUser}
          alt="Agent"
          className='img-fluid rounded-circle mb-3 mb-md-0'
          style={{ height: "150px", width: "150px", objectFit: "cover" }}
        />
        <div className="ms-md-4 text-center text-md-start">
          <h3 className="mb-1">Rahul Sharma</h3>
          <p className="text-muted mb-2">Certified Chimney Cleaning Expert</p>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 small text-muted">
            <div>⭐ 4.9</div>
            <div>325+ Reviews</div>
            <div>1508+ Jobs Completed</div>
          </div>
        </div>
      </div>

      <div className="row mt-4 g-3">
        {/* About Section */}
        <div className="col-md-6 col-12">
          <div className="bg-white p-4 rounded shadow-sm h-100">
            <h5>About</h5>
            <h6 className="text-muted">About Rahul Sharma</h6>
            <p className="small">
              Rahul is a certified chimney-cleaning expert with 5+ years of experience. Known for punctuality, precision, and professionalism. He specializes in deep cleaning, repair, and performance enhancement of kitchen systems.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="col-md-6 col-12">
          <div className="row g-3">
            <div className="col-6">
              <div className="bg-white p-3 rounded shadow-sm h-100">
                <h6 className="mb-0 fw-bold">Chimney Deep <br />Clean</h6>
                <h4 className="fw-bold mt-2 mb-0">510+</h4>
                <small className="text-muted">Specialized Jobs</small>
              </div>
            </div>

            <div className="col-6">
              <div className="bg-warning-subtle p-3 rounded shadow-sm h-100">
                <h6 className="mb-0 fw-bold">Total Jobs <br />Completed</h6>
                <h4 className="fw-bold mt-2 mb-0">1,508</h4>
                <small className="text-muted">Across all services</small>
              </div>
            </div>

            <div className="col-6">
              <div className="bg-primary-subtle p-3 rounded shadow-sm h-100">
                <h6 className="mb-0 fw-bold">Avg. Service <br />Price</h6>
                <h4 className="fw-bold mt-2 mb-0">₹690</h4>
                <small className="text-muted">Includes taxes</small>
              </div>
            </div>

            <div className="col-6">
              <div className="bg-white p-3 rounded shadow-sm h-100">
                <h6 className="mb-0 fw-bold">Top <br />Rating</h6>
                <h4 className="fw-bold mt-2 mb-0">⭐ 4.9</h4>
                <small className="text-muted">Based on 325+ reviews</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
      <ServiceDate />
    </div>
  </div>
</div>

    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3 className="mb-4 fw-bold">Services Offered</h3>
          <div className="row g-3">
            {services.map((service, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="p-4 rounded shadow"
                  style={{ backgroundColor: service.bgColor }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {service.title}
                  </div>
                  <div style={{ fontSize: '0.95rem', marginTop: '4px' }}>
                    {service.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4">
            
        </div>
      </div>
    </div>
    <HowitsWorkAgent/>
    <BookNow/>
    <Testimonails/>

    
    <div className="container py-5">
      <div className="row align-items-center">
      <h3 className="mb-4 fs-1 fw-bold">You Have <span style={{color:"#8a6ff2"}}>Questions</span>,<br/><span style={{color:"#8a6ff2"}}>We Have </span>Answers</h3>

        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={FaqaImg}
            alt="Cleaning Lady"
            className="img-fluid rounded FaqImg shadow"
            style={{ borderRadius: "20px" }}
          />
        </div>

       <div className="col-lg-6">
  <Accordion defaultActiveKey="0" flush>
    {faqData.map((item) => (
      <Accordion.Item eventKey={item.key} className="my-3 py-3 AccordianContainer" key={item.key}>
        <Accordion.Header ><strong className='accordionHeading'>{item.question}</strong></Accordion.Header>
        <Accordion.Body>{item.answer}</Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
</div>
</div>

      </div>
      <SuggestionsSlider/>
      <Footer/>
    </div>
    
    </>

  );
}

export default AgentDetail;
