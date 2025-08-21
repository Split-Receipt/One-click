import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function Footer({ className = "" }) {
  const { t } = useTranslation();
  const [footerRef, isFooterVisible] = useScrollAnimation(0.1, "-50px");

  return (
    <>
      <div
        id="contacts"
        ref={footerRef}
        className={`pt-8 pb-4 px-4 scroll-animate-stagger ${
          isFooterVisible ? "animate-in" : ""
        } ${className}`}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col justify-between gap-5 sm:gap-10">
          <div className="flex gap-4 flex-col sm:flex-row items-start justify-between sm:gap-8">
            <div className="flex flex-col gap-2">
              <img src="img/logo.png" alt="logo" width={145} className="mb-3" />
              <div className="flex gap-2 mb-2">
                <a
                  href="#"
                  className='bg-[url("/img/fb.png")] bg-cover bg-center w-10 h-10 block'
                />
                <a
                  href="#"
                  className='bg-[url("/img/inst.png")] bg-cover bg-center w-10 h-10 block'
                />
                <a
                  href="#"
                  className='bg-[url("/img/tik.png")] bg-cover bg-center w-10 h-10 block'
                />
                <a
                  href="#"
                  className='bg-[url("/img/linkedin.png")] bg-cover bg-center w-10 h-10 block'
                />
              </div>
              <a href="">{t("Политика конфиденциальности")}</a>
              <a href="">{t("Договор-оферта")}</a>
              <a href="">{t("Партнерская программа")}</a>
              <a href="#">{t("Вопросы-ответы")}</a>
            </div>
            <div className="flex flex-col gap-2">
              <h4>{t("Информация")}</h4>
              <p>{t("Creator RA Studio SAC")}</p>
              <p>{t("RUC 20606559578")}</p>
              <p>{t("Jr. Policarpo Caballero, Cusco")}</p>
              <a href="tel:+51953245941">+51 953245941</a>
              <a href="mailto:soporteoneqliq@gmail.com">
                soporteoneqliq@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h4>{t("Карта сайта")}</h4>
              <a href="#page">{t("QR-страница")}</a>
              <a href="#menu">{t("QR-меню и каталоги")}</a>
              <a href="#nfc">{t("NFC-визитки")}</a>
              <a href="#features">{t("Преимущества")}</a>
              <a href="#tariffs">{t("Тарифы")}</a>
              <a href="#contacts">{t("Контакты")}</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4>{t("Методы оплаты")}</h4>
              <div className="grid gap-2 grid-cols-2 justify-items-center items-center">
                <img
                  src="img/paypal.png"
                  className="payment-icon w-20 sm:w-30"
                />
                <img src="img/visa.png" className="payment-icon w-18 sm:w-25" />
              </div>
              <div className="grid gap-2 grid-cols-2 justify-items-center items-center">
                <img
                  src="img/mastercard.png"
                  className="payment-icon w-18 sm:w-25"
                />
                <img
                  src="img/maestro.png"
                  className="payment-icon w-18 sm:w-25"
                />
              </div>
              <div className="grid gap-2 grid-cols-3 justify-items-center items-center">
                <img
                  src="img/amexp.png"
                  className="payment-icon w-12 sm:w-14"
                />
                <img src="img/yape.png" className="payment-icon w-12 sm:w-15" />
                <img src="img/plin.png" className="payment-icon w-12 sm:w-15" />
              </div>
            </div>
          </div>
          <div className="text-xs flex flex-col gap-2 sm:flex-row sm:gap-5">
            <div>{t("2025. Todos los derechos reservados")}</div>
            <div>
              {t(
                "Paginas QR, catalogos, menu y tarjetas de presentacion NFC para la vida y los negocios"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
