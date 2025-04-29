import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../Assets/css/login.css'; // ✅ Correct way to import CSS
import InnerBg from '../Assets/image/BG-innerPage.jpg'; 
import Cell from '../Assets/image/iCon-47.svg';
import Cell1 from '../Assets/image/iCon-48.svg';
import Cell2 from '../Assets/image/iCon-49.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/header';
import Footer from '../components/footer';


const Login = () => {
  return (
    <main>
            <Header />
      <section className="Hero logInPage position-relative">
        {/* <div className="BG position-absolute w-100 h-100">
          <img src={InnerBg} alt="Background" className="w-100 h-100 object-fit-cover" />
        </div> */}

        <Container>
          <div className="teXt text-center mb-4">
            <h2>Login</h2>
          </div>

          <div className="borderBox">
            <div className="formBox login_formBox">
              <Form>
                <Row>
                  <Col lg={6}>
                    {/* <Form.Group className="form-group">
                      <div className="inputBox position-relative">
                        <Form.Control type="tel" placeholder="+1 Phone" />
                        <img src={Cell} alt="Phone Icon" className="iCon position-absolute input-icon" />
                      </div>
                    </Form.Group> */}
                    <Form.Group className="form-group">
                  <div className="inputBox position-relative">
                    <Form.Control type="tel" placeholder="+1 Phone" />
                    <i className="bi bi-telephone iCon position-absolute input-icon"></i>
                  </div>
                </Form.Group>
                  </Col>

                  <Col lg={6}>
                  <Form.Group className="form-group">
                    <div className="inputBox position-relative">
                      <Form.Control type="password" placeholder="Password" />                   
                      <i className="bi bi-lock-fill position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                      <i className="bi bi-eye-fill position-absolute top-50 end-0 translate-middle-y me-3" style={{ cursor: 'pointer' }}></i>
                    </div>
                  </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <div className="d-flex justify-content-center mt-3">
                      <Button variant="primary" className="login-btn">
                        <span>Login</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>

              <div className="RegisterForgetPassword mt-5 register-links">
                <Row>
                  <Col lg={6} className="text-center">
                    <p>
                      If you don't have an account,<br />
                      please <a href="/register">Register</a>
                    </p>
                  </Col>
                  <Col lg={6} className="text-center">
                    <p><a href="/forgot-password">Forgot Password</a></p>
                  </Col>
                </Row>
             </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
};

export default Login;
