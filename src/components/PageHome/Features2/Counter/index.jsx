import { SlideCountdown } from "react-fancy-countdown";
import { Line } from "rc-progress";

const Counter = ({ icoCounterClass }) => {
  return (
    <div className="col-12 col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
      <div className={icoCounterClass}>
        <div className="counter-down">
          <div className="content">
            <div className="conuter-header">
              <h3 className="w-text text-center">TOKEN SALE ENDS IN</h3>
            </div>
            <div className="counterdown-content">
              <div className="count-down titled circled text-center">
                <SlideCountdown weeks={false} deadline="2030-12-31 14:23:22" />
              </div>
              <h5>BUY NOW BEFORE PRICE INCREASES!</h5>
              <div className="ico-progress">
                <ul className="list-unstyled list-inline clearfix mb-10">
                  <li className="title"></li>
                  <li className="strength"></li>
                </ul>
                <div className="current-progress">
                  <Line
                    percent="70"
                    trailWidth="3"
                    strokeWidth="4"
                    strokeColor="#fb881d"
                  />
                </div>
                <span className="pull-left"></span>
                <span className="pull-right"></span>
              </div>
              <p
                style={{ color: "#fff", fontSize: "16px", textAlign: "center" }}
              >
                USDT Raised: {"$465,459.63"} / {"$609,201"}
              </p>
              <p style={{ textAlign: "center", color: "#fff" }}>
                1 $AIM = $0.02575 USDT
              </p>
              <div className="home-form">
                <form>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      gap: "5px",
                      fontSize: "14px",
                      color: "#fff",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>Enter USDT Amount</div>
                        <div>Max</div>
                      </div>
                      <div>
                        <input
                          style={{
                            padding: "7px",
                            backgroundColor: "#eee",
                            outline: "none",
                            border: "solid 1px transparent",
                            fontSize: "14px",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <div style={{ display: "flex" }}>
                        <div>$AIM you receive</div>
                        <div></div>
                      </div>
                      <div>
                        <input
                          style={{
                            padding: "7px",
                            backgroundColor: "#eee",
                            outline: "none",
                            border: "solid 1px transparent",
                            fontSize: "14px",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn dream-btn mt-30 fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      Connect Wallet
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
