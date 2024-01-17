import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import {
  SmartContractinfo,
  SmartContractOtherinfo,
} from "../../data/data-containers/LaunchpadDataContainer/data-Launchpad.js";

import OurJoinUsFirst from "../../data/data-containers/LaunchpadDataContainer/data-OurJoinUsFirst.json";
import OurJoinUsSecond from "../../data/data-containers/LaunchpadDataContainer/data-OurJoinUsSecond.json";
import PlatformIco from "../../data/data-containers/LaunchpadDataContainer/data-PlatformIco.json";

import { HomeDemo1Platform1, HomeDemo1About1 } from "../../utils/allImgs";

import "./style/HomeDemo1.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../containers/LaunchpadContainer/HeroSection";
import SecAbout from "../../containers/LaunchpadContainer/SecAbout";
import SmartContract from "../../containers/LaunchpadContainer/SmartContract";
import SmartContractOther from "../../containers/LaunchpadContainer/SmartContractOther";
import JoinUs from "./JoinUs";
import OurPlatform from "./OurPlatform";

const LaunchpadContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Altcoins Money - Launchpad" />
      <SecHeroSection
        ClassSec="hero-section moving section-padding"
        ClassDiv="col-12 col-lg-5 col-md-12"
        specialHead="AltCoinsMoney: AI Meets Blockchain : A Revolution In Crypto Investments"
        title="Step Into A World Where Visionary Technology Reshapes Crypto Investment."
        // link1="Whitepaper"
        // link2="Buy Token"
        img={HomeDemo1Platform1}
      />{" "}
      <br /> <br /> <br /> <br /> <br /> <br />
      {/* <SecTrust data={SecTrustContent} /> */}
      <div className="clearfix" />
      <OurPlatform data={PlatformIco} />
      <SecAbout
        imgDwon={false}
        title="Introducing the LaunchPad"
        text="The Future of Fundraising: Your Bridge to Crypto Success"
        img={HomeDemo1About1}
      />
      {/* <AboutOther /> */}
      <SmartContract data={SmartContractinfo} />
      <SmartContractOther data={SmartContractOtherinfo} />
      <JoinUs
        OurJoinUsFirst={OurJoinUsFirst}
        OurJoinUsSecond={OurJoinUsSecond}
      />
      {/* <TokenFeatures
            TokenFeaturesTop={TokenFeaturesTop}
            TokenFeaturesMed={TokenFeaturesMed}
            TokenFeaturesDown={TokenFeaturesDown}
            ClassSpanTitle="gradient-text blue"
        /> */}
      {/* <OurServices data={Services} /> */}
      {/* <SecPrices data={SecPricesInfo} /> */}
      <div className="clearfix" />
      {/* <SpreadMap
            Wwhitepaper={HomeDemo1Wwhitepaper}
        /> */}
      {/* <TokenDistribution data={TokenDistributionInfo} />
        <Roadmap data={RoadmapInfo} />
        <Features2
            icoCounterClass="ico-counter mb-30"
            Features2InfoTop={Features2InfoTop}
            Features2InfoDown={Features2InfoDown}
        />
        <Faq data={FaqInfo} />
        <OurTeam data={OurTeamInfo} /> */}
      {/* <Subscribe /> */}
      {/* <OurBlog data={OurBlogInfo} /> */}
      <FooterPages />
    </div>
  );
};

export default LaunchpadContainer;
