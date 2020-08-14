import React from "react";
import Swiper from "react-id-swiper";

const SwiperHeader = () => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <div className="swiper-button-container swiper-button-container-prev">
        <svg
          width="10"
          height="19"
          viewBox="0 0 10 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.55009 9.38685L9.05822 1.49031C9.24287 1.2961 9.24287 0.984638 9.05822 0.790431C8.87356 0.596224 8.57742 0.596224 8.39276 0.790431L0.550173 9.03875C0.365519 9.23295 0.365519 9.54442 0.550173 9.73863L8.39276 17.9833C8.48335 18.0786 8.60529 18.1299 8.72375 18.1299C8.84221 18.1299 8.96415 18.0822 9.05473 17.9833C9.23939 17.7891 9.23939 17.4776 9.05473 17.2834L1.55009 9.38685Z"
            fill="white"
          />
        </svg>
        <button className="swiper-button-prev"></button>
      </div>
    ),
    renderNextButton: () => (
      <div className="swiper-button-container swiper-button-container-next">
        <svg
          width="10"
          height="19"
          viewBox="0 0 10 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.55824 9.3878L1.05012 17.2843C0.865467 17.4786 0.865467 17.79 1.05012 17.9842C1.23478 18.1784 1.53092 18.1784 1.71557 17.9842L9.55816 9.73591C9.74282 9.5417 9.74282 9.23024 9.55816 9.03603L1.71557 0.791381C1.62499 0.696109 1.50305 0.644809 1.38459 0.644809C1.26613 0.644809 1.14419 0.692445 1.0536 0.791381C0.868948 0.985589 0.868948 1.29705 1.0536 1.49126L8.55824 9.3878Z"
            fill="white"
          />
        </svg>
        <button className="swiper-button-next"></button>
      </div>
    ),
  };
  const Slides = (props) => {
    return (
      <div className="swiper-content d-flex justify-content-start flex-column">
        <span className="swiper-head open-sans-bold">{props.head}</span>
        <p className="swiper-description lato-normal">{props.description}</p>
        <button className="swiper-button d-flex justify-content-center align-items-center">
          <span className="swiper-button-text lato-normal">Читати далі</span>
        </button>
      </div>
    );
  };
  return (
    <Swiper {...params}>
      <div>
        <Slides
          head="Ex ad ullamco dolore aliqua duis excepteur ipsum"
          description="Ipsum laboris laboris elit sint dolore proident ipsum. Eiusmod nisi
        labore cillum ad consectetur."
        />
      </div>
      <div>
        <Slides
          head="Ex ad ullamco dolore aliqua duis excepteur ipsum"
          description="Ipsum laboris laboris elit sint dolore proident ipsum. Eiusmod nisi
        labore cillum ad consectetur."
        />
      </div>
      <div>
        <Slides
          head="Ex ad ullamco dolore aliqua duis excepteur ipsum"
          description="Ipsum laboris laboris elit sint dolore proident ipsum. Eiusmod nisi
        labore cillum ad consectetur."
        />
      </div>
      <div>
        <Slides
          head="Ex ad ullamco dolore aliqua duis excepteur ipsum"
          description="Ipsum laboris laboris elit sint dolore proident ipsum. Eiusmod nisi
        labore cillum ad consectetur."
        />
      </div>
    </Swiper>
  );
};
export default SwiperHeader;
