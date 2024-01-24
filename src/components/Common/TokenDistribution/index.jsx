import { HomeDemo2Graph11 } from "../../../utils/allImgs";
import fundAllocationImg from "../../../assets/img/distribution2.png";
import SectionHeading from "../TokenDistribution/SectionHeading";

const TokenDistribution = ({ data, ClassSpanTitle }) => {
  return (
    <section className="token-distribution section-padding-100-85">
      <div className="container">
        <SectionHeading
          title="Distribution"
          text="Tokenomocs"
          ClassSpanTitle={ClassSpanTitle}
        />

        <div className="row align-items-center">
          <div className="col-lg-7 col-sm-12">
            <div>
              <h2
                className="text-center mb-30"
                data-aos="fade-up"
                data-aos-delay="0.3s"
              >
                Funds Allocation
              </h2>
              <img
                draggable="false"
                src={fundAllocationImg}
                className="center-block"
                alt=""
                style={{ width: "600px", height: "580px" }}
              />
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 ">
            <h2
              className="text-center mb-30"
              data-aos="fade-up"
              data-aos-delay="0.3s"
            >
              Token Distribution
            </h2>
            <div className="row">
              <div className="col-sm-12">
                <div>
                  <img
                    draggable="false"
                    src={HomeDemo2Graph11}
                    className="center-block"
                    alt=""
                    style={{ width: "500px", height: "580px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenDistribution;
