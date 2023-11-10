const Join = ({
  ClassTop,
  ClassDown,
  ClassSteps,
  Steps,
  title,
  subtitle,
  text
}) => {

  return (
    <div className={ClassTop}>
      <div className={ClassDown}>
        <div className="service_single_content text-center mb-30 fadeInUp" data-wow-delay="0.2s">
          <div className="cycle_icon">
            <span className={ClassSteps}>{Steps}</span>
          </div>
          <div className="dream-dots justify-content-center fadeInUp" data-aos="fade-up" data-aos-delay="200">
              <span>{title}</span>
            </div>
          {/* <h5>{title}</h5> */}
          {/* <h6>{subtitle}</h6> */} <br/> 
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Join;