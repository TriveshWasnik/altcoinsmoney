const SectionHeading = ({
	title,
	text,
	img,
	ClassSpan="dream-dots justify-content-center",
	ClassSpanTitle="gradient-text "
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
            <p data-aos="fade-up">In a rapidly evolving crypto landscape, our LaunchPad is the linchpin that bridges innovative startups with discerning investors. With a unique approach that transcends traditional ICOs and IDOs, we smooth your journey into the crypto universe.</p>
	      </div>

      	)}
    </>
  );
}

export default SectionHeading;