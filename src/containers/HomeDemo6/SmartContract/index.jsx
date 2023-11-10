import Contract from "./Contract"

const SmartContract = ({SmartContractTop , SmartContractDown, data}) => {

    return (

      <section className="smart-contract section-padding-0-70 mt-5 clearfix">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                  <h2><span className="gradient-text ">Harnessing Expertise for Amplified Returns</span></h2>
                </div>
                {/* <h4 className="fadeInUp" data-wow-delay="0.3s">Harnessing Expertise for Amplified Returns</h4> */}
                <p className="fadeInUp" data-wow-delay="0.4s">Harness the collective wisdom of seasoned traders and benefit from their strategies without spending years gaining the same expertise.</p>
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
                  text={item.text}
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