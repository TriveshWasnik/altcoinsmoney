import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import {
  HowItWorksInfo,
  ServicesinfoUp,
  ServicesinfoDown,
  SmartContractinfoRight,
  SmartContractinfoLeft,
  Features2InfoTop,
  Features2InfoDown,
  OurTeamInfo,
  OurBlogInfo,
} from "../../data/data-containers/HomeDemo2/data-HomeDemo2.js";

import SecPricesInfo from "../../data/data-containers/HomeDemo2/data-SecPricesInfo.json";
import TokenDistributionInfo from "../../data/data-containers/HomeDemo2/data-TokenDistributionInfo.json";
import RoadmapInfo from "../../data/data-containers/HomeDemo2/data-RoadmapInfo.json";
import FeaturessOtherTop from "../../data/data-containers/HomeDemo2/data-FeaturessOtherTop.json";
import FeaturessOtherDown from "../../data/data-containers/HomeDemo2/data-FeaturessOtherDown.json";
// import ServicesInfoUp from '../../data/data-containers/HomeDemo2/data-ServicesinfoUp.json';
// import ServicesInfoDown from '../../data/data-containers/HomeDemo2/data-ServicesinfoDown.json';
import FaqInfo from "../../data/data-containers/HomeDemo2/data-FaqInfo.json";

import {
  HomeDemo2Wwhitepaper,
  HomeDemo2SectionIcon11,
  HomeDemo1About1,
} from "../../utils/allImgs";

import "./style/HomeDemo2.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../components/HeroSection";
import AboutOther from "../../components/AboutOther";
import SecAbout from "../../containers/HomeDemo2/SecAbout";
import FuelFeatures from "../../components/FuelFeatures";
import Features2 from "../../components/Features2";
import SpreadMap from "../../components/SpreadMap";
import SmartContract from "../../containers/HomeDemo2/SmartContract";
import SecPrices from "../../components/SecPrices";
import TokenDistribution from "../../components/TokenDistribution";
import Roadmap from "../../components/Roadmap";
import Featuress2 from "../../containers/HomeDemo2/Features2";
import Faq from "../../components/Faq";
import OurTeam from "../../containers/HomeDemo2/OurTeam";
import Subscribe from "../../components/Subscribe";
import OurBlog from "../../components/OurBlog";

import HowItWorks from "./HowItWorks.js";
import OurServices from "./OurServices.js";

const HomeDataContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Home Template2" />
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
      <HowItWorks data={HowItWorksInfo} ClassSpanTitle="gradient-text blue" />
      <AboutOther />
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
        ClassSpanTitle="gradient-text blue"
      />
      <br /> <br /> <br />
      {/* <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      <Featuress2
        // icoCounterClass="ico-counter dotted-bg mb-30"
        addOther={true}
        FeaturessOtherTop={FeaturessOtherTop}
        FeaturessOtherDown={FeaturessOtherDown}
      />
      <OurServices
        //   data={ServicesinfoUp}
        ServicesinfoUp={ServicesinfoUp}
        ServicesinfoDown={ServicesinfoDown}
      />
      {/* <SmartContract 
            SmartContractinfoRight={SmartContractinfoRight}
            SmartContractinfoLeft={SmartContractinfoLeft} /> */}
      <br /> <br />
      <Faq data={FaqInfo} ClassSpanTitle="gradient-text blue" />
      <OurTeam data={OurTeamInfo} ClassSpanTitle="gradient-text blue" />
      {/* <OurBlog
            data={OurBlogInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <Subscribe /> */}
      <FooterPages ClassSpanTitle="gradient-text blue" />
    </div>
  );
};

export default HomeDataContainer;
