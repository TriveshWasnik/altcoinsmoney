const Contract = ({ img, title, text}) => {

  return (
    <div className="services-block-four v3">
      <div className="inner-box">
        <div className="icon-img-box">
          <img draggable="false" src={img} alt="" />
        </div>
        <h3><a href="#">{title}</a></h3>
        <p className="text">{text}</p>
        {/* <p className="text">{text2}</p>
        <p className="text">{text3}</p> */}
      </div>
    </div>
  );
}

export default Contract;