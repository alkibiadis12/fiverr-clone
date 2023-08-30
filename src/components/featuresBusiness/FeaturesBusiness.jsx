import "./FeaturesBusiness.scss";
import InfoItem from "../general/InfoItem";

const FeaturesBusiness = () => {
  return (
    <div className="featuresBusiness">
      <div className="container">
        <div className="item">
          <h1>
            fiverr <i>business</i>
          </h1>
          <h1>A business solution designed for teams</h1>
          <p>
            Upgrade to a curated experience packed with tools and banefits,
            dedicated to business
          </p>
          <InfoItem
            title="Connect to freelancers with proven business experience"
            img="./img/check.png"
          />
          <InfoItem
            title="Get matched with the perfect talent by a customer success manager"
            img="./img/check.png"
          />
          <InfoItem
            title="Manage teamwork and boost productivity with one powerful workspace"
            img="./img/check.png"
          />
          <button>Explore Fiverr Business</button>
        </div>
        <div className="item">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt="designers"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesBusiness;
