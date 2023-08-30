import React from "react";
import "./Gig.scss";
import Slide from "../../components/Slide/Slide";
import Stars from "../../components/stars/Stars";
import UserReview from "../../components/userReview/UserReview";
import { gigs } from "../../data.js";

const dummyText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita quidem possimus nihil aliquid iste, magni sapiente. Dolore quae veritatis earum fugit in, veniam aliquid sapiente natus perferendis quo odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita quidem possimus nihil aliquid iste, magni sapiente. Dolore quae veritatis earum fugit in, veniam aliquid sapiente natus perferendis quo odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita quidem possimus nihil aliquid iste, magni sapiente. Dolore quae veritatis earum fugit in, veniam aliquid sapiente natus perferendis quo odio.";

const dummyReviewsArray = [
  { id: "a" },
  { id: "b" },
  { id: "c" },
  { id: "d" },
  { id: "e" },
];

const dummyTitle = "I will create ai generated art for you";

const dummySlideItems = [
  <img
    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
    alt=""
    key={"z"}
  />,
  <img
    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
    alt=""
    key={"y"}
  />,
  <img
    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
    alt=""
    key={"x"}
  />,
];

const Gig = () => {
  //dummy data
  const { img, pp, desc, price, star, username } = gigs[0];

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">{"FIVERR > GRAPHICS & DESIGN >"}</span>
          <h1>{dummyTitle}</h1>
          <div className="ppUsernameStars">
            <img src={pp} alt="pp" className="pp" />
            <span className="username">{username}</span>
            <Stars numberOfStars={star} />
          </div>
          <Slide slidesPerView={1} slidesPerGroup={1} onlyImageChildren>
            {dummySlideItems}
          </Slide>

          <div className="description">
            <h2>About this Gig</h2>
            <p>{dummyText}</p>
          </div>
          <div className="aboutSellerContainer">
            <h2 className="aboutSellerText">About the Seller</h2>
            <div className="aboutSellerInfo">
              <img src={img} alt="seller-avatar" />
              <div className="usernameSellerStarsButton">
                <span>{username}</span>
                <Stars numberOfStars={star} />
                <button>Contact Me</button>
              </div>
            </div>
            <div className="sellerInfo">
              <div>
                <div className="sellerInfoCol">
                  <div>
                    <span>From</span>
                    <span>USA</span>
                  </div>
                  <div>
                    <span>Avg. response time</span>
                    <span>4 hours</span>
                  </div>
                  <div>
                    <span>Languages</span>
                    <span>English</span>
                  </div>
                </div>
                <div className="sellerInfoCol">
                  <div>
                    <span>Member since</span>
                    <span>Aug 2022</span>
                  </div>
                  <div>
                    <span>Last delivery</span>
                    <span>1 day</span>
                  </div>
                </div>
                <div></div>
              </div>
              <hr />
              <p>{dummyText}</p>
            </div>
            <div className="reviews">
              <h2>Reviews</h2>
              {dummyReviewsArray.length > 0 &&
                dummyReviewsArray.map((review) => (
                  <UserReview
                    key={review.id}
                    pp={pp}
                    username={username}
                    numberOfStars={star}
                    reviewText={dummyText}
                    nationality="United States"
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h2>1 AI generated image</h2>
            <span>$ {price}</span>
          </div>
          <p>{desc}</p>
          <div className="icons">
            <div>
              <img src="/img/clock.png" alt="clock" />
              <span>2 Days Delivery</span>
            </div>
            <div>
              <img src="/img/recycle.png" alt="recycle" />
              <span>2 Days Delivery</span>
            </div>
          </div>
          <div className="checkers">
            <div>
              <img src="/img/greencheck.png" alt="greencheck" />
              <span>Prompt writing</span>
            </div>
            <div>
              <img src="/img/greencheck.png" alt="greencheck" />
              <span>Artwork delivery</span>
            </div>
            <div>
              <img src="/img/greencheck.png" alt="greencheck" />
              <span>Image upscaling</span>
            </div>
            <div>
              <img src="/img/greencheck.png" alt="greencheck" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
