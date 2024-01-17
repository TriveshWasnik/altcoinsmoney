import React from "react";
import { SlideCountdown } from "react-fancy-countdown";
import { Line } from "rc-progress";
import InputBox from "../InputBox/InputBox";

function HeroHomeForm({ icoCounterClass = "ico-counter dotted-bg" }) {
  return (
    <div className={`${icoCounterClass} hero-home-form`}>
      <div className="counter-down">
        <div className="content">
          <div className="conuter-header">
            <h3 className="w-text text-center">TOKEN SALE ENDS IN</h3>
          </div>
          <div className="counterdown-content">
            <div className="count-down titled circled text-center">
              <SlideCountdown weeks={false} deadline="2030-12-31 14:23:22" />
            </div>
            <h5 className="heading-home-form">
              BUY NOW BEFORE PRICE INCREASES!
            </h5>
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
            <p className="white text-center text-16">
              USDT Raised: {"$465,459.63"} / {"$609,201"}
            </p>
            <p className="white text-center">1 $AIM = $0.02575 USDT</p>
            <div className="home-form">
              <form>
                <div className="home-form-input-container">
                  <InputBox
                    className="inputbox-home-hero"
                    label="Enter USDT Amount"
                    labelmax="Max"
                    img="https://static.vecteezy.com/system/resources/previews/013/373/699/original/tether-usdt-3d-rendering-isometric-icon-free-png.png"
                  />
                  <InputBox
                    className="inputbox-home-hero"
                    label="$AIM You Receive"
                    img="https://cdn4.iconfinder.com/data/icons/cryptocoins/227/USDT-alt-512.png"
                  />
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
  );
}

export default HeroHomeForm;
