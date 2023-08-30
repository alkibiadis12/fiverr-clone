import "./FeaturesFreelance.scss";
import InfoItem from "../general/InfoItem";

const FeaturesFreelance = () => {
  return (
    <div className="featuresFreelance">
      <div className="container">
        <div className="item">
          <h1>A whole world of freelace talent at your fingertips</h1>
          <InfoItem
            title="The best for every budget"
            desc="   Find high-quality services at every price point. No hourly rates,
            just project-based pricing."
            img="./img/check.png"
          />
          <InfoItem
            title="Quality work done quickly"
            desc="Find the right freelancer to begin working on your project within
            minutes."
            img="./img/check.png"
          />
          <InfoItem
            title="Protected payments, every time"
            desc="Always know what you'll pay upfront. Your payment isn't released
            until you approve the work."
            img="./img/check.png"
          />
          <InfoItem
            title="24/7 support"
            desc="Find high-quality services at every price point. No hourly rates,
            just project-based pricing."
            img="./img/check.png"
          />
        </div>
        <div className="item">
          <video src="./img/video.mp4" controls></video>
        </div>
      </div>
    </div>
  );
};

export default FeaturesFreelance;
