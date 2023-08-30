import "./Footer.scss";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <FooterItem
            title="Categories"
            linksArray={[
              "Graphics & Design",
              " Digital Marketing",
              "Writing & Translation",
              " Video & Animation",
              "Music & Audio",
              "Programming & Tech",
              "Data",
              "Business",
              "Lifestyle",
              "Photography",
              "Sitemap",
            ]}
          />
          <FooterItem
            title="About"
            linksArray={[
              "Press & News",
              "Partnerships",
              "Privacy Policy",
              "Terms of Service",
              "Investor Relations",
              "Contact Sales",
            ]}
          />
          <FooterItem
            title="Support"
            linksArray={[
              "Help & Support",
              "Trust & Safety",
              "Selling on Liverr",
              "Buying on Liverr",
            ]}
          />
          <FooterItem
            title="Community"
            linksArray={[
              "Customer Success Stories",
              "Community hub",
              "Forum",
              "Events",
              "Blog",
              "Influencers",
              "Affiliates",
              "Podcast",
              "Invite a Friend",
              "Become a Seller",
              "Community Standards",
            ]}
          />
          <FooterItem
            title="More From Fiverr"
            linksArray={[
              "Liverr Business",
              "Liverr Pro",
              "Liverr Logo Maker",
              "Liverr Guides",
              "Get Inspired",
              "Liverr Select",
              "ClearVoice",
              "Liverr Workspace",
              "Learn",
              "Working Not Working",
            ]}
          />
        </div>
        <div className="bottom">
          <div className="left">
            <h2>Fiverr</h2>
            <span>© Liverr International Ltd. {new Date().getFullYear()}</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
