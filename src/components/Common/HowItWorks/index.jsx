import SectionHeading from "../HowItWorks/SectionHeading";

const HowItWorks = ({ data, ClassSpanTitle, title, text, description }) => {
  return (
    <section
      className="darky how section-padding-0-0"
      style={{ paddingBottom: "70px" }}
    >
      <div className="container">
        <SectionHeading
          title={title}
          text={text}
          description={description}
          ClassSpanTitle={ClassSpanTitle}
        />

        <div className="row">
          {data &&
            data.map((item, key) => (
              <div className="col-12 col-md-6 col-lg-4" key={key}>
                <div className="service_single_content box-shadow text-center mb-100">
                  <img
                    draggable="false"
                    src={item.img1}
                    className="colored-icon"
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                  <br /> <br />
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
