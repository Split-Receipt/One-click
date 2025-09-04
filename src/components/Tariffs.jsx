import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function Tariffs({ className = "" }) {
  const { t } = useTranslation();
  const [tariffsRef, isTariffsVisible] = useScrollAnimation(0.1, "-50px");
  const swiperRef = useRef(null);

  const tariffsData = [
    {
      name: t('common.free.title'),
      description: t('tariffs.free.description'),
      price: [],
      features: [
        t('tariffs.features.qrPage.1'),
        t('tariffs.features.image.1'),
        t('tariffs.features.text.2'),
        t('tariffs.features.social.4'),
        t('tariffs.features.externalLinks.2'),
        t('menu.contacts'),
        t('tariffs.features.logo'),
      ],
      buttonText: t('common.connect'),
      buttonLink: "https://one-click.app/register",
      isSpecial: false,
    },
    {
      name: t('tariffs.standard.title'),
      description: t('tariffs.standard.description'),
      price: [
        {
          period: t('tariffs.oneTime'),
          value: 30,
        },
      ],
      features: [
        t('tariffs.features.qrPage.1'),
        t('tariffs.features.image.1'),
        t('tariffs.features.text.2'),
        t('tariffs.features.social.4'),
        t('tariffs.features.externalLinks.2'),
        t('menu.contacts'),
        t('tariffs.features.backgroundImage'),
        t('tariffs.features.logoDesktop'),
        t('tariffs.features.qrCode'),
        t('tariffs.features.files'),
      ],
      buttonText: t('common.connect'),
      buttonLink: "https://one-click.app/register",
      isSpecial: true,
    },
    {
      name: t('tariffs.professional.title'),
      description: t('tariffs.professional.description'),
      price: [
        {
          period: t('tariffs.oneTime'),
          value: 130,
        },
      ],
      features: [
        t('tariffs.features.qrPage.2'),
        t('tariffs.features.image.more'),
        t('tariffs.features.text.more'),
        t('tariffs.features.social.more'),
        t('tariffs.features.externalLinks.more'),
        t('menu.contacts'),
        t('tariffs.features.backgroundImage'),
        t('tariffs.features.logoDesktop'),
        t('tariffs.features.qrCode'),
        t('tariffs.features.files'),
        t('tariffs.features.slides'),
        t('tariffs.features.categories'),
        t('tariffs.features.video'),
        t('tariffs.features.location'),
        t('tariffs.features.faq'),
        t('tariffs.features.logoCarousel'),
        t('tariffs.features.nfc'),
      ],
      buttonText: t('common.connect'),
      buttonLink: "https://one-click.app/register",
      isSpecial: false,
    },
    {
      name: t('tariffs.company.title'),
      description: t('tariffs.company.description'),
      price: [
        {
          period: t('tariffs.month'),
          value: 35,
        },
        {
          period: t('tariffs.year'),
          value: 300,
        },
      ],
      features: [
        t('tariffs.features.qrPage.5'),
        t('tariffs.features.image.more'),
        t('tariffs.features.text.ai'),
        t('tariffs.features.social.more'),
        t('tariffs.features.externalLinks.more'),
        t('menu.contacts'),
        t('tariffs.features.backgroundImage'),
        t('tariffs.features.logoDesktop'),
        t('tariffs.features.qrCode'),
        t('tariffs.features.files'),
        t('tariffs.features.slides'),
        t('tariffs.features.categories'),
        t('tariffs.features.video'),
        t('tariffs.features.location'),
        t('tariffs.features.faq'),
        t('tariffs.features.logoCarousel'),
        t('tariffs.features.catalog'),
        t('tariffs.features.menu'),
        t('tariffs.features.button'),
        t('tariffs.features.popup'),
        t('tariffs.features.videoWidget'),
      ],
      buttonText: t('common.connect'),
      buttonLink: "https://one-click.app/register",
      isSpecial: false,
    },
  ];

  return (
    <>
      <div
        id="tariffs"
        ref={tariffsRef}
        className={`${className} pt-7 md:pt-10 scroll-animate-stagger ${
          isTariffsVisible ? "animate-in" : ""
        }`}
      >
        <div className="container text-center relative">
          <h2>{t('menu.tariffs')}</h2>
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            loop={true}
            initialSlide={tariffsData.findIndex((tariff) => tariff.isSpecial)}
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
              1280: {
                slidesPerView: 4,
              },
            }}
            className="w-full tariffs !md:pt-15 !pt-10"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {tariffsData.map((tariff, index) => (
              <SwiperSlide key={index} className="p-2 w-full">
                <div
                  className={`feature-card py-5 px-5 ${
                    tariff.isSpecial ? "feature-card--special" : ""
                  }`}
                >
                  <p className="uppercase text-xl text-white font-bold">
                    {tariff.name}
                  </p>
                  <p>{tariff.description}</p>
                  <h4 className="leading-tight">
                    {!tariff.price.length
                      ? t('common.free')
                      : tariff.price.map((price, priceIndex) => (
                        <p key={priceIndex}>
                          S / {price.value.toFixed(2)} / {price.period.toLowerCase()}
                        </p>
                      ))
                      }
                  </h4>
                  <div className="py-2">
                    {tariff.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 mb-2 text-sm"
                      >
                        <img src="img/check.svg" className="w-4 h-4" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className={`mt-auto ${
                      tariff.isSpecial ? "button--special" : ""
                    }`}
                  >
                    <a href={tariff.buttonLink}>{tariff.buttonText}</a>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Tariffs;
