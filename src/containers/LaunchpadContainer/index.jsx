import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import {
  SmartContractinfo,
  SmartContractOtherinfo,
} from "../../data/data-containers/LaunchpadDataContainer/data-Launchpad.js";

import OurJoinUsFirst from "../../data/data-containers/LaunchpadDataContainer/data-OurJoinUsFirst.json";
import OurJoinUsSecond from "../../data/data-containers/LaunchpadDataContainer/data-OurJoinUsSecond.json";
import PlatformIco from "../../data/data-containers/LaunchpadDataContainer/data-PlatformIco.json";

import launchpadHero from "../../assets/img/launchpad-hero.png";
import launchpadFutureFundrising from "../../assets/img/launchpad-future-fundrising.png";
import "./style/HomeDemo1.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../components/PageLaunchpad/HeroSection";
import SecAbout from "../../components/PageLaunchpad/SecAbout";
import SmartContract from "../../components/PageLaunchpad/SmartContract";
import SmartContractOther from "../../components/PageLaunchpad/SmartContractOther";
import JoinUs from "../../components/PageLaunchpad/JoinUs";
import OurPlatform from "../../components/Common/OurPlatform";

const LaunchpadContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Altcoins Money - Launchpad" />
      <SecHeroSection
        ClassSec="hero-section moving section-padding"
        ClassDiv="col-12 col-lg-6 col-md-12"
        specialHead="AltCoinsMoney: AI Meets Blockchain : A Revolution In Crypto Investments"
        title="Step Into A World Where Visionary Technology Reshapes Crypto Investment."
        img={launchpadHero}
      />
      <br /> <br /> <br /> <br /> <br /> <br />
      <div className="clearfix" />
      <OurPlatform
        title="Our Mission"
        text="Catalyzing Your Ambitions in Decentralized Finance"
        description="Our compass is set on sculpting an AI-enriched decentralized
            ecosystem. We stand as advocates for individuals, startups, and
            seasoned developers, offering them an unparalleled platform to
            catalyze their ambitions."
      />
      <SecAbout
        imgDwon={false}
        title="Introducing the LaunchPad"
        text="The Future of Fundraising: Your Bridge to Crypto Success"
        img={launchpadFutureFundrising}
      />
      <SmartContract data={SmartContractinfo} />
      <SmartContractOther data={SmartContractOtherinfo} />
      <JoinUs
        OurJoinUsFirst={OurJoinUsFirst}
        OurJoinUsSecond={OurJoinUsSecond}
      />
      <div className="clearfix" />
      <FooterPages />
    </div>
  );
};

export default LaunchpadContainer;
