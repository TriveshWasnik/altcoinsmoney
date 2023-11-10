import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import {
        HowItWorksInfo,
        SmartContractinfo,
        SecTrustContent,
        OurTeamInfo,
        OurBlogInfo
       } from '../../data/data-containers/HomeDemo6/data-HomeDemo6.js';

import PlatformIco from '../../data/data-containers/HomeDemo4/data-PlatformIco.json';
import OurJoinUsFirst from '../../data/data-containers/HomeDemo6/data-OurJoinUsFirst.json';
import OurJoinUsSecond from '../../data/data-containers/HomeDemo6/data-OurJoinUsSecond.json';
import SecPricesInfo from '../../data/data-containers/HomeDemo5/data-SecPricesInfo.json';
import FeaturesOtherTop from '../../data/data-containers/HomeDemo6/data-FeaturesOtherTop.json';
import FeaturesOtherDown from '../../data/data-containers/HomeDemo6/data-FeaturesOtherDown.json';
import TokenDistributionInfo from '../../data/data-containers/HomeDemo6/data-TokenDistributionInfo.json';
import RoadmapInfo from '../../data/data-containers/HomeDemo6/data-RoadmapInfo.json';
import FaqInfo from '../../data/data-containers/HomeDemo6/data-FaqInfo.json';

import {
        HomeDemo6Wwhitepaper,
        HomeDemo6About1
        } from '../../utils/allImgs'

import './style/HomeDemo6.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../containers/HomeDemo6/HeroSection'
import AboutOther from '../../components/AboutOther'
import SecPrices from '../../components/SecPrices'
import SmartContract from '../../containers/HomeDemo6/SmartContract'

import Features2 from '../../components/Features2'
import SpreadMap from '../../components/SpreadMap'
import TokenDistribution from '../../components/TokenDistribution'
import Roadmap from '../../components/Roadmap'
import Faq from '../../components/Faq'
import OurTeam from '../../components/OurTeam'
import Subscribe from '../../components/Subscribe'
import OurBlog from '../../components/OurBlog'

import JoinUs from './JoinUs'
import SecTrust from './SecTrust'
import OurPlatform from './OurPlatform'
import HowItWorks from './HowItWorks'




const HomeDemo6Container = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <div>
        <Header Title="Home Template6" />
        <SecHeroSection
          ClassSec="hero-section moving section-padding"
          ClassDiv="col-12 col-lg-6 col-md-12"
          specialHead="Mastering the Crypto Trading Frontier"
          title="Discover the future of crypto trading where cutting-edge AI meets algorithmic precision."
        //   link1="Whitepaper"
        //   link2="Buy Token"
          img={HomeDemo6About1}
        />
        <div className="clearfix" />
        <br/> <br/> <br/>
        <HowItWorks
            data={HowItWorksInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <SecPrices
            ClassSec="features section-padding-0-100"
            data={SecPricesInfo}
        />
         <div className="clearfix" />
         <SmartContract data={SmartContractinfo} />

        {/* <SecTrust data={SecTrustContent} /> */}
        <div className="clearfix" />
        <JoinUs
          OurJoinUsFirst={OurJoinUsFirst}
          OurJoinUsSecond={OurJoinUsSecond}
        />
        {/* <AboutOther
            ClassTitle="gradient-text"
        /> */}
        {/* <OurPlatform data={PlatformIco} /> */}
        <br/>         <br/>         <br/>
        
        <div className="clearfix" />
        {/* <SpreadMap
            Wwhitepaper={HomeDemo6Wwhitepaper}
        /> */}
        {/* <TokenDistribution
            data={TokenDistributionInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
        {/* <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
        {/* <Features2
            icoCounterClass="ico-counter dotted-bg mb-30"
            addOther={true}
            FeaturesOtherTop={FeaturesOtherTop}
            FeaturesOtherDown={FeaturesOtherDown}
        /> */}
        {/* <Faq
            data={FaqInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
        <OurTeam
            data={OurTeamInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <Subscribe />
        <OurBlog
            data={OurBlogInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <FooterPages
            ClassSpanTitle="gradient-text blue"
        />
      </div>
    );
};

export default HomeDemo6Container