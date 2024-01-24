import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import {
  HowItWorksInfo,
  Features2InfoTop,
  Features2InfoDown,
  OurTeamInfo,
} from "../../data/data-containers/HomeDataContainer/data-Home.js";

import TokenDistributionInfo from "../../data/data-containers/HomeDataContainer/data-TokenDistributionInfo.json";
import FeaturesOtherTop from "../../data/data-containers/HomeDataContainer/data-FeaturesOtherTop.json";
import FeaturesOtherDown from "../../data/data-containers/HomeDataContainer/data-FeaturesOtherDown.json";
import FaqInfo from "../../data/data-containers/data-FaqInfo.json";

import { HomeDemo1About1 } from "../../utils/allImgs";

import "./style/HomeDemo2.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import AboutOther from "../../components/PageHome/AboutOther";
import SecAbout from "../../components/PageHome/SecAbout";

import Features2 from "../../components/PageHome/Features2";
import TokenDistribution from "../../components/PageHome/TokenDistribution";
import FeaturesOther from "../../components/PageHome/FeaturesOther";
import Faq from "../../components/PageHome/Faq";
import OurTeam from "../../components/PageHome/OurTeam";

import HowItWorks from "../../components/PageHome/HowItWorks";
import HeroSectionHome from "../../components/PageHome/HeroSectionHome";

const HomeContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Altcoins Money" />
      <HeroSectionHome
        ClassSec="hero-section app section-padding"
        specialHead="Welcome to AltCoinsMoney"
        title="An AI and Blockchain-Enabled Innovation Platform"
        subtitle="At its core, our platform harnesses blockchain technology aiming to redefine the decentralized finance (DeFi) arena. Integrating predictive AI, automated trading, and robust investor fund safeguards, we are shifting paradigms in how you experience cryptocurrencies"
        link1="Whitepaper"
        link2="Audit"
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
      <div className="clearfix" />
      <TokenDistribution
        data={TokenDistributionInfo}
        ClassSpanTitle="gradient-text"
      />
      <br />
      <FeaturesOther
        addOther={true}
        FeaturesOtherTop={FeaturesOtherTop}
        FeaturesOtherDown={FeaturesOtherDown}
      />
      <br /> <br />
      <Faq data={FaqInfo} ClassSpanTitle="gradient-text" />
      <OurTeam data={OurTeamInfo} ClassSpanTitle="gradient-text" />
      <FooterPages ClassSpanTitle="gradient-text" />
    </div>
  );
};

export default HomeContainer;
