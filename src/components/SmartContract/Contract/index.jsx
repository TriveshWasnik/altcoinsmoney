const Contract = ({ img, title, text1, text2 }) => {

  return (
    <div className="services-block-four v3">
      <div className="inner-box">
        <div className="icon-img-box">
          <img draggable="false" src={img} alt="" style={{width:"50px", height:"50px"}}/>
        </div>
        <h3><a href="#">{title}</a></h3>
        <p className="text">{text1}</p>
        {/* <p className="text">{text2}</p> */}
      </div>
    </div>
  );
}

export default Contract;