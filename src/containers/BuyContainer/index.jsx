import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils/index.jsx";

import FeaturesOtherTop from "../../data/data-containers/BuyDataContainer/data-FeaturesOtherTop.json";

import "./style/HomeDemo3.scss";

import Header from "../../layouts/Header/index.jsx";
import FooterPages from "../../layouts/Footer/FooterPages/index.jsx";

import SecHeroSection from "../BuyContainer/HeroSection/index.jsx";
import FeaturesOther from "./FeaturesOther/index.jsx";
import Subscribe from "../../components/Subscribe/index.jsx";

const BuyContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Altcoins Money - Buy" />
      <SecHeroSection
        ClassSec="hero-section de-3 section-padding"
        ClassDiv="col-12 col-lg-5 col-md-12"
        specialHead="How To Buy"
        title="AltCoinsMoney Tokens: Your Step-By-Step Guide"
        //   link1="Whitepaper"
        //   link2="Buy Token"
        HomeDemo1Or4Or5Or6={false}
      />
      {/* <div className="clearfix" /> */}
      {/* <OurPlatform
            data={OurPatformInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      {/* <SecAbout
          imgDwon={true}
          title=""
          text="AltCoinsMoney Tokens: Your Step-by-Step Guide"
          img={HomeDemo3About1}
        /> */}
      {/* <FuelFeatures /> */}
      {/* <TokenFeatures
            TokenFeaturesTop={TokenFeaturesTop}
            TokenFeaturesMed={TokenFeaturesMed}
            TokenFeaturesDown={TokenFeaturesDown}
            ClassSpanTitle="gradient-text blue"
        /> */}
      {/* <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text"
        /> */}
      <FeaturesOther
        // icoCounterClass="ico-counter dotted-bg mb-30"
        addOther={true}
        FeaturesOtherTop={FeaturesOtherTop}
        // FeaturesOtherDown={FeaturesOtherDown}
      />
      <br /> <br /> <br /> <br />
      {/* <SmartContract data={SmartContractinfo} /> */}
      {/* <div className="clearfix" /> */}
      {/* <SpreadMap
            Wwhitepaper={HomeDemo3Wwhitepaper}
        /> */}
      {/* <TokenDistribution
            data={TokenDistributionInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      {/* <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      {/* <FeaturesOther
            // icoCounterClass="ico-counter dotted-bg mb-30"
            addOther={true}
            FeaturesOtherTop={FeaturesOtherTop}
            FeaturesOtherDown={FeaturesOtherDown}
        /> */}
      {/* <Faq
            data={FaqInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      {/* <OurTeam
            data={OurTeamInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      <Subscribe />
      {/* <OurBlog
            data={OurBlogInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      <FooterPages ClassSpanTitle="gradient-text" />
    </div>
  );
};

export default BuyContainer;
