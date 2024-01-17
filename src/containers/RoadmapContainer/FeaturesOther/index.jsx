import Counter from "./Counter"
import ServicesBlock from "./ServicesBlock"

import SectionHeading from "../FeaturesOther/SectionHeading"

const FeaturesOther = ({
      icoCounterClass,
      Features2InfoTop,
      Features2InfoDown,
      addOther=false,
      FeaturesOtherTop,
      FeaturesOtherDown,
      ClassSpanTitle
    }) => {

    return (

      <div className="features2 section-padding-100-70">
        <div className="container ">
          <SectionHeading
            title="ICO Roadmap"
            text="AltCoinsMoney Roadmap : 2.5 Years Overview"
            ClassSpanTitle={ClassSpanTitle}
          />
          {/* <div className="who-we-contant text-center">
            <div className="dream-dots fadeInUp" data-wow-delay="0.2s">
              <span className="gradient-text blue ">ISO Roadmap</span>
            </div>
            <h4 className="fadeInUp" data-wow-delay="0.3s">AltCoinsMoney Roadmap : 2.5 Years Overview</h4> 
          </div>  */}
          <br/> <br/>
          <div className="row align-items-center">
            {/* <Counter
              icoCounterClass={icoCounterClass}
            /> */}
            {addOther ? (
                <div className="col-12 col-xl-12 ">
                  <div className="col-xl-6 col-sm-6">
                    <div className="who-we-contant mt-s">
                      <ul className="token-information">
                        {FeaturesOtherTop && FeaturesOtherTop.map((item , key) => (
                          <li key={key}>
                            <span className={item.Steps} />
                            <h6>{item.title}</h6>
                            <p className={`${item.addMargin0 && "mb-0"}`} >{item.text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-6">
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
                  </div>
                </div>
            ):(
                <div className="col-12 col-lg-12 col-sm-12">
                  <div className="col-lg-12 col-md-6 col-sm-12 mt-md-30">
                    {Features2InfoTop && Features2InfoTop.map((item , key) => (
                        <ServicesBlock
                          key={key}
                          img={item.img}
                          title={item.title}
                          text={item.text}
                        />
                    ))}
                  </div>
                  <div className="col-lg-12 col-md-6 col-sm-12 mt-md-30 ">

                    {Features2InfoDown && Features2InfoDown.map((item , key) => (
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


}

export default FeaturesOther