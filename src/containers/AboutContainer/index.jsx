import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import { Services } from "../../data/data-containers/AboutDataContainer/data-About.js";

import PlatformIco from "../../data/data-containers/AboutDataContainer/data-PlatformIco.json";

import aboutHeroPlatform from "../../assets/img/about_hero_platform.png";
import aboutAltcoinsMoney from "../../assets/img/about_altcoinsmoney.png";

import "./style/HomeDemo4.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../components/PageAbout/HeroSection";
import AboutOther2 from "../../components/PageAbout/AboutOther2";

import SpreadMap from "../../components/PageAbout/SpreadMap";

import OurServices from "../../components/PageAbout/OurServices";
import OurPlatform from "../../components/PageAbout/OurPlatform";

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
        img={aboutHeroPlatform}
      />
      <br /> <br />
      <div className="clearfix" />
      <AboutOther2 ClassTitle="gradient-text" />
      <OurPlatform data={PlatformIco} />
      <OurServices data={Services} />
      <SpreadMap Wwhitepaper={aboutAltcoinsMoney} />
      <FooterPages ClassSpanTitle="gradient-text " />
    </div>
  );
};

export default AboutContainer;
