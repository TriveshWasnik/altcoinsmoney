import SectionHeading from "./SectionHeading";
import Service from "./Service";

const OurServices = ({ ServicesinfoUp, ServicesinfoDown, data }) => {
  return (
    <section className="our_services_area section-padding-100-0 clearfix">
      <div className="container">
        <SectionHeading title="Features" text="Our Core Features" />

        <div className="row">
          {/* <div className="col-12 col-lg-6 offset-lg-0 mt-s"> */}
          {ServicesinfoUp &&
            ServicesinfoUp.map((item, key) => (
              <Service
                key={key}
                img={item.img}
                title={item.title}
                text={item.text}
              />
            ))}
          {/* </div> */}
          {/* <div className="col-12 col-lg-6 offset-lg-0 mt-s"> */}
          {ServicesinfoDown &&
            ServicesinfoDown.map((item, key) => (
              <Service
                key={key}
                img={item.img}
                title={item.title}
                text={item.text}
              />
            ))}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
