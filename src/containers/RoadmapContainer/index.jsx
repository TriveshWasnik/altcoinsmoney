import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import { OurTeamInfo } from "../../data/data-containers/RoadmapDataContainer/data-Roadmap.js";

import TokenDistributionInfo from "../../data/data-containers/RoadmapDataContainer/data-TokenDistributionInfo.json";
import RoadMapInfo from "../../data/data-containers/RoadmapDataContainer/data-RoadmapInfo.json";
import "./style/HomeDemo2.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../components/PageRoadmap/HeroSection";
import TokenDistribution from "../../components/Common/TokenDistribution";
import OurTeam from "../../components/Common/OurTeam";

import Roadmap from "../../components/Common/Roadmap/index.jsx";

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
        specialHead="Welcome to Roadmap"
        title="AI Meets Crypto: Revolutionizing the Future"
        description="Embark on a journey where artificial intelligence enhances the world of cryptocurrency, unlocking unprecedented possibilities."
        link1="Join Presale"
        link2="Read Whitepaper"
        HomeDemo1Or3Or4Or5Or6={false}
        HomeDemo1Or4Or5Or6={false}
      />

      <div className="clearfix" />
      <div className="clearfix" />
      <TokenDistribution
        data={TokenDistributionInfo}
        ClassSpanTitle="gradient-text"
      />
      <br />
      <Roadmap data={RoadMapInfo} ClassSpanTitle="gradient-text" />
      <OurTeam data={OurTeamInfo} ClassSpanTitle="gradient-text" />
      <FooterPages ClassSpanTitle="gradient-text" />
    </div>
  );
};

export default RoadmapContainer;
