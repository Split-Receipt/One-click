import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function Card({ image, title, descriptions }) {
  return (
    <div className="mb-5 md:mb-0 card h-full">
      <img src={image} className="block" width={300} height={300} />
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
    console.log("Prev clicked, swiperRef:", swiperRef.current);
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    console.log("Next clicked, swiperRef:", swiperRef.current);
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const cardsData = [
    {
      image: "/img/dynamic-qr.webp",
      title: t("Динамический QR"),
      descriptions: [
        t(`Создается с целью привлечения и конвертации посетителей в целевое действие (например, покупку, подписку, заполнение формы). 
            QR-страница фокусируется на продвижении одного конкретного продукта, услуги или события.`),
        t(`Мини презентация вашего продукта или услуги с мультиязычностью. 
            Изображение и текст в любом формате. 
            Используйте наш генератор QR-код в режиме «РЕДИРЕКТ» бесплатно! 
            С этим QR-ссылка напрямую связывается с вашим сайтом, изображением или архивом, и поделиться ею быстро и удобно. 
            Регистрируйтесь сейчас и пользуйтесь преимуществами наших услуг!`),
      ],
    },
    {
      image: "/img/qr-menu-catalog.webp",
      title: t("QR-меню или каталог"),
      descriptions: [
        t(
          `Цифровое меню: это современное
решение для ресторанов и кафе. Оно
позволяет гостям легко просматривать
блюда с фотографиями, получать актуальные цены и описание ингредиентов, выбирать язык интерфейса и быстро оформлять заказ.
Дополнительным преимуществом
является возможность оставлять
отзывы о блюдах, что помогает другим
клиентам в выборе и повышает
доверие к заведению.`
        ),
        t(
          `Цифровой каталог: это эффективный инструмент для презентации товаров и услуг. Он предоставляет полный обзор ассортимента, включая фото, характеристики и акции, а также даёт возможность мгновенно обновлять
данные. Клиенты могут оставлять свои
свидетельства и комментарии к
товарам, формируя живую обратную
связь и репутацию бренда. Каталог
доступен через QR-код, работает на
разных языках и помогает бизнесу
расширять охват и привлекать
новых клиентов в любой точке мира.`
        ),
      ],
    },
    {
      image: "/img/qr-nfc-card.webp",
      title: t("QR/NFC-визитка"),
      descriptions: [
        t(
          `Персональная визитка предназначена для предоставления краткой информации о компании, продукте, услуге или личности. Содержит основные сведения: описание деятельности, перечень услуг, контакты, и другая важная информация.`
        ),
        t(
          `На нашей платформе легко создавать персонализированные электронные открытки. Выберите бесплатный шаблон для начала работы или создайте свою собственную открытку с нуля для любого случая. Зарегистрируйтесь сегодня и воспользуйтесь нашими преимуществами!`
        ),
        t(
          `Цифровая визитка, которая улучшает нетворкинг. Подарите цифровой фирменный стиль всем своим сотрудникам и превратите их в послов вашего бренда. Получите свои цифровые фирменные визитки!`
        ),
      ],
    },
    {
      image: "/img/qr-file.webp",
      title: t("QR-Файл"),
      descriptions: [
        t(
          `Это цифровой файл, доступный по уникальному QR-коду. При сканировании клиент сразу попадает на нужную информацию: документы, меню, каталог, инструкцию или любой другой материал. Удобно для бизнеса, так как исключает печатные расходы и позволяет обновлять данные онлайн без перепечатки.`
        ),
      ],
    },
    {
      image: "/img/digital-invitation.webp",
      title: t("Приглашения, открытки (Digital Invitation)"),
      descriptions: [
        t(
          `Персонализированное приглашение с дизайном, фото, текстом и геолокацией. Можно добавить (подтверждение участия), таймер обратного отсчёта, фото/видео и кнопки перехода в WhatsApp или соцсети. Работает по ссылке и через QR-код — гости не теряют приглашение и всегда имеют его под рукой.`
        ),
        t(
          `Цифровая открытка — это яркий и
креативный способ передать эмоции и впечатления. Она легко персонализируется, позволяет собирать отклики получателей. Такой формат выделяется среди обычных сообщений и создаёт особое впечатление. Возможные варианты: поздравительные открытки, праздничные, благодарственные), пригласительные и промо-открытки.`
        ),
      ],
    },
    {
      image: "/img/portfolio.webp",
      title: t("Портфолио"),
      descriptions: [
        t(
          `Онлайн-презентация работ, проектов или услуг в удобном и современном формате. Подходит для фотографов, дизайнеров, архитекторов, маркетологов, юристов, врачей и других
специалистов. Можно встроить фото, видео, отзывы клиентов и контактные кнопки для заявок.`
        ),
      ],
    },
    {
      image: "/img/corporate-presentation.webp",
      title: t("Корпоративная презентация"),
      descriptions: [
        t(
          `Корпоративная презентация — это
визуально структурированный
инструмент для убедительного
представления компании, её ценностей
и продуктов, позволяющий
адаптировать содержание под
конкретную аудиторию и укреплять
доверие через наглядность и профессиональный имидж.`
        ),
      ],
    },
    {
      image: "/img/landing.webp",
      title: t("Лендинг (Landing Page)"),
      descriptions: [
        t(
          `Одностраничный сайт с акцентом на конверсию. Используется для рекламы, акций, регистрации на мероприятия или продажи конкретного продукта. Содержит чёткое предложение, преимущества, отзывы, формы захвата (лиды) и кнопки для быстрого контакта.`
        ),
      ],
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
          <a href={"https://one-click.app/register"}>Зарегистрироваться</a>
        </button>
      </div>
    </>
  );
}

export default Overview;
