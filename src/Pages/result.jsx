import React from 'react';
import { Container, Row, Col, Accordion, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/header';
import Footer from '../components/footer';
import '../Assets/css/result.css'; 

const ResultPage = () => {
  return (
    <>
          <Header />
      <main role="main" className="result_page">
        <Container>

          <div className="teXt text-center my-5">
            <h2>My Flight Plan - Result</h2>
          </div>

          <Row className="justify-content-center">
            {/* LEFT SIDE - Result Details */}
            <Col lg={8}>
              {/* Selected Details */}
              <div className="selectedDetails mb-5">
                <ul className="iConteXt_List list-unstyled result_ul">
                  <li className="d-flex mb-3">
                    <i className="bi bi-people-fill me-3"></i>
                    <div>
                      <label>Number of potential operators:</label>
                      <p>2</p>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="bi bi-clock-history me-3"></i>
                    <div>
                      <label>Est. Total Flight Time:</label>
                      <p>02:45</p>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="bi bi-speedometer2 me-3"></i>
                    <div>
                      <label>Cruise speed:</label>
                      <p>880-926 km/h</p>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="bi bi-cash-coin me-3"></i>
                    <div>
                      <label>Estimated price range:</label>
                      <p>$12,000-$13,500</p>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="bi bi-fuel-pump-fill me-3"></i>
                    <div>
                      <label>Average cost of fuel:</label>
                      <p>$1289 (1000 gallon)</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Recommended Operators */}
              <div className="recommendedOperators mb-5">
                <div className="borderBox">
                  <div className="solidBgBox">
                    <h4>Recommended Operators (2)</h4>
                    <ul className="list-unstyled">
                      {[1, 2].map((_, index) => (
                        <li key={index} className="mb-4">
                          <div className="airlineName d-flex justify-content-between align-items-center mb-2">
                            <div className="checkbox d-flex align-items-center">
                              <Form.Check type="checkbox" id={`op-${index}`} className="me-2" />
                              <div className="imgTitle d-flex align-items-center">
                                <i className="bi bi-airplane me-2"></i>
                                <div>
                                  <p className="mb-1">Delta Airlines</p>
                                  <span className="text-muted">Fairfax, VA</span>
                                </div>
                              </div>
                            </div>
                            <div className="airlineOption d-flex gap-2">
                              <Link to="#"><i className="bi bi-eye-slash me-1"></i> Hide</Link>
                              <Link to="#"><i className="bi bi-star me-1"></i> Favourite</Link>
                            </div>
                          </div>

                          <div className="airportBox">
                            <div className="btnsGroup d-flex justify-content-center flex-wrap gap-3">
                              <Link to="#"><i className="bi bi-telephone-fill me-2"></i>Call</Link>
                              <Link to="#"><i className="bi bi-envelope-fill me-2"></i>Email</Link>
                              <Link to="#"><i className="bi bi-globe2 me-2"></i>Website</Link>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Compare Button */}
              <div className="d-flex justify-content-center mt-5">
                <Button variant="primary" className="btn">
                  Compare
                </Button>
              </div>
            </Col>

            {/* RIGHT SIDE - Accordion */}
            <Col lg={4}>
              <div className="accordion_section">
                <Accordion defaultActiveKey="0" flush>

                  {/* Trip Details */}
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Trip Details</Accordion.Header>
                    <Accordion.Body>
                      <ul className="iConteXt_List w-100">
                        <li className="d-flex align-items-start">
                          <i className="bi bi-truck me-3"></i>
                          <div>
                            <label>Type</label>
                            <p>Intermodal</p>
                          </div>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="bi bi-arrow-repeat me-3"></i>
                          <div>
                            <label>Trip type</label>
                            <p>Multi-Stop (1)</p>
                          </div>
                        </li>
                      </ul>
                      <hr />
                      <ul className="iConteXt_List w-100">
                        <li className="d-flex align-items-start">
                          <i className="bi bi-box-seam me-3"></i>
                          <div>
                            <label>Payload type</label>
                            <p>Freight</p>
                          </div>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="bi bi-stack me-3"></i>
                          <div>
                            <label>No. of Freight</label>
                            <p>2</p>
                          </div>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Freight Details */}
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Freight Details</Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-1">PALLETE-1</p>
                      <ul className="iConteXt_List w-100">
                        <li className="d-flex align-items-start">
                          <i className="bi bi-aspect-ratio-fill me-3"></i>
                          <div>
                            <label>Dimension</label>
                            <p>H: 40in, W: 66in, D: 100in</p>
                          </div>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="bi bi-weight me-3"></i>
                          <div>
                            <label>Weight</label>
                            <p>500 lb</p>
                          </div>
                        </li>
                      </ul>
                      <hr />
                      <p className="mb-1">DUFFLE BAGS - PACKAGE-1</p>
                      <ul className="iConteXt_List w-100">
                        <li className="d-flex align-items-start">
                          <i className="bi bi-aspect-ratio-fill me-3"></i>
                          <div>
                            <label>Dimension</label>
                            <p>H: 40in, W: 66in, D: 100in</p>
                          </div>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="bi bi-weight me-3"></i>
                          <div>
                            <label>Weight</label>
                            <p>500 lb</p>
                          </div>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Other Accordions: Origin, Stop, Destination, Transport */}
                  {/* (You can copy same pattern for rest!) */}
                  
                </Accordion>
              </div>
            </Col>

          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ResultPage;
