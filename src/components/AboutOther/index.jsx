import {
  HomeDemo1Computer
} from '../../utils/allImgs'

const AboutOther = ({ClassTitle="gradient-text "}) => {

  return (

    <section className="about-us-area section-padding-0-100 clearfix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 offset-lg-0">
            <div className="who-we-contant">
              <div className="dream-dots text-left fadeInUp" data-aos="fade-up" data-aos-delay="200">
                <span className={ClassTitle}>About The Platform</span>
              </div>
              <h4 className="fadeInUp" data-aos="fade-up" data-aos-delay="200">At The  Core of AltCoinsMoney</h4>
              <p className="fadeInUp" data-aos="fade-up" data-aos-delay="200">At its core, our platform harnesses blockchain technology aiming to redefine the decentralized finance (DeFi) arena. Integrating predictive AI, automated trading, and robust investor fund safeguards, we are shifting paradigms in how you experience cryptocurrencies.</p>
              {/* <p className="fadeInUp" data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam.</p> */}
              {/* <a className="btn more-btn mt-30" href="#">Try Free Now</a> */}
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
            <div className="welcome-meter floating-anim fadeInUp">
              <img draggable="false" src={HomeDemo1Computer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutOther;