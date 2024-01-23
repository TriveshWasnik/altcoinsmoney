import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import { Services } from "../../data/data-containers/AboutDataContainer/data-About.js";

import PlatformIco from "../../data/data-containers/AboutDataContainer/data-PlatformIco.json";

import { HomeDemo4Wwhitepaper, HomeDemo4About3 } from "../../utils/allImgs";
import aboutHeroPlatform from "../../assets/img/about_hero_platform.png";
import aboutAltcoinsMoney from "../../assets/img/about_altcoinsmoney.png";

import "./style/HomeDemo4.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../containers/AboutContainer/HeroSection";
import AboutOther2 from "../../components/AboutOther2";

import SpreadMap from "../../components/SpreadMap";

import OurServices from "./OurServices";
import OurPlatform from "./OurPlatform";

const AboutContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Altcoins Money - About" />
      <SecHeroSection
        ClassSec="hero-section moving section-padding"
        ClassDiv="col-12 col-lg-6 col-md-12"
        specialHead="Where AI Meets Blockchain:"
        title="A Revolution In Crypto Investments"
        // link1="Whitepaper"
        // link2="Buy Token"
        img={aboutHeroPlatform}
      />
      <br /> <br />
      {/* <SecPrices
            ClassSec="features section-padding-100-70"
            data={SecPricesInfo}
        /> */}
      <div className="clearfix" />
      <AboutOther2 ClassTitle="gradient-text" />
      <OurPlatform data={PlatformIco} />
      <OurServices data={Services} />
      <SpreadMap Wwhitepaper={aboutAltcoinsMoney} />
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
        /> */}
      {/* <Subscribe /> */}
      {/* <OurBlog
            data={OurBlogInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
      <FooterPages ClassSpanTitle="gradient-text " />
    </div>
  );
};

export default AboutContainer;
