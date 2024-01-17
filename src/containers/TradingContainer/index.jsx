import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import {
  HowItWorksInfo,
  SmartContractinfo,
  TokenFeaturesTop,
  TokenFeaturesMed,
  TokenFeaturesDown,
} from "../../data/data-containers/TradingDataContainer/data-Trading.js";

import OurJoinUsFirst from "../../data/data-containers/TradingDataContainer/data-OurJoinUsFirst.json";
import OurJoinUsSecond from "../../data/data-containers/TradingDataContainer/data-OurJoinUsSecond.json";
import SecPricesInfo from "../../data/data-containers/TradingDataContainer/data-SecPricesInfo.json";

import { HomeDemo6About1 } from "../../utils/allImgs";

import "./style/HomeDemo6.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../containers/TradingContainer/HeroSection";
import SecPrices from "../../containers/TradingContainer/SecPrices";
import SmartContract from "../../containers/TradingContainer/SmartContract";

import JoinUs from "./JoinUs";
import HowItWorks from "./HowItWorks";
import TokenFeatures from "./TokenFeatures";

const TradingContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Altcoins Money - Trading" />
      <SecHeroSection
        ClassSec="hero-section moving section-padding"
        ClassDiv="col-12 col-lg-6 col-md-12"
        specialHead="Mastering the Crypto Trading Frontier"
        title="Discover the future of crypto trading where cutting-edge AI meets algorithmic precision."
        //   link1="Whitepaper"
        //   link2="Buy Token"
        img={HomeDemo6About1}
      />
      <div className="clearfix" />
      <br /> <br /> <br />
      <TokenFeatures
        TokenFeaturesTop={TokenFeaturesTop}
        TokenFeaturesMed={TokenFeaturesMed}
        TokenFeaturesDown={TokenFeaturesDown}
        ClassSpanTitle="gradient-text "
      />
      <JoinUs
        OurJoinUsFirst={OurJoinUsFirst}
        OurJoinUsSecond={OurJoinUsSecond}
      />
      <HowItWorks data={HowItWorksInfo} ClassSpanTitle="gradient-text " />
      <SecPrices
        ClassSec="features section-padding-0-100"
        data={SecPricesInfo}
      />
      <div className="clearfix" />
      <SmartContract data={SmartContractinfo} />
      {/* <SecTrust data={SecTrustContent} /> */}
      <div className="clearfix" />
      {/* <AboutOther
            ClassTitle="gradient-text"
        /> */}
      {/* <OurPlatform data={PlatformIco} /> */}
      <br /> <br /> <br />
      <div className="clearfix" />
      {/* <SpreadMap
            Wwhitepaper={HomeDemo6Wwhitepaper}
        /> */}
      {/* <TokenDistribution
            data={TokenDistributionInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      {/* <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      {/* <Features2
            icoCounterClass="ico-counter dotted-bg mb-30"
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
        />
        <Subscribe />
        <OurBlog
            data={OurBlogInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      <FooterPages ClassSpanTitle="gradient-text " />
    </div>
  );
};

export default TradingContainer;
