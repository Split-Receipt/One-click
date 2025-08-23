import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function Tariffs({ className = "" }) {
  const { t } = useTranslation();
  const [tariffsRef, isTariffsVisible] = useScrollAnimation(0.1, "-50px");
  const [activeTab, setActiveTab] = useState("monthly");

  const tabs = [
    {
      id: "monthly",
      label: t("1 месяц"),
      discount: 0,
    },
    {
      id: "biannual",
      label: t("6 месяцев (-30%)"),
      discount: 30,
    },
    {
      id: "annual",
      label: t("12 месяцев (-50%)"),
      discount: 50,
    },
  ];

  const tariffsData = [
    {
      name: t("Базовый"),
      description: t("Запусти свой бизнес!"),
      period: t("навсегда"),
      price: 0,
      features: [
        t("1 страница с QR"),
        t("Логотип изображение"),
        t("Ссылки на соц. сети"),
        t("Контакты"),
        t("Логотип ONE CLICK"),
      ],
      buttonText: t("Бесплатно"),
      buttonLink: "https://one-click.app/register",
      isSpecial: false,
    },
    {
      name: t("Серебряный"),
      description: t("Усиль свой бизнес!"),
      period: t("единоразово"),
      price: 130,
      features: [
        t("2 страницы с QR"),
        t("Ваш Лого в центре QR"),
        t("Текст Описание вашего продукта или сервиса"),
        t("Фото вашего продукта"),
        t("Видео"),
        t("Кнопки ссылки на ваши внешние ресурсы"),
      ],
      buttonText: t("Купить"),
      buttonLink: "https://one-click.app/register",
      isSpecial: true,
    },
    {
      name: t("Золотой"),
      description: t("Рост твоего бизнеса!"),
      period: t("месяц"),
      price: 30,
      subtitle: t("Все из тарифа") + "\n" + t("СЕРЕБРЯНЫЙ +"),
      features: [
        t("10 страниц с QR"),
        t("Анимированный логотип"),
        t("Каталог ваших продуктов"),
        t("Меню для вашего ресторана"),
        t("PDF максимум 5 мб"),
        t("1 анимированная кнопка СТА"),
        t("1 видео-презентация"),
        t("3 видео-отзыва ваших клиентов"),
        t("Видео-карусель из 3 видео"),
        t("Без логотипа ONE CLICK"),
      ],
      buttonText: t("Подписаться"),
      buttonLink: "https://one-click.app/register",
      isSpecial: false,
    },
    {
      name: t("Платиновый"),
      description: t("Улучшит твой бизнес!"),
      period: t("месяц"),
      price: 50,
      subtitle: t("Все из тарифа") + "\n" + t("ЗОЛОТОЙ +"),
      features: [
        t("1 pop-up баннер"),
        t("1 форма регистрации"),
        t("1 форма БРИФ"),
      ],
      buttonText: t("Подписаться"),
      buttonLink: "https://one-click.app/register",
      isSpecial: false,
    },
    {
      name: t("Алмазный"),
      description: t("Улучшит твой бизнес!"),
      period: t("месяц"),
      price: 60,
      subtitle: t("Все из тарифа") + "\n" + t("ПЛАТИНОВЫЙ +"),
      features: [
        t("3 pop-up баннер"),
        t("3 форма ОПРОСА"),
        t("3 форма БРИФ"),
        t("Колесо фортуны"),
      ],
      buttonText: t("Подписаться"),
      buttonLink: "https://one-click.app/register",
      isSpecial: false,
    },
  ];

  return (
    <>
      <div
        id="tariffs"
        ref={tariffsRef}
        className={`${className} py-10 scroll-animate-stagger ${
          isTariffsVisible ? "animate-in" : ""
        }`}
      >
        <div className="container text-center">
          <h2 className="mb-8">{t("Тарифы")}</h2>
          <div className="flex items-center justify-between mb-4 md:mb-6 bg-[#0D0D0D] border border-[#3D3D3D] max-w-[470px] min-w-[300px] w-fit mx-auto rounded-lg">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`md:p-4 p-2 rounded-md transition-colors font-bold border ${
                  activeTab === tab.id
                    ? "bg-[#9560EB] text-white border-[#AA80EE] "
                    : "border-[#0D0D0D]"
                }`}
              >
                {tab.label}
              </div>
            ))}
          </div>
          <p className="mb-8">
            {t(
              `При подписке на 1 год получаете скидку 50%, при подписке на 2 года — свяжитесь с нами`
            )}{" "}
            <a href="tel:+51953245941">+51 953245941</a>
          </p>
          <div className="flex gap-3 justify-between">
            {tariffsData.map((tariff, index) => (
              <div
                key={index}
                className={`feature-card w-full py-5 px-3 ${
                  tariff.isSpecial ? "feature-card--special" : ""
                }`}
              >
                <p className="uppercase text-xl text-white font-bold">
                  {tariff.name}
                </p>
                <p>{tariff.description}</p>
                <h4 className="leading-tight">
                  {tariff.price === 0
                    ? t("0")
                    : t("S / ") +
                      (
                        tariff.price *
                        (1 -
                          tabs.find((tab) => tab.id === activeTab)?.discount /
                            100)
                      ).toFixed(2)}{" "}
                  /<p>{tariff.period}</p>
                </h4>
                {tariff.subtitle && (
                  <p className="text-sm text-white font-bold">
                    {tariff.subtitle.includes("\n") ? (
                      <>
                        {tariff.subtitle.split("\n").map((line, lineIndex) => (
                          <span key={lineIndex}>
                            {line}
                            {lineIndex <
                              tariff.subtitle.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </>
                    ) : (
                      tariff.subtitle
                    )}
                  </p>
                )}
                <div className="py-2">
                  {tariff.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 mb-2"
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tariffs;
