import React from "react";

import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import HeroSlider from "../components/UI/HeroSlider";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";
import CarTypes from "../components/UI/CarTypes";
import MySwiper from "../components/Swiper/MySwiper";

const Home = () => {
  return (
    <Helmet title="About">
     {/* ============= hero section =========== */}
     <span className="p-0 hero__slider-section">
        <HeroSlider />
      </span>
        {/* =============== blog section =========== */}
        <section>
        <Container>
          <Row>
          <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our Car Shop</h6>
              <h2 className="section__title">In Stock</h2>
            </Col>
            <CarTypes />
          </Row>
        </Container>
      </section>
      <AboutSection aboutClass="aboutPage" />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Wealth NoveltyS</h6>
              <h2 className="section__title">Car Models</h2>
            </Col>
            <MySwiper />
          </Row>
        </Container>
      </section>

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Wealth Novelty</h6>
              <h2 className="section__title">Featured Cars</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
