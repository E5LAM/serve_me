"use client";
import { Col, Container, Row } from "react-bootstrap";

import Form from "react-bootstrap/Form";
export default function ContactUs() {
  return (
    <section className="contact-section">
      <Container>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>subject</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />

              <div className="send text-center">
                <button className="btn-prim ">Submit</button>
              </div>
            </Form>
          </Col>
          <Col md={6}>
            <div className="contact-info">
              <h2>CTA Here for Contact Form</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia, corporis dolorem tempora adipisci repudiandae
                reprehenderit at illum laboriosam alias molestiae? Ullam
                deserunt ex totam recusandae? Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Mollitia, corporis dolorem tempora
                adipisci repudiandae reprehenderit at illum laboriosam alias
                molestiae? Ullam deserunt ex totam recusandae?
              </p>
              <div className="send ">
                <button className="btn-prim ">cta here</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
