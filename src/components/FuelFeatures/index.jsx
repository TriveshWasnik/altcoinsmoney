import {HomeDemo2Feature1 , HomeDemo2SmallCar} from '../../utils/allImgs'

const FuelFeatures = () => {

    return (

      <section className="special fuel-features section-padding-100 clearfix">
        <div className="container has-shadow">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
              <div className="welcome-meter mb-30">
                <img draggable="false" src={HomeDemo2Feature1} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div className="dream-dots text-left">
                  <span className="gradient-text blue">Unveiling Crypto Fundraising :</span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">AltcoinsMoney LaunchPad</h4>
                <p className="fadeInUp" data-wow-delay="0.4s">Our LaunchPad revolutionizes how startups and investors interact, serving as the critical bridge between innovative blockchain ventures and discerning cryptocurrency enthusiasts. From stringent quality assurance to efficient investment mechanisms for investors, and from early-stage funding to community building for startups, our platform offers a holistic solution that streamlines the journey into the crypto universe.</p>
                {/* <div className="services-block-four align-items-center">
                  <div className="inner-box">
                    <div className="icon-img-box">
                      <img draggable="false" src={HomeDemo2SmallCar} alt="" width={140} />
                    </div>
                    <h3><a href="#">great customer experience</a></h3>
                    <div className="text">Lorem ipsum dolor sit amet, adipisicing elit. Laudantium modi assumenda beatae.</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default FuelFeatures;