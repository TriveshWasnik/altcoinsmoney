const Service = ({ img, title, subtitle, text,
  ClassSpan="dream-dots justify-content-center",
	ClassSpanTitle="gradient-text " 
}) => {

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="service_single_content shadow-lg text-center mb-100" data-aos="fade-up">
        <div className="service_icon">
          <img draggable="false" src={img} alt="" style={{width:"60px", height:"60px"}} />
        </div>
        <div className="section-heading text-center">	      	
	        <div className={ClassSpan} data-aos="fade-up">
	            <span className={ClassSpanTitle}>{title}</span>
	        </div>
            <h5 data-aos="fade-up">{subtitle} <br/> <br/>
            <p data-aos="fade-up">{text}</p></h5>
	      </div>
        {/* <h4>{title}</h4>
        <p><h5>{subtitle}</h5></p>
        <p>{text}</p> */}
      </div>
    </div>
  );
}

export default Service;