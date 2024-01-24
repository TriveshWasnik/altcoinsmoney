import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import PlatformIco from "../../data/data-containers/AIPluginPlayDataContainer/data-PlatformIco.json";

import FeaturesOtherTop from "../../data/data-containers/AIPluginPlayDataContainer/data-FeaturesOtherTop.json";
import FeaturesOtherDown from "../../data/data-containers/AIPluginPlayDataContainer/data-FeaturesOtherDown.json";

import streamline from "../../assets/img/streamline-transparent.png";
import "./style/HomeDemo5.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../components/PageAIPluginPlay/HeroSection";
import FeaturesOther from "../../components/PageAIPluginPlay/FeaturesOther";
import OurPlatform from "../../components/Common/OurPlatform";

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
        img={streamline}
      />
      <div className="clearfix" />
      <FeaturesOther
        addOther={true}
        FeaturesOtherTop={FeaturesOtherTop}
        FeaturesOtherDown={FeaturesOtherDown}
      />
      <br /> <br /> <br />
      <OurPlatform
        title="Ready To Dive In?"
        text="Your Future, AI-Enhanced, Starts Here"
        description="Ready to dive in? Our AI Plugin Play Platform isn't just about technology; it's about transforming potential into performance. Supercharge your future. Embrace the AI revolution."
      />
      <FooterPages ClassSpanTitle="gradient-text" />
    </div>
  );
};

export default AIPluginPlayContainer;
