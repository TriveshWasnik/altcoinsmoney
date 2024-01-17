import React from "react";
import { Link } from "react-router-dom";
import HeroHomeForm from "../HeroHomeForm/HeroHomeForm";

function HeroSectionHome({
  ClassSec = "hero-section app section-padding",
  specialHead = "Welcome to AltCoinsMoney",
  title = "An AI and Blockchain-Enabled Innovation Platform",
  subtitle = "Bridging the Best of Two Worlds: Blockchain Meets AI",
  link1 = "Whitepaper",
  link2 = "Audit",
}) {
  return (
    <section className={`${ClassSec} hero-home-section`} id="home">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 col-md-12 welcome-content">
            <div className="promo-section">
              <h3 className="special-head dark">{specialHead}</h3>
            </div>
            <h1>{title}</h1>
            <p className="w-text fadeInUp" data-wow-delay="0.3s">
              {subtitle}
            </p>
            <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
              <Link
                to="https://altcoinsmoney.gitbook.io/altcoinsmoney/"
                target="_blank"
                className="btn more-btn mr-3"
              >
                {link1}
              </Link>
              <Link to="#" className="btn more-btn">
                {link2}
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-md-12 ">
            <div style={{ position: "relative", zIndex: "1" }}>
              <HeroHomeForm />
            </div>
          </div>
        </div>
      </div>
      {/*  <div className="hero-home-main">
        <div className="hero-home-left">
          <div className="welcome-content">
            <div className="promo-section">
              <h3 className="special-head dark">{specialHead}</h3>
            </div>
            <h1>{title}</h1>
            <p className="w-text fadeInUp" data-wow-delay="0.3s">
              {subtitle}
            </p>
            <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
              <Link
                to="https://altcoinsmoney.gitbook.io/altcoinsmoney/"
                target="_blank"
                className="btn more-btn mr-3"
              >
                {link1}
              </Link>
              <Link to="#" className="btn more-btn">
                {link2}
              </Link>
            </div>
          </div>
        </div>
        <div style={{ zIndex: "1" }}>
          <HeroHomeForm />
        </div>
  </div> */}
    </section>
  );
}

export default HeroSectionHome;
