import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import { Services } from "../../data/data-containers/AboutDataContainer/data-About.js";

import aboutHeroPlatform from "../../assets/img/about_hero_platform.png";
import aboutAltcoinsMoney from "../../assets/img/about_altcoinsmoney.png";

import "./style/HomeDemo4.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../components/PageAbout/HeroSection";
import AboutOther from "../../components/Common/AboutOther";

import SpreadMap from "../../components/PageAbout/SpreadMap";

import OurServices from "../../components/PageAbout/OurServices";
import OurPlatform from "../../components/Common/OurPlatform";
import aboutMission from "../../assets/img/about_mission.png";
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
      <AboutOther
        heading="Our Mission"
        description="Our mission is to create an AI-enhanced decentralized ecosystem
                that acts as a catalyst for individuals, startups, and seasoned
                developers. Here, dreams meet reality."
        img={aboutMission}
      />
      <OurPlatform
        title="The Crucible of Innovtion and Capital"
        text="Introducing the Launchpad"
        description="In a rapidly evolving crypto landscape, our LaunchPad is the linchpin that bridges innovative startups with discerning investors. With a unique approach that transcends traditional ICOs and IDOs, we smooth your journey into the crypto universe."
      />
      <OurServices data={Services} />
      <SpreadMap Wwhitepaper={aboutAltcoinsMoney} />
      <FooterPages ClassSpanTitle="gradient-text " />
    </div>
  );
};

export default AboutContainer;
