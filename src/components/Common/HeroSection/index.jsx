import { Link } from "react-router-dom";
import HeroHomeForm from "../HeroHomeForm/HeroHomeForm";
const SecHeroSection = ({
  id = "home",
  ClassSec = "",
  ClassDiv = "",
  specialHead = "",
  title = "",
  text = "",
  description = "",
  link1 = "",
  link2 = "",
  img = "",
  showForm = false,
  HomeDemo1Or3Or4Or5Or6 = true,
  HomeDemo1Or4Or5Or6 = true,
}) => {
  return (
    <section
      className={`${ClassSec} ${showForm === true ? "fullheight" : ""}  `}
      id={id}
    >
      <div className="hero-section-content">
        <div className="container ">
          <div className="row align-items-center">
            <div className={ClassDiv}>
              <div className="welcome-content">
                <div className="promo-section">
                  <h3 className="special-head dark">{specialHead}</h3>
                </div>
                <h1>{title}</h1>
                <h4>{text}</h4>
                <p className="w-text fadeInUp" data-wow-delay="0.3s">
                  {description}
                </p>
                {link1 !== "" && link2 !== "" ? (
                  <div
                    className="dream-btn-group fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <Link
                      to="https://altcoinsmoney.gitbook.io/altcoinsmoney/"
                      target="_blank"
                      className="btn more-btn mr-3"
                    >
                      {link1}
                    </Link>
                    <Link to="#" className="btn more-btn">
                      {link2}
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {HomeDemo1Or3Or4Or5Or6 && (
              <div className="col-lg-6">
                {HomeDemo1Or4Or5Or6 &&
                  (img ? (
                    <div className="illusto-2">
                      <img draggable="false" src={img} alt="" />
                    </div>
                  ) : (
                    <div
                      style={{
                        position: "relative",
                        zIndex: "1",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <HeroHomeForm />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecHeroSection;
