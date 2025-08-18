import { useTranslation } from "react-i18next";
function Tariffs({ className = "" }) {
  const { t } = useTranslation();
  return (
    <>
      <div id="tariffs" className={`${className} py-10`}>
        <div className="container text-center">
          <h2 className="mb-8">{t("Тарифы")}</h2>
          <p className="mb-8">
            {t(
              `При подписке на 1 год получаете скидку 50%, при подписке на 2 года — свяжитесь с нами`
            )}{" "}
            <a href="tel:+51953245941">+51 953245941</a>
          </p>
          <div className="flex gap-3 justify-between">
            <div className="feature-card w-full py-5 px-3">
              <p className="uppercase text-xl text-white font-bold">
                {t("Базовый")}
              </p>
              <p>{t("Запусти свой бизнес!")}</p>
              <h4 className="leading-tight">
                0 /<p>{t("навсегда")}</p>
              </h4>
              <div className="py-2">
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('1 страница с QR')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Логотип изображение')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Ссылки на соц. сети')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Контакты')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Логотип ONE CLICK')}</span>
                </div>
              </div>
              <button className="mt-auto">{t("Бесплатно")}</button>
            </div>
            <div className="feature-card feature-card--special w-full py-5 px-3">
              <p className="uppercase text-xl text-white font-bold">
                {t("Серебряный")}
              </p>
              <p>{t("Усиль свой бизнес!")}</p>
              <h4 className="leading-tight">
                S / 130.00 /<p>{t("единоразово")}</p>
              </h4>
              <div className="py-2">
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('2 страницы с QR')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Ваш Лого в центре QR')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Текст Описание вашего продукта или сервиса')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Фото вашего продукта')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Видео')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Кнопки ссылки на ваши внешние ресурсы')}</span>
                </div>
              </div>
              <button className="mt-auto button--special">{t("Купить")}</button>
            </div>
            <div className="feature-card w-full py-5 px-3">
              <p className="uppercase text-xl text-white font-bold">
                {t("Золотой")}
              </p>
              <p>{t("Рост твоего бизнеса!")}</p>
              <h4 className="leading-tight">
                S / 30.00 /<p>{t("месяц")}</p>
              </h4>
              <p className="text-sm text-white font-bold">
                {t("Все из тарифа СЕРЕБРЯНЫЙ\u00A0+")}
              </p>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('10 страниц с QR')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Анимированный логотип')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Каталог ваших продуктов')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Меню для вашего ресторана')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('PDF максимум 5 мб')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('1 анимированная кнопка СТА')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('1 видео-презентация')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('3 видео-отзыва ваших клиентов')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Видео-карусель из 3 видео')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Без логотипа ONE CLICK')}</span>
                </div>
              </div>
              <button className="mt-auto">{t("Подписаться")}</button>
            </div>
            <div className="feature-card w-full py-5 px-3">
              <p className="uppercase text-xl text-white font-bold">
                {t("Платиновый")}
              </p>
              <p>{t("Улучшит твой бизнес!")}</p>
              <h4 className="leading-tight">
                S / 50.00 /<p>{t("месяц")}</p>
              </h4>
              <p className="text-sm text-white font-bold">
                {t("Все из тарифа")} <br /> {t("ЗОЛОТОЙ\u00A0+")}
              </p>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('1 pop-up баннер')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('1 форма регистрации')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('1 форма БРИФ')}</span>
                </div>
              </div>
              <button className="mt-auto">{t("Подписаться")}</button>
            </div>
            <div className="feature-card w-full py-5 px-3">
              <p className="uppercase text-xl text-white font-bold">
                {t("Алмазный")}
              </p>
              <p>{t("Улучшит твой бизнес!")}</p>
              <h4 className="leading-tight">
                S / 60.00 /<p>{t("месяц")}</p>
              </h4>
              <p className="text-sm text-white font-bold">
                {t("Все из тарифа ПЛАТИНОВЫЙ\u00A0+")}
              </p>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('3 pop-up баннер')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('3 форма ОПРОСА')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('3 форма БРИФ')}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="public/img/check.svg" className="w-4 h-4" />
                  <span>{t('Колесо фортуны')}</span>
                </div>
              </div>
              <button className="mt-auto">{t("Подписаться")}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tariffs;
