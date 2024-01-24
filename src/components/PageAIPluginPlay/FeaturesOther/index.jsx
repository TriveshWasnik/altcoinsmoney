import ServicesBlock from "./ServicesBlock";

import SectionHeading from "../FeaturesOther/SectionHeading";
import image0 from "../../../assets/img/icon-aiplugin/backward-compatibility.png";
import image1 from "../../../assets/img/icon-aiplugin/view.png";
import image2 from "../../../assets/img/icon-aiplugin/resources-management.png";
import image3 from "../../../assets/img/icon-aiplugin/network.png";
import image4 from "../../../assets/img/icon-aiplugin/help-desk.png";

import image5 from "../../../assets/img/icon-aiplugin/3d-cube.png";
import image6 from "../../../assets/img/icon-aiplugin/synergy.png";
import image7 from "../../../assets/img/icon-aiplugin/explore.png";
import image8 from "../../../assets/img/icon-aiplugin/shop-assistant.png";
import image9 from "../../../assets/img/icon-aiplugin/business.png";

const FeaturesOther = ({
  Features2InfoTop,
  Features2InfoDown,
  addOther = false,
  FeaturesOtherTop,
  FeaturesOtherDown,
  ClassSpanTitle,
}) => {
  let images1 = [image0, image1, image2, image3, image4];
  let images2 = [image5, image6, image7, image8, image9];
  return (
    <div className="features2 section-padding-100-70">
      <div className="container ">
        <SectionHeading
          title="Features"
          text="Our Core Features"
          ClassSpanTitle={ClassSpanTitle}
        />
        {/* <div className="who-we-contant text-center">
            <div className="dream-dots fadeInUp" data-wow-delay="0.2s">
              <span className="gradient-text blue ">ISO Roadmap</span>
            </div>
            <h4 className="fadeInUp" data-wow-delay="0.3s">AltCoinsMoney Roadmap : 2.5 Years Overview</h4> 
          </div>  */}
        <br /> <br />
        <div className="row align-items-center">
          {/* <Counter
              icoCounterClass={icoCounterClass}
            /> */}
          {addOther ? (
            <div className="col-12 col-xl-12 ">
              <div className="col-xl-6 col-sm-6">
                <div className="who-we-contant mt-s">
                  <ul className="token-information ">
                    {FeaturesOtherTop &&
                      FeaturesOtherTop.map((item, key) => (
                        <li key={key} className="feature-other-container">
                          <div className="img-container">
                            <img alt={item.title} src={`${images1[key]}`} />
                          </div>
                          <div className="text-content">
                            <h6>{item.title}</h6>
                            <p className={`${item.addMargin0 && "mb-0"}`}>
                              {item.text}
                            </p>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-sm-6">
                <div className="who-we-contant mt-s">
                  <ul className="token-information">
                    {FeaturesOtherDown &&
                      FeaturesOtherDown.map((item, key) => (
                        <li key={key} className="feature-other-container">
                          <div className="img-container">
                            <img alt={item.title} src={`${images2[key]}`} />
                          </div>
                          <div className="text-content">
                            <h6>{item.title}</h6>
                            <p className={`${item.addMargin0 && "mb-0"}`}>
                              {item.text}
                            </p>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-12 col-lg-12 col-sm-12">
              <div className="col-lg-12 col-md-6 col-sm-12 mt-md-30">
                {Features2InfoTop &&
                  Features2InfoTop.map((item, key) => (
                    <ServicesBlock
                      key={key}
                      img={item.img}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12 mt-md-30 ">
                {Features2InfoDown &&
                  Features2InfoDown.map((item, key) => (
                    <ServicesBlock
                      key={key}
                      img={item.img}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturesOther;
