import React from "react";
import { Link } from "react-router-dom";
import HeroHomeForm from "../HeroHomeForm/HeroHomeForm";

function HeroSectionHome({
  ClassSec = "",
  specialHead = "",
  title = "",
  subtitle = "",
  link1 = "",
  link2 = "",
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
            {link1 !== "" && link2 !== "" ? (
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
            ) : (
              <></>
            )}
          </div>
          <div className="col-12 col-lg-5 col-md-12 ">
            <div style={{ position: "relative", zIndex: "1" }}>
              <HeroHomeForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionHome;
