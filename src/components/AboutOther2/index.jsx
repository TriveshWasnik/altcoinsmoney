import aboutMission from "../../assets/img/about_mission.png";

const AboutOther2 = ({ ClassTitle = "gradient-text" }) => {
  return (
    <section className="about-us-area section-padding-0-100 clearfix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 offset-lg-0">
            <div className="who-we-contant">
              <div
                className="dream-dots text-left fadeInUp"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2>
                  <span className={ClassTitle}>Our Mission</span>
                </h2>
              </div>
              {/* <h4 className="fadeInUp" data-aos="fade-up" data-aos-delay="200">Our Mission</h4> */}
              <p className="fadeInUp" data-aos="fade-up" data-aos-delay="200">
                Our mission is to create an AI-enhanced decentralized ecosystem
                that acts as a catalyst for individuals, startups, and seasoned
                developers. Here, dreams meet reality.
              </p>
              {/* <p className="fadeInUp" data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam.</p> */}
              {/* <a className="btn more-btn mt-30" href="#">Try Free Now</a> */}
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
            <div className="welcome-meter floating-anim fadeInUp about-mission-img">
              <img draggable="false" src={aboutMission} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOther2;
