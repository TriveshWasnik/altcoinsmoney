import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils/index.jsx";

import FeaturesOtherTop from "../../data/data-containers/BuyDataContainer/data-FeaturesOtherTop.json";

import "./style/HomeDemo3.scss";

import Header from "../../layouts/Header/index.jsx";
import FooterPages from "../../layouts/Footer/FooterPages/index.jsx";

import FeaturesOther from "../../components/PageBuy/FeaturesOther";
import Subscribe from "../../components/PageBuy/Subscribe";
import SecHeroSection from "../../components/Common/HeroSection";
const BuyContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Altcoins Money - Buy" />
      <SecHeroSection
        ClassSec="hero-section de-3 section-padding"
        ClassDiv="col-12 col-lg-6 col-md-12"
        specialHead="How To Buy"
        title="AltCoinsMoney Tokens: Your Step-By-Step Guide"
        description="At Altcoins Money, we are not just crafting a dynamic financial ecosystem; we are also ensuring that joining our movement is as seamless as possible. Here is a simple guide to help you acquire Altcoins Money tokens using USDT."
        showForm={true}
      />
      <div className="clearfix" />
      <FeaturesOther
        // icoCounterClass="ico-counter dotted-bg mb-30"
        addOther={true}
        FeaturesOtherTop={FeaturesOtherTop}
        // FeaturesOtherDown={FeaturesOtherDown}
      />
      <br /> <br /> <br /> <br />
      <Subscribe />
      <FooterPages ClassSpanTitle="gradient-text" />
    </div>
  );
};

export default BuyContainer;
