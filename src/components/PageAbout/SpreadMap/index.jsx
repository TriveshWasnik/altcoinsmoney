import { Link } from "react-router-dom";

const SpreadMap = ({ Wwhitepaper, SectionIcon11 }) => {
  return (
    <section className="spread-map download">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xs-12">
            <div className="welcome-meter">
              <img
                draggable="false"
                src={Wwhitepaper}
                className="center-block about-altcoinsmoney-img"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-xs-12 mt-s">
            <div className="who-we-contant">
              <div className="dream-dots text-left">
                <img draggable="false" src={SectionIcon11} alt="" />
              </div>
              <h4 className="text-white">Why AltCoinsMoney?</h4>
              <p className="text-white">
                The rapidly evolving world of cryptocurrencies can be
                overwhelming. Partner with AltCoinsMoney as your guide, and
                transform every twist and turn into an opportunity for
                innovation and collaboration.
              </p>
              <Link
                className="btn dream-btn mt-30 "
                to="https://altcoinsmoney.gitbook.io/altcoinsmoney/"
                target="_black"
              >
                White Paper
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpreadMap;
