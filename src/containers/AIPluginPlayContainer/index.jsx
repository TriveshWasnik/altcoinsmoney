import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import PlatformIco from "../../data/data-containers/AIPluginPlayDataContainer/data-PlatformIco.json";

import FeaturesOtherTop from "../../data/data-containers/AIPluginPlayDataContainer/data-FeaturesOtherTop.json";
import FeaturesOtherDown from "../../data/data-containers/AIPluginPlayDataContainer/data-FeaturesOtherDown.json";

import streamline from "../../assets/img/streamline-transparent.png";
import "./style/HomeDemo5.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../containers/AIPluginPlayContainer/HeroSection";
import FeaturesOther from "./FeaturesOther";
import OurPlatform from "./OurPlatform";

const AIPluginPlayContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Altcoins Money - AI Plugin Play" />
      <SecHeroSection
        ClassSec="hero-section moving-2 section-padding"
        ClassDiv="col-12 col-lg-6 col-md-12"
        specialHead="Welcome to the Future: AI Plugin Play Platform"
        title="Unleash AI Magic: Streamlining Workflows & Elevating Productivity"
        text="This Isn't Your Average Workday"
        //   link1="Whitepaper"
        //   link2="Buy Token"
        img={streamline}
      />
      <div className="clearfix" />
      {/* <OurServices 
          ServicesinfoUp={ServicesinfoUp}
          ServicesinfoDown={ServicesinfoDown}/> */}
      <FeaturesOther
        addOther={true}
        FeaturesOtherTop={FeaturesOtherTop}
        FeaturesOtherDown={FeaturesOtherDown}
      />
      {/* <SecTrust data={SecTrustContent} />
        <div className="clearfix" />
        <AboutOther
            ClassTitle="gradient-text"
        /> */}
      <br /> <br /> <br />
      <OurPlatform data={PlatformIco} />
      {/* <SecPrices
            ClassSec="features section-padding-0-100"
            data={SecPricesInfo}
        />
        <SpreadMap
            Wwhitepaper={HomeDemo4Wwhitepaper}
        />
        <TokenDistribution
            data={TokenDistributionInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <Features2
            icoCounterClass="ico-counter dotted-bg mb-30"
            addOther={true}
            FeaturesOtherTop={FeaturesOtherTop}
            FeaturesOtherDown={FeaturesOtherDown}
        />
        <Faq
            data={FaqInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <OurTeam
            data={OurTeamInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      {/* <Subscribe /> */}
      {/* <OurBlog
            data={OurBlogInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      <FooterPages ClassSpanTitle="gradient-text" />
    </div>
  );
};

export default AIPluginPlayContainer;
