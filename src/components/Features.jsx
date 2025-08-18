import { useTranslation } from "react-i18next";
function Features({ className = "" }) {
  const { t } = useTranslation();
  return (
    <>
      <div id="features" className={`${className} py-10`}>
        <div className="container">
          <h2 className="text-center mb-8">{t("Преимущества")}</h2>
          <div className="features-grid">
            <div className="feature-card area-a py-8 px-5">
              <img src="public/img/copy.png" className="w-15 h-15" />
              <h4 className="text-left">{t("Все нужные ссылки и\u00A0сведения")}</h4>
              <p className="text-left">
                {t(
                  "Вся информация – в одно касание. Рассказывайте и показывайте, делитесь контактами, работами в портфолио, видео и многим другим. Принимайте оплату картой, на электронный кошелек или криптокошелек."
                )}
              </p>
            </div>
            <div className="feature-card area-b py-8 px-5">
              <img src="public/img/custom.png" className="w-15 h-15" />
              <h4 className="text-left">{t("Полная кастомизация")}</h4>
              <p className="text-left">
                {t(
                  "Компонуйте информацию так, как удобно вам! Используйте уже готовые шаблоны или создавайте свой дизайн при помощи удобного визуального конструктора."
                )}
              </p>
            </div>
            <div className="feature-card area-c py-8 px-5">video</div>
            <div className="feature-card area-d bg-[url('public/img/background.svg')] bg-cover bg-top py-8 px-5">
              <div className="bg-[url('public/img/pattern.png')] bg-cover bg-top h-full w-full text-left">
                <h3 className="mb-2">{t("Стильно. Удобно. Эффективно.")}</h3>
                <h4 className="mb-5">{t("Выбери свое решение")}</h4>
                <button>{t("Подключиться")}</button>
              </div>
            </div>
            <div className="feature-card area-e py-8 px-5">
              <img src="public/img/settings.png" className="w-15 h-15" />
              <h4 className="text-left">{t("Вечный код")}</h4>
              <p className="text-left">
                {t(
                  "Ваша web страница и QR-код будут работать всегда. Меняйте содержимое сколько угодно – код обновлять не потребуется."
                )}
              </p>
            </div>
            <div className="feature-card area-f py-8 px-5">
              <img src="public/img/redo.png" className="w-15 h-15" />
              <h4 className="text-left">{t("Быстрота и удобство")}</h4>
              <p className="text-left">
                {t(
                  "Облачные технологии обеспечивают быструю и стабильную загрузку созданных страниц с любого устройства, без установки сторонних приложений."
                )}
              </p>
            </div>
            <div className="feature-card area-g py-8 px-5">
              <img src="public/img/time.png" className="w-15 h-15" />
              <h4 className="text-left">
                {t("Экономия времени и\u00A0средств")}
              </h4>
              <p className="text-left">
                {t(
                  "Экономьте на печати обычных визиток и веб-разработке. Создавайте свои страницы и каталоги за считанные минуты и принимайте заказы."
                )}
              </p>
            </div>
            <div className="feature-card area-h py-8 px-5">
              <img src="public/img/picture.png" className="w-15 h-15" />
              <h4 className="text-left">
                {t("Современное трендовое\u00A0решение")}
              </h4>
              <p className="text-left">
                {t(
                  "Уникальный NFC-аксессуар с вашим дизайном: брелок, браслет, пластиковая карта и многое другое. Компактный QR-код для стикеров и табличек."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
