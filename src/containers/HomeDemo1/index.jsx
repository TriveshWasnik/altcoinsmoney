import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import {
        SecTrustContent,
        Services,
        SmartContractinfo,
        SmartContractOtherinfo,
        // TokenFeaturesTop,
        // TokenFeaturesMed,
        // TokenFeaturesDown,
        Features2InfoTop,
        Features2InfoDown,
        OurTeamInfo,
        OurBlogInfo
       } from '../../data/data-containers/HomeDemo1/data-HomeDemo1.js';

import OurJoinUsFirst from '../../data/data-containers/HomeDemo1/data-OurJoinUsFirst.json';
import OurJoinUsSecond from '../../data/data-containers/HomeDemo1/data-OurJoinUsSecond.json';
import PlatformIco from '../../data/data-containers/HomeDemo1/data-PlatformIco.json';
import SecPricesInfo from '../../data/data-containers/HomeDemo1/data-SecPricesInfo.json';
import TokenDistributionInfo from '../../data/data-containers/HomeDemo1/data-TokenDistributionInfo.json';
import RoadmapInfo from '../../data/data-containers/HomeDemo1/data-RoadmapInfo.json';
import FaqInfo from '../../data/data-containers/HomeDemo1/data-FaqInfo.json';

import {
        HomeDemo1Platform1,
        HomeDemo1Wwhitepaper,
        HomeDemo1About1
        } from '../../utils/allImgs'

import './style/HomeDemo1.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../containers/HomeDemo1/HeroSection'
import SecAbout from '../../containers/HomeDemo1/SecAbout'
import AboutOther from '../../components/AboutOther'
import Features2 from '../../components/Features2'
import SpreadMap from '../../components/SpreadMap'
import SmartContract from '../../containers/HomeDemo1/SmartContract'
import SmartContractOther from '../../containers/HomeDemo1/SmartContractOther'
import SecPrices from '../../components/SecPrices'
import TokenDistribution from '../../components/TokenDistribution'
import Roadmap from '../../components/Roadmap'
import Faq from '../../components/Faq'
import OurTeam from '../../components/OurTeam'
import Subscribe from '../../components/Subscribe'
import OurBlog from '../../components/OurBlog'
// import TokenFeatures from "../../containers/HomeDemo1/TokenFeatures"
import JoinUs from './JoinUs'
import SecTrust from './SecTrust'
import OurServices from "./OurServices"
import OurPlatform from "./OurPlatform"

const HomeDemo1Container = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <div>
        <Header Title="Home Template1" />
        <SecHeroSection
          ClassSec="hero-section moving section-padding"
          ClassDiv="col-12 col-lg-5 col-md-12"
          specialHead="AltCoinsMoney: AI Meets Blockchain : A Revolution In Crypto Investments"
          title="Step Into A World Where Visionary Technology Reshapes Crypto Investment."
          // link1="Whitepaper"
          // link2="Buy Token"
          img={HomeDemo1Platform1}
        /> <br/> <br/> <br/> <br/> <br/> <br/>
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

export default HomeDemo1Container