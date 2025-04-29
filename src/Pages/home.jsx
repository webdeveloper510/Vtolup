import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import "../Assets/css/home.css";
import "../Assets/css/responsive.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import topbg from "../../src/Assets/image/BG-Hero.jpg";
import topbg1 from "../Assets/image/BG-Hero1.png";
import three1 from "../Assets/image/iMG-1.jpg";
import three2 from "../Assets/image/iMG-2.jpg";
import three3 from "../Assets/image/iMG-3.jpg";
import Appimg from "../Assets/image/VTOLuP_App.png";
import Play1 from "../Assets/image/storeApp.png";
import Play2 from "../Assets/image/storePlay.png";

const Home = () => {
  // 🧠 Step 1: useState here
  const [stops, setStops] = useState(1);

  const increaseStops = () => setStops(prev => prev + 1);
  const decreaseStops = () => setStops(prev => (prev > 0 ? prev - 1 : 0));

  // 🧠 Step 2: useEffect here (RIGHT AFTER useState)
  useEffect(() => {
    document.body.classList.add('home-page');
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <>
      <Header />

      <main role="main" className="home_page">

        {/* Hero Section */}
        <section className="Hero position-relative">
          <div className="BG">
            <img src={topbg1} alt="Background" />
          </div>
          <Container>
            <div className="teXt text-left">
              <h2>Passengers and Freight via Land and Air Vehicles</h2>
              <h3 className="bnner_text">Intermodal Transportation for</h3>
            </div>
          </Container>
        </section>

        {/* My Flight Plan Section */}
        <section className="MyFlightPlan_Sec home_MyFlightPlan_Sec">
          <Container>
            <div className="borderBox">
            <h4 className="d-flex align-items-center">
                  <i className="fas fa-plane iCon"></i> My Flight Plan
                </h4>
              <div className="formBox home_formBox">
                <form>
                  <Row>
                    <Col xs={12}>
                      <label>Trip Details</label>
                    </Col>
                    <Col lg={6}>
                      <div className="hTabs mb-3 d-flex gap-2">
                        <Button variant="dark">
                          <i className="bi bi-helicopter me-2" /> VTOL
                        </Button>
                        <Button variant="light">
                          <i className="bi bi-airplane me-2" /> Airplane
                        </Button>
                        <Button variant="dark">
                          <i className="bi bi-truck me-2" /> Intermodal
                        </Button>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="hTabs mb-3 d-flex gap-2">
                        <Button variant="light">
                          <i className="bi bi-person me-2" /> Passenger
                        </Button>
                        <Button variant="dark">
                          <i className="bi bi-box-seam me-2" /> Freight
                        </Button>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <label>Trip Type</label>
                    </Col>
                    <Col xs={6} className='mob_full'>
                      <div className="hTabs mb-3 d-flex gap-2">
                        <Button variant="dark">
                          <i className="bi bi-arrow-repeat me-2" /> Round trip
                        </Button>
                        <Button variant="dark">
                          <i className="bi bi-arrow-right me-2" /> One-way
                        </Button>
                        <Button variant="light">
                          <i className="bi bi-signpost-2 me-2" /> Multi-Stop
                        </Button>
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="counterBlk d-flex justify-content-between align-items-center home_stop">
                        <h4>
                          <i className="fas fa-road iCon"></i> Number of Stops
                        </h4>
                        <div className="counter d-flex align-items-center">
                          <span className="minus" onClick={decreaseStops} style={{ cursor: "pointer" }}>-</span>
                          <input type="text" value={stops} readOnly style={{ width: "50px", textAlign: "center", margin: "0 10px" }} />
                          <span className="plus" onClick={increaseStops} style={{ cursor: "pointer" }}>+</span>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} className="mt-4">
                      <div className="d-flex justify-content-center">
                        <Link to="/myflightplan" className="btn">
                          <span>Next</span>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Container>
        </section>

        {/* Three Boxes Section */}
        <section className="threeBoxes position-relative">
          <div className="BG"></div>
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={6} lg={4}>
                <div className="singleBox text-center">
                  <img src={three1} alt="Helicopters, VTOLs, Aircraft" className="iMG" />
                  <h4>Helicopters, VTOLs, <br /> and Fixed-Wing Aircraft</h4>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className="singleBox text-center">
                  <img src={three2} alt="Short-Haul and Long Distance" className="iMG" />
                  <h4>Short-Haul and <br /> Long Distance</h4>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className="singleBox text-center">
                  <img src={three3} alt="Between Doors & Docks" className="iMG" />
                  <h4>Between Doors & Docks, <br /> we got you!</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* VTOLuP App Section */}
        <section className="VTOLuP_App position-relative">
          <div className="BG"></div>
          <Container className="small">
            <Row className="align-items-center">
              <Col md={6} className="order-md-2">
                <div className="iMG text-center">
                  <img src={Appimg} alt="VTOLUP App" />
                </div>
              </Col>
              <Col md={6}>
                <div className="teXt">
                  <h3>VTOLUP app is now Available</h3>
                  <p>No matter where you are, you can easily book your rides, parcels, or freight on either your iPhone or Android mobile app! You never know when you want to save time!</p>
                  <div className="appStore d-flex align-items-center gap-3">
                    <a href="#"><img src={Play1} alt="App Store" /></a>
                    <a href="#"><img src={Play2} alt="Google Play Store" /></a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Home;
