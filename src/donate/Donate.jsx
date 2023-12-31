import React from "react";
import "./donate.css";
import donate1 from "../img/donate1.jpg";
import donate2 from "../img/donate2.jpg";
import donate3 from "../img/donate3.jpg";
import blur from "../img/blur.jpg";
import { NavLink } from "react-router-dom";
import { Button, Card, Image, Container , Form , Modal } from "react-bootstrap";
import { useState } from 'react';

const Donate = () => {
  const [show, setShow] = useState(false);
  const [formType,setFormType]=useState('Card Payment')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <div className="container-fluid">
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Donate Us </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="role">
            <Form.Label>Choose Payment</Form.Label>
      <Form.Select
        value={formType}
        onChange={(e) => setFormType(e.target.value)}
        autoFocus
      >
        {["Card Payment ", "Mobile Payment"].map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Herobanner Donate */}
      <div
        className="donate_banner"
        style={{ backgroundImage: `url('${donate1}')` }}
      >
        <div className="pt-5">
          <Card className="w-50 ml-auto p-5 mt-6 text-white mr-auto non-color d-none d-md-block">
            <h2 className="text-center blockquote">
              Donate Today and Make a Difference
            </h2>
            <p className="text-">
              Your gift will help us support the local programs that keep senior
              safe and living independently nationwide.
            </p>
            <div className="d-flex justify-content-center">
                <Button variant="warning" className="donate_btn" onClick={handleShow}>
                  Donate Today
                </Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="donate_section2">
        <div className="image-stack">
          <div className="image-stack__item image-stack__item--top">
            <img src={donate2} alt="" />
          </div>
          <div className="image-stack__item image-stack__item--bottom">
            <img src={donate3} alt="" />
          </div>
        </div>

        <div className="donate_text">
          <h2>JOIN US IN MAKING A DIFFERENCE</h2>
          <p>
            Donate today and become a lifeline for the seniors in our
            community.Whether it's a one-time donation, a monthly contribution,
            or a memorial or tribute donation, every doloiar makes a difference
          </p>

            <Button variant="warning" className="donate_btn" onClick={handleShow}>
              Donate Now
            </Button>
        </div>
      </div>

      <div className="donate_section3">
        <img src={blur} alt="" />
        <div className="left_text p-2">
          <h2>Donate to your local Meals on Wheels</h2>
          <p>
            Your donations help ensure that those in need in your community
            receive the right support to stay healthy at home. How to Donate:
          </p>
          <ol>
            <li>Click below to find your local Meals on Wheels</li>
            <li>Enter your address to find a provider near you</li>
            <li>Contact your local provider directly to make a donation</li>
          </ol>
          <NavLink to="/about" className="mr-2">
            <Button variant="warning" className="donate3_btn">
              Find your Local Meals On Wheels
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Donate;
