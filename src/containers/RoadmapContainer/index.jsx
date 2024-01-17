import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import {
  HowItWorksInfo,
  Features2InfoTop,
  Features2InfoDown,
  OurTeamInfo,
} from "../../data/data-containers/RoadmapDataContainer/data-Roadmap.js";

import TokenDistributionInfo from "../../data/data-containers/RoadmapDataContainer/data-TokenDistributionInfo.json";
import FeaturesOtherTop from "../../data/data-containers/RoadmapDataContainer/data-FeaturesOtherTop.json";
import FeaturesOtherDown from "../../data/data-containers/RoadmapDataContainer/data-FeaturesOtherDown.json";
// import ServicesInfoUp from '../../data/data-containers/HomeDemo2/data-ServicesinfoUp.json';
// import ServicesInfoDown from '../../data/data-containers/HomeDemo2/data-ServicesinfoDown.json';
import RoadMapInfo from "../../data/data-containers/RoadmapDataContainer/data-RoadmapInfo.json";
import FaqInfo from "../../data/data-containers/RoadmapDataContainer/data-FaqInfo.json";

import { HomeDemo1About1 } from "../../utils/allImgs";

import "./style/HomeDemo2.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../components/HeroSection";
import AboutOther from "../../components/AboutOther";
import SecAbout from "../../containers/RoadmapContainer/SecAbout";
import Features2 from "../../components/Features2";
import TokenDistribution from "../../components/TokenDistribution";
import FeaturesOther from "./FeaturesOther";
import Faq from "../../components/Faq";
import OurTeam from "../../containers/RoadmapContainer/OurTeam";

import HowItWorks from "./HowItWorks";
import Roadmap from "../../components/Roadmap/index.jsx";

const RoadmapContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Altcoins Money - Road Map" />
      <SecHeroSection
        ClassSec="hero-section app section-padding"
        ClassDiv="col-12 col-lg-7 col-md-12"
        specialHead="Welcome to AltCoinsMoney "
        title="An AI and Blockchain-Enabled Innovation Platform"
        // subtitle="Bridging the Best of Two Worlds: Blockchain Meets AI"
        link1="Join Presale"
        link2="Read Whitepaper"
        HomeDemo1Or3Or4Or5Or6={false}
        HomeDemo1Or4Or5Or6={false}
      />
      <div className="clearfix" />
      <Features2
        icoCounterClass="ico-counter dotted-bg mb-30"
        Features2InfoTop={Features2InfoTop}
        Features2InfoDown={Features2InfoDown}
      />
      <AboutOther />
      <br /> <br /> <br />
      <HowItWorks data={HowItWorksInfo} ClassSpanTitle="gradient-text" />
      <SecAbout
        imgDwon={false}
        title="Introducing the LaunchPad"
        text="The Future of Fundraising: Your Bridge to Crypto Success"
        img={HomeDemo1About1}
      />
      {/* <FuelFeatures /> */}
      {/* <SecPrices
            data={SecPricesInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      <div className="clearfix" />
      {/* <SpreadMap
            Wwhitepaper={HomeDemo2Wwhitepaper}
            
        /> */}
      <TokenDistribution
        data={TokenDistributionInfo}
        ClassSpanTitle="gradient-text"
      />
      <br />
      <Roadmap data={RoadMapInfo} ClassSpanTitle="gradient-text" />
      {/* <FeaturesOther
          addOther={true}
          FeaturesOtherTop={FeaturesOtherTop}
          FeaturesOtherDown={FeaturesOtherDown}
        /> */}
      {/* <OurServices 
          data={ServicesinfoUp}
            ServicesinfoUp={ServicesinfoUp}
            ServicesinfoDown={ServicesinfoDown}/> */}
      {/* <SmartContract 
            SmartContractinfoRight={SmartContractinfoRight}
            SmartContractinfoLeft={SmartContractinfoLeft} /> */}
      <br /> <br />
      <Faq data={FaqInfo} ClassSpanTitle="gradient-text" />
      <OurTeam data={OurTeamInfo} ClassSpanTitle="gradient-text" />
      {/* <OurBlog
            data={OurBlogInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <Subscribe /> */}
      <FooterPages ClassSpanTitle="gradient-text" />
    </div>
  );
};

export default RoadmapContainer;
