import React from "react";
import KitchenImg from '../assets/KitchenImg.jpg'
function HowitsWorkAgent() {
  const steps = [
    {
      num: 1,
      title: "Inspection",
      desc: "Expert inspects the chimney for soot, grease, and blockages."
    },
    {
      num: 2,
      title: "Setup & Safety",
      desc: "Cover the kitchen area and ensure safety before cleaning begins."
    },
    {
      num: 3,
      title: "Soot & Debris Removal",
      desc: "Vacuum and brushes are used to remove dust and grease deposits."
    },
    {
      num: 4,
      title: "Deep Cleaning",
      desc: "Degreasing and cleaning of filters, motor and exhaust fan."
    },
    {
      num: 5,
      title: "Testing",
      desc: "Reassemble parts and check suction power and airflow."
    },
    {
      num: 6,
      title: "Final Wipe & Guidance",
      desc: "Clean the work area and give maintenance tips for future care."
    }
  ];

  return (
    <>
      <div className="container-fluid howitworks-section py-5" style={{ backgroundColor: '#f9f7f3'}}>
        <div className="container">
        {/* Heading Row */}
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-5 mb-4 mb-md-0">
           
            <h3 className="mb-4 fs-1 fw-bold">How Our <span style={{color:"#8a6ff2"}}>Chimney</span>,<br/><span style={{color:"#8a6ff2"}}>Cleaning Service </span>Works</h3>
            
            <p className="text-muted">
              A professional step-by-step process to make your kitchen chimney
              grease-free, safe and efficient.
            </p>
          </div>
          <div className="col-12 col-md-5">
            <img
              src={KitchenImg}
              alt="Chimney cleaning"
              className="img-fluid shadow rounded"
            />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="row mt-5">
          {steps.map((step) => (
            <div key={step.num} className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 mb-4">
                <div className="card-body kitchenCard shadow p-4 rounded">
                  <div className="number-box  d-flex justify-content-center align-items-center mb-4">
                    <span>{step.num}</span>
                  </div>
                  <h5 className="fw-bold mb-3">{step.title}</h5>
                  <p className="text-muted">{step.desc}</p>
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

export default HowitsWorkAgent;
