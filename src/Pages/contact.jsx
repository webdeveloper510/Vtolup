import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ('../Assets/css/contact.css');

const Contact = () => {
  return (
    <main>
      <Header />

      <section className="Hero contactForm position-relative">
        <Container>
          <div className="teXt text-center mb-4">
            <h2>Contact us</h2>
          </div>

          <div className="borderBox">
            <div className="formBox">
              <Form>
                <Row>
                  <Col xs={12}>
                    <Form.Group className="form-group">
                      <div className="inputBox position-relative">
                        <Form.Select className="form-control">
                          <option>Select Subject</option>
                          <option value="1">General Inquiry</option>
                          <option value="2">Support</option>
                          <option value="3">Feedback</option>
                        </Form.Select>
                        <i className="bi bi-bookmark iCon position-absolute input-icon"></i>
                        <i className="bi bi-caret-down-fill downArrow position-absolute end-0 me-3 top-50 translate-middle-y"></i>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col lg={6}>
                    <Form.Group className="form-group">
                      <div className="inputBox position-relative">
                        <Form.Control type="text" placeholder="Your full name" />
                        <i className="bi bi-person iCon position-absolute input-icon"></i>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col lg={6}>
                    <Form.Group className="form-group">
                      <div className="inputBox position-relative">
                        <Form.Control type="email" placeholder="Email" />
                        <i className="bi bi-envelope iCon position-absolute input-icon"></i>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group className="form-group">
                      <div className="inputBox position-relative">
                        <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                        <i className="bi bi-chat-text iCon position-absolute input-icon"></i>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <div className="d-flex justify-content-center mt-3">
                      <Button variant="primary" className="login-btn">
                        <span>Send</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
