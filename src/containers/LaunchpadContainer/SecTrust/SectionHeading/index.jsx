const SectionHeading = ({
	title,
	text1,
	text2,
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
	        <p data-aos="fade-up">{text1}</p>
			<p data-aos="fade-up">{text2}</p>
	      </div>
      	):(
	      <div className="section-heading text-center">	      	
	        <div className={ClassSpan} data-aos="fade-up">
	            <span className={ClassSpanTitle}>{title}</span>
	        </div>
            <h2 data-aos="fade-up">{text1}</h2>
			<h2 data-aos="fade-up">{text2}</h2>
            <p data-aos="fade-up">At AltCoinsMoney, we harness the dual powers of AI and blockchain to craft a platform that stands out in the crypto landscape.
</p>
	      </div>

      	)}
    </>
  );
}

export default SectionHeading;