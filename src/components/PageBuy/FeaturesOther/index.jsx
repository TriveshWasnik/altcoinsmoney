import Counter from "./Counter";
import ServicesBlock from "./ServicesBlock";

import SectionHeading from "./SectionHeading";

import image0 from "../../../assets/img/1cryptocurrencies.png";
import image1 from "../../../assets/img/2buy.png";
import image2 from "../../../assets/img/3gross.png";
import image3 from "../../../assets/img/4funds.png";
import image4 from "../../../assets/img/5budgeting.png";

const FeaturesOther = ({
  icoCounterClass,
  Features2InfoTop,
  Features2InfoDown,
  addOther = false,
  FeaturesOtherTop,
  FeaturesOtherDown,
  ClassSpanTitle,
}) => {
  let images = [image0, image1, image2, image3, image4];
  return (
    <div className="features2 section-padding-100-70">
      <div className="container">
        <SectionHeading
          title="Before You Begin"
          text=""
          ClassSpanTitle={ClassSpanTitle}
        />
        {/* <div className="row align-items-center"> */}
        {/* <Counter
              icoCounterClass={icoCounterClass}
            /> */}
        {addOther ? (
          <div className="row align-items-center">
            {/* <div className="col-xl-6 col-sm-6"> */}
            <div className="who-we-contant mt-s">
              <ul className="token-information">
                {FeaturesOtherTop &&
                  FeaturesOtherTop.map((item, key) => (
                    <li key={key} className="feature-other-container">
                      <div className="img-container">
                        <img alt="step 1" src={`${images[key]}`} />
                      </div>
                      {
                        //<span className={item.Steps} />
                      }
                      <div className="text-content">
                        <h5>{item.title}</h5>
                        <p className={`${item.addMargin0 && "mb-0"}`}>
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            {/* </div> */}
            {/* <div className="col-xl-6 col-sm-6">
                    <div className="who-we-contant mt-s">
                      <ul className="token-information">
                        {FeaturesOtherDown && FeaturesOtherDown.map((item , key) => (
                          <li key={key}>
                            <span className={item.Steps} />
                            <h6>{item.title}</h6>
                            <p className={`${item.addMargin0 && "mb-0"}`} >{item.text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div> */}
          </div>
        ) : (
          <div className="row align-items-center">
            {/* <div className="col-lg-12 col-md-6 col-sm-12 mt-md-30"> */}
            {Features2InfoTop &&
              Features2InfoTop.map((item, key) => (
                <ServicesBlock
                  key={key}
                  img={item.img}
                  title={item.title}
                  text={item.text}
                />
              ))}
            {/* </div> */}
            {/* <div className="col-lg-12 col-md-6 col-sm-12 mt-md-30 ">

                    {Features2InfoDown && Features2InfoDown.map((item , key) => (
                        <ServicesBlock
                          key={key}
                          img={item.img}
                          title={item.title}
                          text={item.text}
                        />
                    ))}

                  </div> */}
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default FeaturesOther;
