import SectionHeading from "../../HomeDemo4/OurServices/SectionHeading"

import Service from "./Service"


const OurServices = ({data}) => {

    return (

      <section className="our_services_area section-padding-0-0 clearfix">
        <div className="container">
          <SectionHeading
            title=""
            text="Let's Discover Launchpad"
          />

          <div className="row">
            {data && data.map((item , key) => (
              <Service
                key={key}
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>
    );

}

export default OurServices;