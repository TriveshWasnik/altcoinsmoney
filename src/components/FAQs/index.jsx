import {
    HomeDemo1Faq
  } from "../../utils/allImgs"
  
  import SectionHeading from "./SectionHeading"
  
  const Faq = ({data , ID, ClassSpanTitle}) => {
  
      return (

      <div className="fancy-feature-twentyNine position-relative zn2 mt-180 pb-180 lg-mt-110 lg-pb-120">
        <div className="container">
        <SectionHeading
            title="Token FAQ"
            text="Frequently Asked Questions"
            ClassSpanTitle={ClassSpanTitle}
          />
          <div className="row">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="title-style-nine">
                <h2 className="main-title text-white">
                  Any <span>Questions?</span> Find here.
                </h2>
              </div>
              {/* /.title-style-nine */}
              <p className="text-white opacity-75 fs-18 mb-40 mt-30 pe-xxl-5">
                Don’t find your answer here? just send us a message for any
                query.
              </p>
              <Link href="/contact" className="btn-seventeen fw-500 tran3s">
                Contact us
              </Link>
            </div>
            {/* End .col */}
            <div className="col-xxl-6 col-lg-7 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* /.container */}
        <div className="shapes shape-one rounded-circle" />
      </div>
    );

}

export default Faq