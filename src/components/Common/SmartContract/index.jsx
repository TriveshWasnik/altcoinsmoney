import Contract from "./Contract";
import SectionHeading from "./SectionHeading";

const SmartContract = ({
  data,
  heading,
  title,
  description,
  ClassSpanTitle,
  className = "",
}) => {
  return (
    <section className="smart-contract section-padding-0-70 mt-5 clearfix">
      <div className="container">
        <SectionHeading
          heading={heading}
          text=""
          ClassSpanTitle={ClassSpanTitle}
        />
        <div className="row ">
          <div className="col-12 col-lg-6 offset-lg-0">
            <div className="who-we-contant">
              <div
                className={`${className} text-left fadeInUp`}
                data-wow-delay="0.2s"
              >
                <h2>
                  <span>{title}</span>
                </h2>
              </div>

              <p className="fadeInUp" data-wow-delay="0.4s">
                {description}
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-6 offset-lg-0 mt-s">
            {data &&
              data.map((item, key) => (
                <Contract
                  key={key}
                  img={item.img}
                  title={item.title}
                  text={item.text}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartContract;
