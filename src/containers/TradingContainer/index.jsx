import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import {
  HowItWorksInfo,
  SmartContractinfo,
  TokenFeaturesTop,
  TokenFeaturesMed,
  TokenFeaturesDown,
} from "../../data/data-containers/TradingDataContainer/data-Trading.js";

import OurJoinUsFirst from "../../data/data-containers/TradingDataContainer/data-OurJoinUsFirst.json";
import OurJoinUsSecond from "../../data/data-containers/TradingDataContainer/data-OurJoinUsSecond.json";
import SecPricesInfo from "../../data/data-containers/TradingDataContainer/data-SecPricesInfo.json";

import { HomeDemo6About1 } from "../../utils/allImgs";

import "./style/HomeDemo6.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../components/PageTrading/HeroSection";
import SecPrices from "../../components/PageTrading/SecPrices";
import SmartContract from "../../components/Common/SmartContract";

import JoinUs from "../../components/PageTrading/JoinUs";
import HowItWorks from "../../components/Common/HowItWorks";
import TokenFeatures from "../../components/PageTrading/TokenFeatures";

const TradingContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Altcoins Money - Trading" />
      <SecHeroSection
        ClassSec="hero-section moving section-padding"
        ClassDiv="col-12 col-lg-6 col-md-12"
        specialHead="Mastering the Crypto Trading Frontier"
        title="Discover the future of crypto trading where cutting-edge AI meets algorithmic precision."
        img={HomeDemo6About1}
      />
      <div className="clearfix" />
      <br /> <br /> <br />
      <TokenFeatures
        TokenFeaturesTop={TokenFeaturesTop}
        TokenFeaturesMed={TokenFeaturesMed}
        TokenFeaturesDown={TokenFeaturesDown}
        ClassSpanTitle="gradient-text "
      />
      <JoinUs
        OurJoinUsFirst={OurJoinUsFirst}
        OurJoinUsSecond={OurJoinUsSecond}
      />
      <HowItWorks
        title="Bot Trading"
        text="The Future of Optimized Trading Strategy"
        description="From market-making to scalping, our trading bots are designed for efficiency and profitability, offering you a diversified portfolio of strategies."
        data={HowItWorksInfo}
        ClassSpanTitle="gradient-text "
      />
      <SecPrices
        ClassSec="features section-padding-0-100"
        data={SecPricesInfo}
      />
      <div className="clearfix" />
      <SmartContract
        className="dream-dots"
        title="Harnessing Expertise for Amplified Returns"
        description="Harness the collective wisdom of seasoned traders and benefit
                from their strategies without spending years gaining the same
                expertise."
        data={SmartContractinfo}
      />
      <div className="clearfix" />
      <br /> <br /> <br />
      <div className="clearfix" />
      <FooterPages ClassSpanTitle="gradient-text " />
    </div>
  );
};

export default TradingContainer;
