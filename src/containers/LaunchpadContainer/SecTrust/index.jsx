import SectionHeading from "../../LaunchpadContainer/SecTrust/SectionHeading";
import TrustItem from "./TrustItem";

const SecTrust = ({ data }) => {
  return (
    <div className="trust-section section-padding-0-70">
      <SectionHeading
        title="AltCoinsMoney: AI Meets Blockchain: "
        text1="A Revolution in Crypto Investments "
        text2="Step into a world where visionary technology reshapes crypto investment. "
      />
      {/* <div className="container">
          <div className="row">
            {data && data.map((item , key) => (
              <TrustItem
                key={key}
                img={item.img}
                CheckIcon={item.CheckIcon}
                value={item.value}
              />
            ))}
          </div>
        </div> */}
    </div>
  );
};

export default SecTrust;
