import React, { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css
import 'react-date-range/dist/theme/default.css'; // theme css
import 'bootstrap/dist/css/bootstrap.min.css';

function ServiceDate() {
  const [date, setDate] = useState(new Date());

  const handleChange = (date) => {
    console.log("Selected date:", date);
    setDate(date);
  };

  return (
    <div className="container my-4">
    <h5 className="mb-3">Select a Date</h5>
    <div
      className="border shadow rounded d-flex flex-column align-items-center overflow-hidden"
      style={{ maxWidth: "fit-content" }}
    >
      <div style={{ borderBottom: "1px solid #dee2e6", width: "100%" }}>
        <Calendar date={date} onChange={handleChange} />
      </div>
      <button
        className="btn btn-dark px-4 py-2 w-100 rounded-0 border-0"
        style={{ borderTop: "none" }}
      >
        Book Service
      </button>
    </div>
  </div>
  );
}

export default ServiceDate;
