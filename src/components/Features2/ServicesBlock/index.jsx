const ServicesBlock = ({img , title, text}) => {

    return (

        <div className="services-block-four v2">
          <div className="inner-box">
            <div className="icon-img-box">
              <img draggable="false" src={img} alt="" style={{width:"50px", height:"50px"}}/>
            </div>
            <h3><a href="#">{title}</a></h3>
            <div className="text">{text}</div>
          </div>
        </div>
    );

}

export default ServicesBlock