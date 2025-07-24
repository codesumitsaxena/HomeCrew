import React from 'react';
import { Card } from 'react-bootstrap';
import bedImg from '../assets/bed.jpg';
import cupboardImg from '../assets/Cupboard.jpg';
import doorImg from '../assets/Door.jpg';
import drawerImg from '../assets/Drawer.jpg';
import polishImg from '../assets/Wood Polishing.jpg';
import modularImg from '../assets/Sofa.jpg';

const subCategories = [
  { title: "Bed Assembly", image: bedImg },
  { title: "Cupboard Repair", image: cupboardImg },
  { title: "Door Fixing", image: doorImg },
  { title: "Drawer Repair", image: drawerImg },
  { title: "Wood Polishing", image: polishImg },
  { title: "Modular Furniture", image: modularImg },
];

function Subcatergory() {
  return (
    <div>
      <h3 className="fw-bold mb-3 fs-5 fs-md-4">Subcategories</h3>
      <div className="bg-white p-3 rounded shadow-sm">
        <div className="row">
          {subCategories.map((item, index) => (
            <div className="col-6 col-md-6 col-sm-6 col-lg-6 mb-4" key={index}>
              <Card className="p-2 border-0 rounded-4 h-100 text-center">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded mb-2"
                  style={{
                    height: "80px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="p-1">
                  <Card.Title
                    as="h6"
                    className="fw-semibold mb-0 fs-6 fs-md-6 fs-lg-5"
                  >
                    {item.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subcatergory;
