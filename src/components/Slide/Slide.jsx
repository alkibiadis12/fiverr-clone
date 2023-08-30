import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "./Slide.scss";
import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";

const Slide = ({
  children,
  slidesPerView,
  slidesPerGroup,
  onlyImageChildren = false,
}) => {
  return (
    <div className={onlyImageChildren ? "onlyImageChildren" : ""}>
      <Swiper
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        spaceBetween={30}
        loop={children.length >= slidesPerView * 2 ? true : false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Slide.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  slidesPerView: PropTypes.number.isRequired,
  slidesPerGroup: PropTypes.number.isRequired,
  onlyImageChildren: PropTypes.bool,
};

export default Slide;
