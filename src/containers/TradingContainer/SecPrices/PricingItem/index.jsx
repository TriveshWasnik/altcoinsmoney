const PricingItem = ({title, text, 
  ClassSpan="dream-dots justify-content-center",
  ClassSpanTitle="" 
}) => {

    return (
      <div className="col-lg-4 col-sm-6 col-xs-12">
        <div className="pricing-item text-center">
        {/* <div className="section-heading text-center"> */}
	        <div className={ClassSpan} data-aos="fade-up">
	            <span className={ClassSpanTitle}><strong><h5>{title}</h5></strong></span>
	        </div>
            <p data-aos="fade-up">{text}</p>
            {/* <p data-aos="fade-up">Possess the ability to discern market tendencies, forecast price shifts, and pinpoint burgeoning opportunities, all in real-time. Our state-of-the-art predictive AI models grant you a strategic edge.</p> */}
	      {/* </div> */}
          
          {/* <h3>{title}</h3>  */}
          {/* <span>1 ETH = 500 Token</span> */}
          {/* <div className="pricing">15,000,000 Token</div> */}
          {/* <p>{text}</p> */}
        </div>
      </div>
    );
}

export default PricingItem;