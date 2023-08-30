import "./Gigs.scss";
import { gigs } from "../../data.js";
import GigCard from "../../components/gigCard/GigCard";
import { useState } from "react";

const Gigs = () => {
  const dummyOptions = ["Newest", "Best Selling"];

  const [sortBy, setSortBy] = useState(dummyOptions[0]);
  const [isSortByWindowOpen, setIsSortByWindowOpen] = useState(false);

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">{"FIVERR > GRAPHICS & DESIGN"}</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="inputs">
          <div className="left">
            <span>Budget</span>
            <input placeholder="min" type="number" />
            <input placeholder="max" type="number" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span onClick={() => setIsSortByWindowOpen(!isSortByWindowOpen)}>
              Sort by <strong>{sortBy}</strong>
            </span>
            {isSortByWindowOpen && (
              <div className="sortBy">
                {dummyOptions.map((option, index) => {
                  if (option === sortBy) return null;
                  return (
                    <span
                      key={option}
                      onClick={() => {
                        setSortBy(dummyOptions[index]);
                        setIsSortByWindowOpen(!isSortByWindowOpen);
                      }}
                    >
                      {option}
                    </span>
                  );
                })}
              </div>
            )}
            <img
              src="./img/down.png"
              alt="down-arrow"
              onClick={() => setIsSortByWindowOpen(!isSortByWindowOpen)}
            />
          </div>
        </div>
        <div className="gigsContainer">
          {gigs.map((gig) => (
            <GigCard item={gig} key={gig.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
