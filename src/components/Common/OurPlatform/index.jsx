import SectionHeading from "./SectionHeading";
const OurPlatform = ({ title, text, description }) => {
  return (
    <section className="features section-padding-0-100 ">
      <div className="container">
        <SectionHeading title={title} text={text} description={description} />
      </div>
    </section>
  );
};

export default OurPlatform;
