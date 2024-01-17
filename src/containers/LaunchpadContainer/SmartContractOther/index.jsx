import Contract from "./Contract"

const SmartContractOther = ({SmartContractTop , SmartContractDown, data}) => {

    return (

      <section className="smart-contract-other section-padding-0-70 mt-5 clearfix">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                {/* <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                  <span className="gradient-text blue">Why Choose Our LaunchPad?</span>
                </div> */}
                <h4 className="fadeInUp" data-wow-delay="0.3s">For Startups</h4>
                <p className="fadeInUp" data-wow-delay="0.4s">Our launchpad propels startups with AI insights and blockchain security and initial social offering (ISO), accelerating your journey from concept to market leader.</p>
                {/* <p className="fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam.</p>
                <a className="btn more-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a> */}
              </div>
            </div>

            {/* <div className="row align-items-center"> */}
            
             <div className="col-12 col-lg-6 offset-lg-0 mt-s">
              {data && data.map((item , key) => (
                <Contract
                  key={key}
                  img={item.img}
                  title={item.title}
                  text={item.text}
                  
                />
              ))}
            </div>
          {/* </div>  */}

           
          </div>
        </div>
      </section>
    );

}

export default SmartContractOther;