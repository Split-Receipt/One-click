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
      name: t("Бесплатный"),
      description: t("Визитная карточка"),
      price: [],
      features: [
        t("1 страница с QR"),
        t("1 изображение"),
        t("2 блока текста"),
        t("4 ссылки на социальные сети"),
        t("2 внешние ссылки"),
        t("Контакты"),
        t("Логотип ONE CLICK"),
      ],
      buttonText: t("Подключиться"),
      buttonLink: "https://one-click.app/register",
      isSpecial: false,
    },
    {
      name: t("Стандарт"),
      description: t("Визитная карточка, Приглашение, QR-файл"),
      price: [
        {
          period: t("единоразово"),
          value: 30,
        },
      ],
      features: [
        t("1 страница с QR"),
        t("1 изображение"),
        t("2 блока текста"),
        t("4 ссылки на социальные сети"),
        t("2 внешние ссылки"),
        t("Контакты"),
        t("Собственное фоновое изображение"),
        t("Собственный логотип для рабочего стола"),
        t("Иконка для QR-кода"),
        t("Загрузка файлов PDF, Word, Excel"),
      ],
      buttonText: t("Подключиться"),
      buttonLink: "https://one-click.app/register",
      isSpecial: true,
    },
    {
      name: t("Профессионал"),
      description: t(
        "Корпоративная презентация, Профессиональная карточка, Портфолио"
      ),
      price: [
        {
          period: t("единоразово"),
          value: 130,
        },
      ],
      features: [
        t("2 страницы с QR"),
        t("Изображения"),
        t("Блоки текста"),
        t("Ссылки на социальные сети"),
        t("Внешние ссылки"),
        t("Контакты"),
        t("Собственное фоновое изображение"),
        t("Собственный логотип для рабочего стола"),
        t("Иконка для QR-кода"),
        t("Загрузка файлов PDF, Word, Excel"),
        t("Слайды"),
        t("Категории"),
        t("Видео YouTube, Vimeo"),
        t("Местоположение, Карта"),
        t("FAQ"),
        t("Логотип-карусель"),
        t("NFC-карта"),
      ],
      buttonText: t("Подключиться"),
      buttonLink: "https://one-click.app/register",
      isSpecial: false,
    },
    {
      name: t("Компания"),
      description: t("Цифровое меню, Каталог, Лендинг"),
      price: [
        {
          period: t("месяц"),
          value: 35,
        },
        {
          period: t("год"),
          value: 300,
        },
      ],
      features: [
        t("5 страниц с QR"),
        t("Изображения"),
        t("Блоки текста с ИИ-переводчиком"),
        t("Ссылки на социальные сети"),
        t("Внешние ссылки"),
        t("Контакты"),
        t("Собственное фоновое изображение"),
        t("Собственный логотип для рабочего стола"),
        t("Иконка для QR-кода"),
        t("Загрузка файлов PDF, Word, Excel"),
        t("Слайды"),
        t("Категории"),
        t("Видео YouTube, Vimeo"),
        t("Местоположение, Карта"),
        t("FAQ"),
        t("Логотип-карусель"),
        t("Цифровой каталог с ИИ-переводчиком"),
        t("Цифровое меню с ИИ-переводчиком"),
        t("1 анимированная кнопка-ссылка"),
        t("1 всплывающий баннер (POP-UP)"),
        t("Видеовиджеты презентация, отзывы, карусель"),
      ],
      buttonText: t("Подключиться"),
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
          <h2>{t("Тарифы")}</h2>
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
                      ? t("Бесплатно")
                      : tariff.price.map((price, priceIndex) => (
                        <p key={priceIndex}>
                          S / {price.value.toFixed(2)} / {price.period}
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
