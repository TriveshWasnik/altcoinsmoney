import React from "react";

function ContactUsEmail({
  title = "Contact Us",
  emailHelp = "help@altcoinsmoney.ai",
  emailTeam = "team@altcoinsmoney.ai",
}) {
  return (
    <div className="contactUsEmailContainer">
      <h1 className="title gradient-text">{title}</h1>
      <p className="support-desc">
        <span className="support-heading">Support Email</span> -
        <a style={{ color: "#7450fe" }} href={`mailto:${emailHelp}`}>
          {emailHelp}
        </a>
        &nbsp; Sending an email to this email address automatically creates a
        support ticket.
      </p>
      <p className="support-desc">
        Not satisfied with support team? Reach out to the core team,&nbsp;
        <a style={{ color: "#7450fe" }} href={`mailto:${emailTeam}`}>
          {emailTeam}
        </a>
        .
      </p>
    </div>
  );
}

export default ContactUsEmail;
