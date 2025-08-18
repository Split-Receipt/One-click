import { useTranslation } from "react-i18next";

function Footer({ className = "" }) {
  const { t } = useTranslation();
  return (
    <>
      <div id="contacts" className={`pt-8 pb-4 px-4 ${className}`}>
        <div className="container flex flex-col justify-between gap-10">
          <div className="flex gap-8 items-start justify-between">
            <div className="flex flex-col gap-2">
              <img
                src="public/img/logo.png"
                alt="logo"
                width={145}
                className="mb-3"
              />
              <div className="flex gap-2 mb-2">
                <a
                  href="#"
                  className='bg-[url("public/img/fb.png")] bg-cover bg-center w-10 h-10 block'
                />
                <a
                  href="#"
                  className='bg-[url("public/img/inst.png")] bg-cover bg-center w-10 h-10 block'
                />
                <a
                  href="#"
                  className='bg-[url("public/img/tik.png")] bg-cover bg-center w-10 h-10 block'
                />
                <a
                  href="#"
                  className='bg-[url("public/img/linkedin.png")] bg-cover bg-center w-10 h-10 block'
                />
              </div>
              <a href="">{t("Политика конфиденциальности")}</a>
              <a href="">{t("Договор-оферта")}</a>
              <a href="">{t("Партнерская программа")}</a>
              <a href="#">{t("Вопросы-ответы")}</a>
            </div>
            <div className="flex flex-col gap-2">
              <h3>{t("Информация")}</h3>
              <p>{t("Creator RA Studio SAC")}</p>
              <p>{t("RUC 20606559578")}</p>
              <p>{t("Jr. Policarpo Caballero, Cusco")}</p>
              <p>{t("+51 953245941")}</p>
              <p>{t("soporteoneqliq@gmail.com")}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>{t("Карта сайта")}</h3>
              <a href="#page">{t("QR-страница")}</a>
              <a href="#menu">{t("QR-меню и каталоги")}</a>
              <a href="#nfc">{t("NFC-визитки")}</a>
              <a href="#features">{t("Преимущества")}</a>
              <a href="#tariffs">{t("Тарифы")}</a>
              <a href="#contacts">{t("Контакты")}</a>
            </div>
            <div className="flex flex-col gap-3">
              <h3>{t("Методы оплаты")}</h3>
              <div className="grid gap-2 grid-cols-2 justify-items-center items-center">
                <img
                  src="public/img/paypal.png"
                  className="payment-icon"
                  width={100}
                />
                <img
                  src="public/img/visa.png"
                  className="payment-icon"
                  width={90}
                />
              </div>
              <div className="grid gap-2 grid-cols-2 justify-items-center items-center">
                <img
                  src="public/img/mastercard.png"
                  className="payment-icon"
                  width={90}
                />
                <img
                  src="public/img/maestro.png"
                  className="payment-icon"
                  width={90}
                />
              </div>
              <div className="grid gap-2 grid-cols-3 justify-items-center items-center">
                <img
                  src="public/img/amexp.png"
                  className="payment-icon"
                  width={50}
                />
                <img
                  src="public/img/yape.png"
                  className="payment-icon"
                  width={50}
                />
                <img
                  src="public/img/plin.png"
                  className="payment-icon"
                  width={50}
                />
              </div>
            </div>
          </div>
          <div className="text-xs flex gap-5">
            <span>{t("2025. Todos los derechos reservados")}</span>
            <span>
              {t(
                "Paginas QR, catalogos, menu y tarjetas de presentacion NFC para la vida y los negocios"
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
