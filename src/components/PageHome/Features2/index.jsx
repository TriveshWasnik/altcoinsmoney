import ServicesBlock from "./ServicesBlock";
import homeFeature2 from "../../../assets/img/home_feature2.png";

const Features2 = ({
  icoCounterClass,
  Features2InfoTop,
  Features2InfoDown,
  addOther = false,
  FeaturesOtherTop,
  FeaturesOtherDown,
}) => {
  return (
    <div className="features2 section-padding-100-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
            <div className="home-feature-container">
              <img src={homeFeature2} alt="" />
            </div>
          </div>
          {/*<Counter icoCounterClass={icoCounterClass} />*/}
          {addOther ? (
            <div className="col-12 col-lg-7 col-sm-12">
              <div className="col-md-6 col-sm-6">
                <div className="who-we-contant mt-s">
                  <ul className="token-information">
                    {FeaturesOtherTop &&
                      FeaturesOtherTop.map((item, key) => (
                        <li key={key}>
                          <span className={item.Steps} />
                          <h6>{item.title}</h6>
                          <p className={`${item.addMargin0 && "mb-0"}`}>
                            {item.text}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="who-we-contant mt-s">
                  <ul className="token-information">
                    {FeaturesOtherDown &&
                      FeaturesOtherDown.map((item, key) => (
                        <li key={key}>
                          <span className={item.Steps} />
                          <h6>{item.title}</h6>
                          <p className={`${item.addMargin0 && "mb-0"}`}>
                            {item.text}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-12 col-lg-7 col-sm-12">
              <div className="col-lg-6 col-md-6 col-sm-12 mt-md-30">
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
              <div className="col-lg-6 col-md-6 col-sm-12 mt-md-30 mt-smy-0">
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

export default Features2;
