import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function Card({ image, title, descriptions }) {
  return (
    <div className="mb-5 md:mb-0 card h-full">
      <img
        src={image}
        className="block"
        width={300}
        height={300}
        loading="lazy"
        alt={title}
      />
      <div className="flex flex-col gap-2 mb-2">
        <h4>{title}</h4>
        {descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
    </div>
  );
}

function Overview({ className = "" }) {
  const { t } = useTranslation();
  const [overviewRef, isOverviewVisible] = useScrollAnimation(0.25, "0px");
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const cardsData = [
    {
      image: "/img/dynamic-qr.webp",
      title: t("products.dynamicQr.title"),
      descriptions: [
        t("products.dynamicQr.description.1"),
        t("products.dynamicQr.description.2"),
      ],
    },
    {
      image: "/img/qr-menu-catalog.webp",
      title: t("products.qrMenu.title"),
      descriptions: [
        t("products.qrMenu.description.1"),
        t("products.qrMenu.description.2"),
      ],
    },
    {
      image: "/img/qr-nfc-card.webp",
      title: t("products.nfcCard.title"),
      descriptions: [
        t("products.nfcCard.description.1"),
        t("products.nfcCard.description.2"),
        t("products.nfcCard.description.3"),
      ],
    },
    {
      image: "/img/qr-file.webp",
      title: t("products.qrFile.title"),
      descriptions: [t("products.qrFile.description")],
    },
    {
      image: "/img/digital-invitation.webp",
      title: t("products.digitalInvitation.title"),
      descriptions: [
        t("products.digitalInvitation.description.1"),
        t("products.digitalInvitation.description.2"),
      ],
    },
    {
      image: "/img/portfolio.webp",
      title: t("products.portfolio.title"),
      descriptions: [t("products.portfolio.description")],
    },
    {
      image: "/img/corporate-presentation.webp",
      title: t("products.corporatePresentation.title"),
      descriptions: [t("products.corporatePresentation.description")],
    },
    {
      image: "/img/landing.webp",
      title: t("products.landing.title"),
      descriptions: [t("products.landing.description")],
    },
  ];

  return (
    <>
      <div
        ref={overviewRef}
        className={`overview md:pt-40 pt-30 pb-10 xl:mt-[-250px] md:mt-[-200px] mt-[-100px] sm:mt-[-150px] ellipse scroll-animate-stagger ${
          isOverviewVisible ? "animate-in" : ""
        } ${className}`}
      >
        <div className="container relative">
          {/* Custom Navigation Buttons */}
          <button
            onClick={handlePrevClick}
            className="swiper-button-prev"
            aria-label="Previous slide"
          ></button>

          <button
            onClick={handleNextClick}
            className="swiper-button-next"
            aria-label="Next slide"
          ></button>

          <Swiper
            ref={swiperRef}
            spaceBetween={16}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet--active",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {cardsData.map((card, index) => (
              <SwiperSlide key={index}>
                <Card {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="m-auto block w-[300px] mt-10">
          <a href={"https://one-click.app/register"}>{t("common.register")}</a>
        </button>
      </div>
    </>
  );
}

export default Overview;
