import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Tab, Nav } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../components/header";
import Footer from "../components/footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Assets/css/myflightplan.css";
import { InputGroup } from "react-bootstrap";
import "../Assets/css/responsive.css";
import "../Assets/css/responsive.css";
import { useNavigate } from 'react-router-dom';


// const steps = [
//   { label: "Trip", icon: "bi-geo-alt" },
//   { label: "Payload", icon: "bi-box" },
//   { label: "Origins", icon: "bi-flag" },
//   { label: "Stops", icon: "bi-signpost-split" },
//   { label: "Destination", icon: "bi-geo-fill" },
// ];
const steps = [
  { label: "Trip" },
  { label: "Payload" },
  { label: "Origins" },
  { label: "Stops" },
  { label: "Destination" },
];

const MyFlightPlan = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Step 2 states
  const [packageCount, setPackageCount] = useState(1);
  const [toBeDetermined, setToBeDetermined] = useState(false);
  const [extraLuggage, setExtraLuggage] = useState(false);

  // Step 3 states
  const [originMode, setOriginMode] = useState("VTOL");
  const [originTab, setOriginTab] = useState("Vertiport");
  const [useLatLngVertiport, setUseLatLngVertiport] = useState(false);
  const [useLatLngGPS, setUseLatLngGPS] = useState(false);
  const [useLatLngAddress, setUseLatLngAddress] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [travelMode, setTravelMode] = useState("VTOL");
  const [locationType, setLocationType] = useState("Vertiport");
  const [useLatLng, setUseLatLng] = useState(false);
  const [showPickup, setShowPickup] = useState(false);
  const [showDropOff, setShowDropOff] = useState(false);
  const [tobeDetermined, setTobeDetermined] = useState(false);
  const [additionalLuggage, setAdditionalLuggage] = useState(false);

  // Step 4 states
  const [destinationSelectedDate, setDestinationSelectedDate] = useState(null);
  const [destinationMode, setDestinationMode] = useState("VTOL");
  const [destinationTab, setDestinationTab] = useState("Vertiport");
  const [useLatLngVertiportDest, setUseLatLngVertiportDest] = useState(false);
  const [useLatLngGPSDest, setUseLatLngGPSDest] = useState(false);
  const [useLatLngAddressDest, setUseLatLngAddressDest] = useState(false);

  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Redirect to result page on last step
      navigate('/result');
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  
  const incrementPackages = () => {
    setPackageCount((prev) => prev + 1);
  };
  
  const decrementPackages = () => {
    setPackageCount((prev) => Math.max(1, prev - 1));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <Row>
            <Col xs={12}>
              <label>Trip Details</label>
            </Col>
            <Col lg={6}>
              <div className="hTabs mb-3 d-flex gap-0">
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
              <div className="hTabs mb-3 d-flex gap-0">
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
            <Col xs={6} className="mob_full">
              <div className="hTabs mb-3 d-flex gap-0">
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
          </Row>
        );

      case 1:
        return (
          <Row className="align-items-center g-3 step_payload">
            <Col lg={6}>
              <div className="counterBlk d-flex justify-content-between align-items-center">
                <h5 className="d-flex align-items-center mb-0">
                  <i className="bi bi-box me-2" /> Number of Packages
                </h5>
                <div className="counter d-flex align-items-center">
                  <Button
                    variant="outline-light counter_btn"
                    onClick={() =>
                      setPackageCount(Math.max(1, packageCount - 1))
                    }
                  >
                    -
                  </Button>
                  <Form.Control
                    type="text"
                    readOnly
                    value={packageCount}
                    className="mx-2 text-center"
                  />
                  <Button
                    variant="outline-light counter_btn"
                    onClick={() => setPackageCount(packageCount + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </Col>

            <Col xs={12}>
              <label>Passenger #1</label>
            </Col>

            <Col xs={12}>
              <Form.Check className="form-check d-flex align-items-center">
                <Form.Check.Input
                  id="toBeDetermined"
                  type="checkbox"
                  checked={toBeDetermined}
                  onChange={(e) => setToBeDetermined(e.target.checked)}
                />
                <Form.Check.Label
                  htmlFor="toBeDetermined"
                  className="ms-3 mb-0"
                >
                  To Be Determined
                </Form.Check.Label>
              </Form.Check>
            </Col>

            {!toBeDetermined ? (
              <>
                <Col lg={6}>
                  <Form.Control placeholder="Name *" required />
                </Col>
                <Col lg={6}>
                  <Form.Control type="tel" placeholder="+1 Phone" />
                </Col>
                <Col lg={6}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
                <Col lg={6}>
                  <Form.Control
                    type="number"
                    placeholder="# Carry-On Luggage (1–10) *"
                    required
                  />
                </Col>
              </>
            ) : (
              <>
                <Col lg={6}>
                  <Form.Control placeholder="Passenger 1 *" required />
                </Col>
                <Col lg={6}>
                  <Form.Control
                    type="number"
                    placeholder="# Carry-On Luggage (1–10) *"
                    required
                  />
                </Col>
              </>
            )}

            <Col lg={12}>
              <Form.Check
                id="extraLuggage"
                type="checkbox"
                label="Additional Non Carry-On Luggage"
                checked={extraLuggage}
                onChange={(e) => setExtraLuggage(e.target.checked)}
              />
            </Col>

            {extraLuggage && (
              <>
                <Col lg={6}>
                  <Form.Control
                    type="number"
                    placeholder="Total Weight (LB) *"
                    required
                  />
                </Col>
                <Col lg={6}>
                  <Form.Control
                    type="number"
                    placeholder="# of Pieces *"
                    required
                  />
                </Col>
                <Col lg={6}>
                  <Form.Control
                    type="number"
                    placeholder="Total Volume (FT³) *"
                    required
                  />
                </Col>
              </>
            )}
          </Row>
        );

      case 2:
        return (
          <Row className="align-items-center g-3 step_Origins">
            <Col lg={6}>
              <InputGroup>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  placeholderText="Select Date and Time"
                  customInput={
                    <Form.Control
                      type="text"
                      readOnly
                      required
                      placeholder="Select Date and Time"
                    />
                  }
                />
          <InputGroup.Text className="calender_icon">
                  <i className="bi bi-calendar-event" />
                </InputGroup.Text>
              </InputGroup>
            </Col>

            <Col xs={12}>
              <Form.Label>Mode of Travel</Form.Label>
              <div className="hTabs d-flex gap-2 mb-3">
                {["VTOL", "Airplane", "Ground"].map((type, idx) => (
                  <Button
                    key={type}
                    variant={originMode === type ? "light" : "dark"}
                    onClick={() => setOriginMode(type)}
                  >
                    <i
                      className={`bi ${
                        ["bi-helicopter", "bi-airplane", "bi-truck"][idx]
                      } me-2`}
                    ></i>
                    {type}
                  </Button>
                ))}
              </div>
            </Col>

            <Col xs={12}>
              <Form.Label>Origin Location Type</Form.Label>
              <div className="hTabs d-flex gap-2 mb-3">
                {["Vertiport", "GPS", "Address"].map((type) => (
                  <Button
                    key={type}
                    variant={originTab === type ? "light" : "dark"}
                    onClick={() => setOriginTab(type)}
                  >
                    <i
                      className={`bi ${
                        type === "Vertiport"
                          ? "bi-building"
                          : type === "GPS"
                          ? "bi-geo"
                          : "bi-geo-alt"
                      } me-2`}
                    ></i>
                    {type}
                  </Button>
                ))}
              </div>
            </Col>

            {originTab === "Vertiport" && (
              <>
                <Col xs={12}>
                  <Form.Check
                    label="Use Latitude & Longitude"
                    checked={useLatLngVertiport}
                    onChange={(e) => setUseLatLngVertiport(e.target.checked)}
                  />
                </Col>
                <Col lg={6}>
                  <InputGroup>
                    <InputGroup.Text>
                      <i className="bi bi-search" />
                    </InputGroup.Text>
                    <Form.Control
                      type="search"
                      placeholder="Select Verti-Airport"
                    />
                  </InputGroup>
                </Col>
              </>
            )}

            {originTab === "GPS" && (
              <>
                <Col xs={12}>
                  <Form.Check
                    label="Use Latitude & Longitude"
                    checked={useLatLngGPS}
                    onChange={(e) => setUseLatLngGPS(e.target.checked)}
                  />
                </Col>
                <Col lg={6}>
                  <Form.Control type="number" placeholder="Latitude" />
                </Col>
                <Col lg={6}>
                  <Form.Control type="number" placeholder="Longitude" />
                </Col>
              </>
            )}

            {originTab === "Address" && (
              <>
                <Col xs={12}>
                  <Form.Check
                    label="Use Latitude & Longitude"
                    checked={useLatLngAddress}
                    onChange={(e) => setUseLatLngAddress(e.target.checked)}
                  />
                </Col>
                <Col lg={6}>
                  <Form.Control type="text" placeholder="Address 1" />
                </Col>
                <Col lg={6}>
                  <Form.Control type="text" placeholder="Address 2" />
                </Col>
                <Col lg={6}>
                  <Form.Select>
                    <option>Select State</option>
                    <option>California</option>
                    <option>Texas</option>
                  </Form.Select>
                </Col>
                <Col lg={6}>
                  <Form.Control type="text" placeholder="City" />
                </Col>
                <Col lg={6}>
                  <Form.Control type="number" placeholder="Zip" />
                </Col>
              </>
            )}
          </Row>
        );

      case 3:
        return (
          <Row className="align-items-center g-3 step_Stop">
            <Col xs={12}>
              <label>Stop 1</label>
            </Col>

            <Col lg={6} className="outre_cal">
              <InputGroup>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  placeholderText="Select Date and Time"
                  customInput={
                    <Form.Control
                      type="text"
                      readOnly
                      required
                      placeholder="Select Date and Time"
                    />
                  }
                />
                <InputGroup.Text className="calender_icon">
                  <i className="bi bi-calendar-event" />
                </InputGroup.Text>
              </InputGroup>
            </Col>

            <Col xs={12}>
              <Form.Label>Mode of Travel</Form.Label>
              <div className="hTabs d-flex gap-2 mb-3">
                {["VTOL", "Airplane", "Ground"].map((type, idx) => (
                  <Button
                    key={type}
                    variant={travelMode === type ? "light" : "dark"}
                    onClick={() => setTravelMode(type)}
                  >
                    <i
                      className={`bi ${
                        ["bi-helicopter", "bi-airplane", "bi-truck"][idx]
                      } me-2`}
                    ></i>
                    {type}
                  </Button>
                ))}
              </div>
            </Col>

            <Col xs={12} className="mt-3">
              <Form.Label>Location Type</Form.Label>
              <div className="hTabs d-flex gap-2 mb-3">
                {["Vertiport", "GPS", "Address"].map((type) => (
                  <Button
                    key={type}
                    variant={locationType === type ? "light" : "dark"}
                    onClick={() => setLocationType(type)}
                  >
                    <i
                      className={`bi ${
                        type === "Vertiport"
                          ? "bi-building"
                          : type === "GPS"
                          ? "bi-geo"
                          : "bi-geo-alt"
                      } me-2`}
                    ></i>
                    {type}
                  </Button>
                ))}
              </div>
            </Col>

            {locationType === "Vertiport" && (
              <>
                <Col xs={12}>
                  <Form.Check
                    label="Use Latitude & Longitude"
                    checked={useLatLng}
                    onChange={(e) => setUseLatLng(e.target.checked)}
                  />
                </Col>
                <Col lg={6}>
                  <div className="position-relative">
                    <Form.Control
                      type="search"
                      placeholder="Select Verti-Airport"
                    />
                    <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3" />
                  </div>
                </Col>
              </>
            )}

            {locationType === "GPS" && (
              <>
                <Col xs={12}>
                  <Form.Check
                    label="Use Latitude & Longitude"
                    checked={useLatLng}
                    onChange={(e) => setUseLatLng(e.target.checked)}
                  />
                </Col>
                <Col lg={6}>
                  <div className="position-relative">
                    <Form.Control type="number" placeholder="Latitude" />
                    <i className="bi bi-geo position-absolute top-50 end-0 translate-middle-y me-3" />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="position-relative">
                    <Form.Control type="number" placeholder="Longitude" />
                    <i className="bi bi-geo-fill position-absolute top-50 end-0 translate-middle-y me-3" />
                  </div>
                </Col>
              </>
            )}

            {locationType === "Address" && (
              <>
                <Col xs={12}>
                  <Form.Check
                    label="Use Latitude & Longitude"
                    checked={useLatLng}
                    onChange={(e) => setUseLatLng(e.target.checked)}
                  />
                </Col>
                <Col lg={6}>
                  <div className="position-relative">
                    <Form.Control type="text" placeholder="Address 1" />
                    <i className="bi bi-house position-absolute top-50 end-0 translate-middle-y me-3" />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="position-relative">
                    <Form.Control type="text" placeholder="Address 2" />
                    <i className="bi bi-house-door position-absolute top-50 end-0 translate-middle-y me-3" />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="position-relative">
                    <Form.Select>
                      <option>State</option>
                      <option value="1">California</option>
                      <option value="2">Texas</option>
                      <option value="3">New York</option>
                    </Form.Select>
                    <i className="bi bi-caret-down-fill position-absolute top-50 end-0 translate-middle-y me-3" />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="position-relative">
                    <Form.Control type="text" placeholder="City" />
                    <i className="bi bi-building position-absolute top-50 end-0 translate-middle-y me-3" />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="position-relative">
                    <Form.Control type="number" placeholder="Zip" />
                    <i className="bi bi-mailbox position-absolute top-50 end-0 translate-middle-y me-3" />
                  </div>
                </Col>
              </>
            )}

            <Col xs={12}>
              <hr />
              <Form.Check
                label="Pick-up"
                checked={showPickup}
                onChange={(e) => setShowPickup(e.target.checked)}
              />
            </Col>

            {showPickup && (
              <Col xs={12}>
                <div className="p-3 rounded shadow-sm mb-3 whiteBox">
                  <Row className="align-items-center">
                    <Col lg={6}>
                      <div className="counterBlk d-flex justify-content-between align-items-center">
                        <h5 className="d-flex align-items-center mb-0">
                          <i className="bi bi-box me-2" /> Number of Packages
                        </h5>
                        <div className="counter d-flex align-items-center">
                          <Button
                            variant="outline-light counter_btn"
                            onClick={() =>
                              setPackageCount(Math.max(1, packageCount - 1))
                            }
                          >
                            -
                          </Button>
                          <Form.Control
                            type="text"
                            readOnly
                            value={packageCount}
                            className="mx-2 text-center"
                          />
                          <Button
                            variant="outline-light counter_btn"
                            onClick={() => setPackageCount(packageCount + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} className="mt-4">
                      <label>Passenger #1</label>
                    </Col>

                    <Col xs={12} className="mt-2">
                      <Form.Check
                        label="To Be Determined"
                        checked={tobeDetermined}
                        onChange={(e) => setTobeDetermined(e.target.checked)}
                      />
                    </Col>

                    {!tobeDetermined ? (
                      <Col xs={12}>
                        <Row>
                          <Col lg={6}>
                            <div className="position-relative mb-3">
                              <Form.Control type="text" placeholder="Name" />
                              <i className="bi bi-person position-absolute top-50 translate-middle-y me-3" />
                              <i
                                className="bi bi-asterisk position-absolute top-50  translate-middle-y text-danger"
                                style={{ right: "1rem" }}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="position-relative mb-3">
                              <Form.Control type="tel" placeholder="+1 Phone" />
                              <i className="bi bi-telephone position-absolute top-50 translate-middle-y me-3" />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="position-relative mb-3">
                              <Form.Control type="email" placeholder="Email" />
                              <i className="bi bi-envelope position-absolute top-50 translate-middle-y me-3" />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="position-relative mb-3">
                              <Form.Control
                                type="number"
                                placeholder="# Carry-On Luggage (1-10)"
                              />
                              <i className="bi bi-briefcase position-absolute top-50 translate-middle-y me-3" />
                              <i
                                className="bi bi-asterisk position-absolute top-50 end-0 translate-middle-y text-danger"
                                style={{ right: "2rem" }}
                              />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    ) : (
                      <Col xs={12}>
                        <Row>
                          <Col lg={6}>
                            <div className="position-relative mb-3">
                              <Form.Control
                                type="text"
                                placeholder="Passenger 1"
                              />
                              <i className="bi bi-person position-absolute top-50 end-0 translate-middle-y me-3" />
                              <i
                                className="bi bi-asterisk position-absolute top-50 end-0 translate-middle-y text-danger"
                                style={{ right: "2rem" }}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="position-relative mb-3">
                              <Form.Control
                                type="number"
                                placeholder="# Carry-On Luggage (1-10)"
                              />
                              <i className="bi bi-briefcase position-absolute top-50 end-0 translate-middle-y me-3" />
                              <i
                                className="bi bi-asterisk position-absolute top-50 end-0 translate-middle-y text-danger"
                                style={{ right: "2rem" }}
                              />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    )}

                    <Col lg={6}>
                      <Form.Check
                        label="Additional Non Carry-On Luggage"
                        checked={additionalLuggage}
                        onChange={(e) => setAdditionalLuggage(e.target.checked)}
                      />
                    </Col>

                    {additionalLuggage && (
                      <Col xs={12}>
                        <Row className="mt-3">
                          <Col lg={6}>
                            <div className="position-relative mb-3">
                              <Form.Control
                                type="number"
                                placeholder="Total Weight (LB)"
                              />
                              <i className="bi bi-briefcase position-absolute top-50 translate-middle-y me-3" />
                              <i
                                className="bi bi-asterisk position-absolute top-50 translate-middle-y text-danger"
                                style={{ right: "2rem" }}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="position-relative mb-3">
                              <Form.Control
                                type="number"
                                placeholder="# of Pieces"
                              />
                              <i className="bi bi-briefcase position-absolute top-50 translate-middle-y me-3" />
                              <i
                                className="bi bi-asterisk position-absolute top-50 translate-middle-y text-danger"
                                style={{ right: "1rem" }}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="position-relative mb-3">
                              <Form.Control
                                type="number"
                                placeholder="Total Volume (FT3)"
                              />
                              <i className="bi bi-briefcase position-absolute top-50 translate-middle-y me-3" />
                              <i
                                className="bi bi-asterisk position-absolute top-50 end-0 translate-middle-y text-danger"
                                style={{ right: "1rem" }}
                              />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    )}
                  </Row>
                </div>
              </Col>
            )}

            <Col xs={12}>
              <hr />
              <Form.Check
                label="Drop-Off"
                checked={showDropOff}
                onChange={(e) => setShowDropOff(e.target.checked)}
              />
            </Col>

            {showDropOff && (
              <Col xs={12}>
                <div className="position-relative mt-3">
                  <Form.Select>
                    <option>Choose DropOff Passengers</option>
                    <option value="1">Passenger 1</option>
                    <option value="2">Passenger 2</option>
                    <option value="3">Passenger 3</option>
                  </Form.Select>
                  <i className="bi bi-person position-absolute top-50 end-0 translate-middle-y me-3" />
                  <i className="bi bi-caret-down-fill position-absolute top-50 end-0 translate-middle-y me-3" />
                </div>
              </Col>
            )}
          </Row>
        );

      // case 4:
      //   return (
      //     <Row className="align-items-center">
      //       <Col xs={12}>
      //         <Form.Label>Destination Location Details</Form.Label>
      //       </Col>

      //       <Col lg={6}>
      //       <div className="position-relative">
      //         <DatePicker
      //           selected={selectedDate}
      //           onChange={(date) => setSelectedDate(date)}
      //           showTimeSelect
      //           dateFormat="Pp"
      //           placeholderText="Select Date and Time"
      //           customInput={
      //             <Form.Control
      //               type="text"
      //               readOnly
      //               placeholder="Select Date and Time"
      //             />
      //           }
      //         />
      //         <i className="bi bi-calendar3 position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
      //         <i className="bi bi-asterisk position-absolute top-50 end-0 translate-middle-y text-danger" style={{ right: '2rem' }} />
      //       </div>
      //     </Col>

      //       <Col xs={12} className="mt-3">
      //         <Tab.Container defaultActiveKey="Destination_VTOL">
      //           <Nav variant="tabs">
      //             <Nav.Item>
      //               <Nav.Link eventKey="Destination_VTOL">
      //                 {/* <GeoAlt className="me-2" /> VTOL */}
      //               </Nav.Link>
      //             </Nav.Item>
      //             <Nav.Item>
      //               <Nav.Link eventKey="Destination_Airplane">
      //                 {/* <Airplane className="me-2" /> Airplane */}
      //               </Nav.Link>
      //             </Nav.Item>
      //             <Nav.Item>
      //               <Nav.Link eventKey="Destination_Ground">
      //                 {/* <CarFront className="me-2" /> Ground */}
      //               </Nav.Link>
      //             </Nav.Item>
      //           </Nav>

      //           <Tab.Content className="mt-3">
      //             <Tab.Pane eventKey="Destination_VTOL">VTOL Content</Tab.Pane>
      //             <Tab.Pane eventKey="Destination_Airplane">Airplane Content</Tab.Pane>
      //             <Tab.Pane eventKey="Destination_Ground">Ground Content</Tab.Pane>
      //           </Tab.Content>
      //         </Tab.Container>
      //       </Col>

      //       <Col xs={12} className="mt-4">
      //         <Tab.Container defaultActiveKey="Destination_Vertiport">
      //           <Nav variant="tabs">
      //             <Nav.Item>
      //               <Nav.Link eventKey="Destination_Vertiport">
      //                 {/* <Map className="me-2" /> Vertiport */}
      //               </Nav.Link>
      //             </Nav.Item>
      //             <Nav.Item>
      //               <Nav.Link eventKey="Destination_GPS">
      //                 {/* <PinMap className="me-2" /> GPS */}
      //               </Nav.Link>
      //             </Nav.Item>
      //             <Nav.Item>
      //               <Nav.Link eventKey="Destination_Address">
      //                 {/* <HouseDoor className="me-2" /> Address */}
      //               </Nav.Link>
      //             </Nav.Item>
      //           </Nav>

      //           <Tab.Content className="mt-3">
      //             <Tab.Pane eventKey="Destination_Vertiport">
      //               <Form.Group className="form-check mb-3">
      //                 <Form.Check type="checkbox" label="Use Latitude & Longitude" id="c21" />
      //               </Form.Group>
      //               <Form.Group>
      //                 <Form.Control type="search" placeholder="Select Verti-Airport" />
      //               </Form.Group>
      //             </Tab.Pane>

      //             <Tab.Pane eventKey="Destination_GPS">
      //               <Form.Group className="form-check mb-3">
      //                 <Form.Check type="checkbox" label="Use Latitude & Longitude" id="c22" />
      //               </Form.Group>
      //               <Form.Group>
      //                 <Form.Control type="number" placeholder="Latitude" />
      //               </Form.Group>
      //               <Form.Group>
      //                 <Form.Control type="number" placeholder="Longitude" />
      //               </Form.Group>
      //             </Tab.Pane>

      //             <Tab.Pane eventKey="Destination_Address">
      //               <Form.Group className="form-check mb-3">
      //                 <Form.Check type="checkbox" label="Use Latitude & Longitude" id="c23" />
      //               </Form.Group>
      //               <Form.Group>
      //                 <Form.Control type="text" placeholder="Address 1" />
      //               </Form.Group>
      //               <Form.Group>
      //                 <Form.Control type="text" placeholder="Address 2" />
      //               </Form.Group>
      //               <Form.Group>
      //                 <Form.Select>
      //                   <option>Select State</option>
      //                   <option>State 1</option>
      //                   <option>State 2</option>
      //                   <option>State 3</option>
      //                 </Form.Select>
      //               </Form.Group>
      //               <Form.Group>
      //                 <Form.Control type="text" placeholder="City" />
      //               </Form.Group>
      //               <Form.Group>
      //                 <Form.Control type="number" placeholder="Zip" />
      //               </Form.Group>
      //             </Tab.Pane>
      //           </Tab.Content>
      //         </Tab.Container>
      //       </Col>
      //     </Row>
      //   );

      case 4:
        return (
          <Row className="align-items-center g-3 step_Destination">
            <Col xs={12}>
              <Form.Label>Destination Location Details</Form.Label>
            </Col>

            {/* Date & Time Picker */}
            <Col lg={6}>
              <InputGroup>
                <DatePicker
                  selected={destinationSelectedDate}
                  onChange={(date) => setDestinationSelectedDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  placeholderText="Select Date and Time"
                  customInput={
                    <Form.Control
                      type="text"
                      readOnly
                      placeholder="Select Date and Time"
                    />
                  }
                />
                <InputGroup.Text className="calender_icon">
                  <i className="bi bi-calendar-event" />
                </InputGroup.Text>
              </InputGroup>
            </Col>

            {/* Mode of Travel */}
            <Col xs={12}>
              <Form.Label>Mode of Travel</Form.Label>
              <div className="hTabs d-flex gap-2 mb-3">
                {["VTOL", "Airplane", "Ground"].map((type, idx) => (
                  <Button
                    key={type}
                    variant={destinationMode === type ? "light" : "dark"}
                    onClick={() => setDestinationMode(type)}
                  >
                    <i
                      className={`bi ${
                        ["bi-helicopter", "bi-airplane", "bi-truck"][idx]
                      } me-2`}
                    ></i>
                    {type}
                  </Button>
                ))}
              </div>
            </Col>

            {/* Location Type */}
            <Col xs={12}>
              <Form.Label>Destination Location Type</Form.Label>
              <div className="hTabs d-flex gap-2 mb-3">
                {["Vertiport", "GPS", "Address"].map((type) => (
                  <Button
                    key={type}
                    variant={destinationTab === type ? "light" : "dark"}
                    onClick={() => setDestinationTab(type)}
                  >
                    <i
                      className={`bi ${
                        type === "Vertiport"
                          ? "bi-building"
                          : type === "GPS"
                          ? "bi-geo"
                          : "bi-geo-alt"
                      } me-2`}
                    ></i>
                    {type}
                  </Button>
                ))}
              </div>
            </Col>

            {/* Location Type Forms */}
            {destinationTab === "Vertiport" && (
              <>
                <Col xs={12}>
                  <Form.Check
                    label="Use Latitude & Longitude"
                    id="destination-c21"
                    checked={useLatLngVertiportDest}
                    onChange={(e) =>
                      setUseLatLngVertiportDest(e.target.checked)
                    }
                  />
                </Col>
                <Col lg={6}>
                  <InputGroup>
                    <InputGroup.Text>
                      <i className="bi bi-search" />
                    </InputGroup.Text>
                    <Form.Control
                      type="search"
                      placeholder="Select Verti-Airport"
                    />
                  </InputGroup>
                </Col>
              </>
            )}

            {destinationTab === "GPS" && (
              <>
                <Col xs={12}>
                  <Form.Check
                    label="Use Latitude & Longitude"
                    id="destination-c22"
                    checked={useLatLngGPSDest}
                    onChange={(e) => setUseLatLngGPSDest(e.target.checked)}
                  />
                </Col>
                <Col lg={6}>
                  <Form.Control type="number" placeholder="Latitude" />
                </Col>
                <Col lg={6}>
                  <Form.Control type="number" placeholder="Longitude" />
                </Col>
              </>
            )}

            {destinationTab === "Address" && (
              <>
                <Col xs={12}>
                  <Form.Check
                    label="Use Latitude & Longitude"
                    id="destination-c23"
                    checked={useLatLngAddressDest}
                    onChange={(e) => setUseLatLngAddressDest(e.target.checked)}
                  />
                </Col>
                <Col lg={6}>
                  <Form.Control type="text" placeholder="Address 1" />
                </Col>
                <Col lg={6}>
                  <Form.Control type="text" placeholder="Address 2" />
                </Col>
                <Col lg={6}>
                  <Form.Select>
                    <option>Select State</option>
                    <option>California</option>
                    <option>Texas</option>
                  </Form.Select>
                </Col>
                <Col lg={6}>
                  <Form.Control type="text" placeholder="City" />
                </Col>
                <Col lg={6}>
                  <Form.Control type="number" placeholder="Zip" />
                </Col>
              </>
            )}
          </Row>
        );

      default:
        return null;
    }
  };


  return (
  <>
    <Header />

    <section className="Hero MyFlightPlan_Sec position-relative">

      <Container>
        <div className="teXt text-center mb-4">
          <h2>My Flight Plan</h2>
        </div>

        <div className="borderBox">
          <div className="formBox">
            {/* Steps Navigation */}
            {/* <div className="flightPlan_Steps d-flex flex-wrap justify-content-center mb-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step ${index === currentStep ? "active" : ""}`}
                  onClick={() => setCurrentStep(index)}
                  style={{ cursor: "pointer" }}
                >
                  <i className={`bi ${step.icon} fs-4`}></i>
                  <p className="mb-0">{step.label}</p>
                </div>
              ))}
            </div> */}
          <div className="flightPlan_Steps d-flex justify-content-center align-items-center">
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;

              return (
                <div
                  key={index}
                  className={`stepItem ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="stepNumber">
                    {isCompleted ? (
                      <i className="bi bi-check2-circle"></i>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className="stepLabel">{step.label}</div>
                </div>
              );
            })}
          </div>

            {/* Form Content */}
            <Form>
              {renderStepContent()}

              {/* Buttons */}
              <div className="d-flex justify-content-between mt-4">
                <Button
                  variant="secondary"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                >
                  Back
                </Button>
                <Button 
                variant="primary" 
                onClick={nextStep} 
                className="nextStepBtn"
              >
                {currentStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </section>

    <Footer />
  </>
);
}
export default MyFlightPlan;
