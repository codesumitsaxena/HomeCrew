import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FilterSection from "./FilterServiceAgent";

function ResponsiveFilter() {
  const [show, setShow] = useState(false);

  return (
    <>
      <i
        className="bi bi-filter-circle-fill text-purple fs-4 d-block d-md-none"
        style={{ cursor: "pointer" }}
        onClick={() => setShow(true)}
      ></i>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FilterSection />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResponsiveFilter;
