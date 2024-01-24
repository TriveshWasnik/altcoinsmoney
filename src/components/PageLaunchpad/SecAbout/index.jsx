const SecAbout = ({ imgDwon = false, title, text, img }) => {
  return (
    <>
      {imgDwon ? (
        <section className="about-us-area section-padding-100 clearfix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 offset-lg-0">
                <div className="who-we-contant mt-s">
                  <div
                    className="dream-dots text-left"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <span className="gradient-text blue">{title}</span>
                  </div>
                  <h4 data-aos="fade-up" data-aos-delay="300">
                    {text}
                  </h4>
                  <p data-aos="fade-up" data-aos-delay="300">
                    Our mission is to create an AI-enhanced decentralized
                    ecosystem that acts as a catalyst for individuals, startups,
                    and seasoned developers. Here, dreams meet reality.
                  </p>
                  {/* <p data-aos="fade-up" data-aos-delay="400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam.</p>
                    <a className="btn more-btn mt-30" href="#">Read More</a> */}
                </div>
              </div>
              <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
                <div
                  className="welcome-meter"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img draggable="false" src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="about-us-area section-padding-100 clearfix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
                <div
                  className="welcome-meter"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img draggable="false" src={img} alt="" />
                </div>
              </div>
              <div className="col-12 col-lg-6 offset-lg-0">
                <div className="who-we-contant mt-s">
                  <div
                    className="dream-dots text-left"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <span className="gradient-text ">
                      Introducing the LaunchPad
                    </span>
                  </div>
                  <h4 data-aos="fade-up" data-aos-delay="300">
                    The Future of Fundraising: Your Bridge to Crypto Success
                  </h4>
                  <p data-aos="fade-up" data-aos-delay="300">
                    In the rapidly evolving landscape of cryptocurrencies and
                    blockchain, our LaunchPad serves as the crucible where
                    innovation meets investment. It's not just a platform, but a
                    symbiotic space that nurtures both startups and investors.
                    From quality assurance to community building, our LaunchPad
                    is designed to be a comprehensive solution for crypto
                    ventures and enthusiasts alike.
                  </p>
                  {/* <p data-aos="fade-up" data-aos-delay="400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam.</p> */}
                  {/* <a className="btn more-btn mt-30" href="#">Read More</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SecAbout;
