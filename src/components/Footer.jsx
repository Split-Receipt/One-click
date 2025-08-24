import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function Footer({ className = "" }) {
  const { t } = useTranslation();
  const [footerRef, isFooterVisible] = useScrollAnimation(0.1, "-50px");

  const socialLinks = [
    { href: "#", img: "/img/fb.png" },
    { href: "#", img: "/img/inst.png" },
    { href: "#", img: "/img/tik.png" },
    { href: "#", img: "/img/linkedin.png" },
  ];

  const legalLinks = [
    { href: "#", text: t("Политика конфиденциальности") },
    { href: "#", text: t("Договор-оферта") },
    { href: "#", text: t("Партнерская программа") },
    { href: "#", text: t("Вопросы-ответы") },
  ];

  const companyInfo = [
    { text: t("Creator RA Studio SAC") },
    { text: t("RUC 20606559578") },
    { text: t("Jr. Policarpo Caballero, Cusco") },
  ];

  const siteMap = [
    { href: "#page", text: t("QR-страница") },
    { href: "#menu", text: t("QR-меню и каталоги") },
    { href: "#nfc", text: t("NFC-визитки") },
    { href: "#features", text: t("Преимущества") },
    { href: "#tariffs", text: t("Тарифы") },
    { href: "#contacts", text: t("Контакты") },
  ];

  const paymentMethods = [
    [
      { src: "img/paypal.png", className: "payment-icon w-20 sm:w-30" },
      { src: "img/visa.png", className: "payment-icon w-18 sm:w-25" },
    ],
    [
      { src: "img/mastercard.png", className: "payment-icon w-18 sm:w-25" },
      { src: "img/maestro.png", className: "payment-icon w-18 sm:w-25" },
    ],
    [
      { src: "img/amexp.png", className: "payment-icon w-12 sm:w-14" },
      { src: "img/yape.png", className: "payment-icon w-12 sm:w-15" },
      { src: "img/plin.png", className: "payment-icon w-12 sm:w-15" },
    ],
  ];

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
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`bg-[url("${link.img}")] bg-cover bg-center w-10 h-10 block`}
                  />
                ))}
              </div>
              {legalLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  {link.text}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h4>{t("Информация")}</h4>
              {companyInfo.map((info, index) => (
                <p key={index}>{info.text}</p>
              ))}
              <a href="tel:+51953245941">+51 953245941</a>
              <a href="mailto:soporteoneqliq@gmail.com">
                soporteoneqliq@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h4>{t("Карта сайта")}</h4>
              {siteMap.map((link, index) => (
                <a key={index} href={link.href}>
                  {link.text}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h4>{t("Методы оплаты")}</h4>
              {paymentMethods.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`grid gap-2 ${
                    row.length === 2 ? "grid-cols-2" : "grid-cols-3"
                  } justify-items-center items-center`}
                >
                  {row.map((method, methodIndex) => (
                    <img
                      key={methodIndex}
                      src={method.src}
                      className={method.className}
                    />
                  ))}
                </div>
              ))}
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
