const AboutOther = ({
  ClassTitle = "gradient-text ",
  subtext,
  heading = "",
  description = "",
  img = "",
}) => {
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
                <span className={ClassTitle}>{subtext}</span>
              </div>
              <h4
                className={!subtext ? ClassTitle : "fadeInUp"}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {heading}
              </h4>
              <p className="fadeInUp" data-aos="fade-up" data-aos-delay="200">
                {description}
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
            <div className="welcome-meter floating-anim fadeInUp">
              <img draggable="false" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOther;
