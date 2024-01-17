const SectionHeading = ({
	title,
	text,
	img,
	ClassSpan="dream-dots justify-content-center",
	ClassSpanTitle=""
}) => {

  return (
  	<>
  	{img ? (
	      <div className="section-heading text-center">	      		
	        <div className="dream-dots justify-content-center" data-aos="fade-up">
	          <img draggable="false" src={img} alt="" />
	        </div>
	        <h2 data-aos="fade-up">{title}</h2>
	        <p data-aos="fade-up">{text}</p>
	      </div>
      	):(
	      <div className="section-heading text-center">	      	
	        <div className={ClassSpan} data-aos="fade-up">
	            <span className={ClassSpanTitle}>{title}</span>
	        </div>
            <h2 data-aos="fade-up">{text}</h2>
            {/* <p data-aos="fade-up">Possess the ability to discern market tendencies, forecast price shifts, and pinpoint burgeoning opportunities, all in real-time. Our state-of-the-art predictive AI models grant you a strategic edge.</p> */}
	      </div>

      	)}
    </>
  );
}

export default SectionHeading;