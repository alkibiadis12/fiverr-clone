import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import { cards, projects } from "../../data";
import FeaturesFreelance from "../../components/featuresFreelance/FeaturesFreelance";
import FeaturesBusiness from "../../components/featuresBusiness/FeaturesBusiness";
import GigCard from "../../components/projectCard/ProjectCard";
import Container from "../../components/container/Container";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Container margin="50px 0px">
        <Slide slidesPerView={5} slidesPerGroup={5}>
          {cards.map((card) => (
            <CatCard item={card} key={card.id} />
          ))}
        </Slide>
      </Container>
      <FeaturesFreelance />
      <FeaturesBusiness />
      <Container margin="50px 0px 150px 0px">
        <Slide slidesPerView={4} slidesPerGroup={4}>
          {projects.map((project) => (
            <GigCard item={project} key={project.id} />
          ))}
        </Slide>
      </Container>
    </div>
  );
};

export default Home;
