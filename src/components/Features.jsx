import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function Features({ className = "" }) {
  const { t } = useTranslation();
  const [featuresRef, isFeaturesVisible] = useScrollAnimation(0.1, "-50px");

  const featuresData = [
    {
      image: "img/copy.png",
      title: t("Все нужные ссылки и\u00A0сведения"),
      description: t(
        "Вся информация – в одно касание. Рассказывайте и показывайте, делитесь контактами, работами в портфолио, видео и многим другим. Принимайте оплату картой, на электронный кошелек или криптокошелек."
      ),
      area: "area-a",
    },
    {
      image: "img/custom.png",
      title: t("Полная кастомизация"),
      description: t(
        "Компонуйте информацию так, как удобно вам! Используйте уже готовые шаблоны или создавайте свой дизайн при помощи удобного визуального конструктора."
      ),
      area: "area-b",
    },
    {
      area: "area-c",
      className: "video",
    },
    {
      area: "area-d",
      className: "bg-[url('/img/background.svg')] bg-cover bg-top",
      children: (
        <div className="bg-[url('/img/pattern.png')] bg-cover bg-top h-full w-full text-left">
          <h3 className="mb-2 relative z-10">
            {t("Стильно. Удобно. Эффективно.")}
          </h3>
          <h4 className="mb-5 relative z-10">{t("Выбери свое решение")}</h4>
          <button>
            <a href="https://one-click.app/register">{t("Подключиться")}</a>
          </button>
        </div>
      ),
    },
    {
      image: "img/settings.png",
      title: t("Вечный код"),
      description: t(
        "Ваша web страница и QR-код будут работать всегда. Меняйте содержимое сколько угодно – код обновлять не потребуется."
      ),
      area: "area-e",
    },
    {
      image: "img/redo.png",
      title: t("Быстрота и удобство"),
      description: t(
        "Облачные технологии обеспечивают быструю и стабильную загрузку созданных страниц с любого устройства, без установки сторонних приложений."
      ),
      area: "area-f",
    },
    {
      image: "img/time.png",
      title: t("Экономия времени и\u00A0средств"),
      description: t(
        "Экономьте на печати обычных визиток и веб-разработке. Создавайте свои страницы и каталоги за считанные минуты и принимайте заказы."
      ),
      area: "area-g",
    },
    {
      image: "img/picture.png",
      title: t("Современное трендовое\u00A0решение"),
      description: t(
        "Уникальный NFC-аксессуар с вашим дизайном: брелок, браслет, пластиковая карта и многое другое. Компактный QR-код для стикеров и табличек."
      ),
      area: "area-h",
    },
  ];

  return (
    <>
      <div
        id="features"
        ref={featuresRef}
        className={`${className} py-7 md:py-10 scroll-animate-stagger ${
          isFeaturesVisible ? "animate-in" : ""
        }`}
      >
        <div className="container">
          <h2 className="text-center mb-8">{t("Преимущества")}</h2>
          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${feature.area} py-8 px-5 ${
                  feature.className || ""
                }`}
              >
                {feature.children ? (
                  feature.children
                ) : (
                  <>
                    {feature.image && (
                      <img src={feature.image} className="w-15 h-15" />
                    )}
                    {feature.title && (
                      <h4 className="text-left">{feature.title}</h4>
                    )}
                    {feature.description && (
                      <p className="text-left">{feature.description}</p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
