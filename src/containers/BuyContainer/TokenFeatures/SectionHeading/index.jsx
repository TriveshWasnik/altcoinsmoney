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
	          <h2><span className={ClassSpanTitle}>{title}</span></h2>
	        </div>
            {/* <h2 data-aos="fade-up">{text}</h2> */}
            <p data-aos="fade-up">Ensure you have a digital wallet with sufficient USDT funds. If you are new to the world of cryptocurrencies, consider researching and choosing a reputable wallet that supports USDT.</p>
	      </div>

      	)}
    </>
  );
}

export default SectionHeading;