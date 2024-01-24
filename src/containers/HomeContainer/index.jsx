import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import {
  HowItWorksInfo,
  Features2InfoTop,
  Features2InfoDown,
  OurTeamInfo,
} from "../../data/data-containers/HomeDataContainer/data-Home.js";

import TokenDistributionInfo from "../../data/data-containers/HomeDataContainer/data-TokenDistributionInfo.json";
import FaqInfo from "../../data/data-containers/data-FaqInfo.json";

import { HomeDemo1About1 } from "../../utils/allImgs";

import "./style/HomeDemo2.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import AboutOther from "../../components/Common/AboutOther";
import SecAbout from "../../components/Common/SecAbout";

import Features2 from "../../components/PageHome/Features2";
import TokenDistribution from "../../components/Common/TokenDistribution";
import Faq from "../../components/PageHome/Faq";
import OurTeam from "../../components/Common/OurTeam";

import HowItWorks from "../../components/Common/HowItWorks";
import RoadMapInfo from "../../data/data-containers/RoadmapDataContainer/data-RoadmapInfo.json";
import Roadmap from "../../components/Common/Roadmap/index.jsx";
import { HomeDemo1Computer } from "../../utils/allImgs";
import SecHeroSection from "../../components/Common/HeroSection";

const HomeContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Altcoins Money" />
      <SecHeroSection
        ClassSec="hero-section app section-padding"
        ClassDiv="col-12 col-lg-6 col-md-12"
        specialHead="Welcome to AltCoinsMoney"
        title="An AI and Blockchain-Enabled Innovation Platform"
        description="At its core, our platform harnesses blockchain technology aiming to redefine the decentralized finance (DeFi) arena. Integrating predictive AI, automated trading, and robust investor fund safeguards, we are shifting paradigms in how you experience cryptocurrencies"
        link1="Whitepaper"
        link2="Audit"
        showForm={true}
      />
      <div className="clearfix" />
      <Features2
        icoCounterClass="ico-counter dotted-bg mb-30"
        Features2InfoTop={Features2InfoTop}
        Features2InfoDown={Features2InfoDown}
      />
      <AboutOther
        subtext="About The Platform"
        heading="At The Core of AltCoinsMoney"
        description="At its core, our platform harnesses blockchain technology aiming
                to redefine the decentralized finance (DeFi) arena. Integrating
                predictive AI, automated trading, and robust investor fund
                safeguards, we are shifting paradigms in how you experience
                cryptocurrencies."
        img={HomeDemo1Computer}
      />
      <br /> <br /> <br />
      <HowItWorks
        title="Envision And Achieve"
        text="Advanced Predictive AI"
        description="Possess the ability to discern market tendencies, forecast price shifts, and pinpoint burgeoning opportunities, all in real-time. Our state-of-the-art predictive AI models grant you a strategic edge."
        data={HowItWorksInfo}
        ClassSpanTitle="gradient-text"
      />
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
      <Roadmap data={RoadMapInfo} ClassSpanTitle="gradient-text" />
      <br /> <br />
      <Faq data={FaqInfo} ClassSpanTitle="gradient-text" />
      <OurTeam data={OurTeamInfo} ClassSpanTitle="gradient-text" />
      <FooterPages ClassSpanTitle="gradient-text" />
    </div>
  );
};

export default HomeContainer;
