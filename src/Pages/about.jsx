import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import '../Assets/css/about.css'; 



const About = () => {
  return (
    <main>
      <Header />

      <section className="Hero aboutUs position-relative">
        {/* <div className="BG">
          <img src="/images/BG-innerPage.jpg" alt="Background" />
        </div> */}

        <Container>
          <div className="teXt text-center">
            <h2>About</h2>
          </div>

          <div className="borderBox">
            <div className="formBox">
              <div className="teXtContent text-light">
                <p>You’ve most likely heard the saying, “Time is Money.” In fact, “Just-in-time” can be lifesaving. “Not in time” can break a business. And, “Better next time” can negatively affect the quality of your life. Bottom line… Time is a precious commodity.</p>

                <p>Ben Franklin once said, “If time be of all things the most precious, then wasting time must be of the greatest extravagance, since lost time is never found again.”<br />
                  <strong>VTOLup</strong> is our commitment to save you time!
                </p>

                <p><strong>VTOLup</strong> links passengers and short-haul freight and parcel movers with a network of operators of “for hire” helicopter, airplane, and transformative Vertical Takeoff & Landing air vehicles (VTOL). For passengers, since getting to and from your selected air vehicle can require commercial ground transportation, we integrate flying and car service bookings to simplify door-to-door passenger connections. For short-haul freight and parcel transport between “docks and doors,” we are integrated with a national network of over 100,000 ground carriers. Whether passengers or freight, VTOLup is the only single ticket, “end-to-end” booking app.</p>

                <p>Our technology solution is borne from our deep experience and expertise in various ground and air transportation enterprises, including the founding of an all-electric VTOL company that was one of Uber Elevate’s original air vehicle partners. This was the start of the Urban Air Mobility movement. These enterprises include having the required certifications, licensing, and authorities as FAA commercial and airline pilots, freight brokers, freight forwarders, and limousine & taxi managers. Our experience further includes founding a ride share service and Non-Emergency Medical Transport (NEMT) provider.</p>

                <p>In the prophetic words of our founder, Kaydon Stanzione, <em>“Time’s not a Dragon and I ain’t a Lion!”</em></p>

                <p>So, with all the time-wasting congestion in our supply chains and passenger transport, isn’t it about time to start saving time? <strong>VTOLup</strong> – It’s your time. Save it.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default About;
