import Contract from "./Contract"

const SmartContract = ({
    SmartContractinfoRight,
    SmartContractinfoLeft,
    data}) => {

    return (

      <section className="smart-contract section-padding-0-70 mt-5 clearfix">
        <div className="container">
          <div className="row ">
            {/* <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                  <span className="gradient-text blue">Before You Begin</span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">Before You Begin</h4>
                <p className="fadeInUp" data-wow-delay="0.4s">Ensure you have a digital wallet with sufficient USDT funds. If you are new to the world of cryptocurrencies, consider researching and choosing a reputable wallet that supports USDT.</p>
                <p className="fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam.</p>
                <a className="btn more-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
              </div>
            </div> */}

           
            <div className="col-12 col-lg-6 offset-lg-0 mt-s">
              {SmartContractinfoLeft && SmartContractinfoLeft.map((item , key) => (
                <Contract
                  key={key}
                  img={item.img}
                  title={item.title}
                  text={item.text}
                  // text2={item.text2}
                />
              ))}
            </div>
            <div className="col-12 col-lg-6 offset-lg-0 mt-s">
              {SmartContractinfoRight && SmartContractinfoRight.map((item , key) => (
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