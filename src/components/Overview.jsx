import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function Card({ image, title, descriptions, buttonText, buttonLink }) {
  return (
    <div className="card mb-5 md:mb-0">
      <img src={image} className="scale-80 md:scale-100 block" />
      <div className="flex flex-col gap-2 mb-2">
        <h4>{title}</h4>
        {descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
      <button className="w-full">
        <a href={buttonLink}>{buttonText}</a>
      </button>
    </div>
  );
}

function Overview({ className = "" }) {
  const { t } = useTranslation();
  const [overviewRef, isOverviewVisible] = useScrollAnimation(0.25, "0px");

  const cardsData = [
    {
      image: "img/card-1.png",
      title: t("Динамический QR"),
      descriptions: [
        t(`Создается с целью привлечения и конвертации посетителей в целевое действие (например, покупку, подписку, заполнение формы). 
            QR-страница фокусируется на продвижении одного конкретного продукта, услуги или события.`),
        t(`Мини презентация вашего продукта или услуги с мультиязычностью. 
            Изображение и текст в любом формате. 
            Используйте наш генератор QR-код в режиме «РЕДИРЕКТ» бесплатно! 
            С этим QR-ссылка напрямую связывается с вашим сайтом, изображением или архивом, и поделиться ею быстро и удобно. 
            Регистрируйтесь сейчас и пользуйтесь преимуществами наших услуг!`),
        t("QR со своим лого"),
        t(
          `Создавайте высокоэффективные QR-коды, точно представляющие ваш бренд и рассчитанные на высокое количество сканирований. Нанесите QR-код с логотипом вашего бренда!`
        ),
      ],
      buttonText: t("Узнать больше"),
      buttonLink: "https://one-click.app/register",
    },
    {
      image: "img/card-2.png",
      title: t("QR-меню или каталог"),
      descriptions: [
        t(
          `Каталог, где можно купить товары или услуги онлайн. Покупатели могут просматривать товары, оформлять заказы и производить оплату онлайн. Универсальное решение для магазинов и ресторанов.`
        ),
        t(
          `Нет необходимости создавать веб-сайт. Наша платформа для генерации QR-кодов позволяет быстро и легко создавать страницы интернет-магазинов с каталогом или меню. Создайте свой интернет-магазин!`
        ),
      ],
      buttonText: t("Узнать больше"),
      buttonLink: "https://one-click.app/register",
    },
    {
      image: "img/card-3.png",
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
      buttonText: t("Узнать больше"),
      buttonLink: "https://one-click.app/register",
    },
  ];

  return (
    <>
      <div
        ref={overviewRef}
        className={`md:pt-40 pt-30 pb-10 xl:mt-[-250px] md:mt-[-200px] mt-[-100px] sm:mt-[-150px] ellipse scroll-animate-stagger ${
          isOverviewVisible ? "animate-in" : ""
        } ${className}`}
      >
        <div className="md:grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 gap-4 container">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Overview;
