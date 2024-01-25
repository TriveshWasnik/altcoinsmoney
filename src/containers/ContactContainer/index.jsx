import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import "./style/HomeDemo2.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import OurTeam from "../../components/Common/OurTeam";
import { OurTeamInfo } from "../../data/data-containers/ContactDataContainer/data-Contact";
import ContactUsEmail from "../../components/PageContact/ContactUsEmail";

const ContactContainer = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div className="contactus" id="contactus">
      <Header Title="Altcoins Money - Contact" />
      <ContactUsEmail />

      <OurTeam data={OurTeamInfo} ClassSpanTitle="gradient-text" />

      <FooterPages ClassSpanTitle="gradient-text" />
    </div>
  );
};

export default ContactContainer;
