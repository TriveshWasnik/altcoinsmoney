import Contract from "./Contract"
import SectionHeading from "./SectionHeading"

const SmartContract = ({SmartContractTop , SmartContractDown, data, ClassSpanTitle}) => {

    return (

      <section className="smart-contract section-padding-0-70 mt-5 clearfix">
        <div className="container">
        <SectionHeading
            title="Benefits Of Our Launchpad"
            text=""
            ClassSpanTitle={ClassSpanTitle}
          />  
          <div className="row ">
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                {/* <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                  <span className="gradient-text blue">Benefits Of Our LaunchPad</span>
                </div> */}
                <h4 className="fadeInUp" data-wow-delay="0.3s">For Investors</h4>
                <p className="fadeInUp" data-wow-delay="0.4s">Our launchpad offers secure, AI-enhanced investing with high growth potential in the evolving crypto space .</p>
                {/* <p className="fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam.</p>
                <a className="btn more-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a> */}
              </div>
            </div>

            {/* <div className="row align-items-center"> */}
            {/* <div className="col-lg-6 col-sm-12 offset-lg-0 mt-s">
              {data && data.map((item , key) => (
                  <Contract
                    key={key}
                    img={item.img}
                    title={item.title}
                    subtitle={item.subtitle}
                    text={item.text}
                  />
              ))}
            </div> */}
            
            {/* <div className="col-lg-6 col-md-6 col-sm-12 mt-md-30 mt-sm-0">
              {data && data.map((item , key) => (
                  <Contract
                    key={key}
                    img={item.img}
                    title={item.title}
                    subtitle={item.subtitle}
                    text={item.text}
                  />
              ))}
            </div> */}
             <div className="col-12 col-lg-6 offset-lg-0 mt-s">
              {data && data.map((item , key) => (
                <Contract
                  key={key}
                  img={item.img}
                  title={item.title}
                  text1={item.text1}
                  text2={item.text2}
                  text3={item.text3}
                  // text2={item.text2}
                />
              ))}
            </div>
          {/* </div>  */}

           
          </div>
        </div>
      </section>
    );

}

export default SmartContract;