import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { useState, useRef, useEffect } from "react";

function Header({ className = "" }) {
  const { t } = useTranslation();
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.1, "-50px");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("RU");
  const languageMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    setIsLanguageMenuOpen(false);
    // i18n.changeLanguage(language.toLowerCase());
  };

  const languages = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
    { code: "RU", name: "Русский" },
  ];

  return (
    <>
      <div
        ref={headerRef}
        className={`flex justify-between items-center bg-[#0D0D0D] border border-[#332B40] rounded-[10px] fixed top-4 p-4 max-w-[1200px] w-full left-1/2 -translate-x-1/2 z-10 scroll-animate ${
          isHeaderVisible ? "animate-in" : ""
        } ${className}`}
      >
        <div>
          <img src="img/logo.png" width={105} />
        </div>
        <div className="flex gap-4">
          <a href="#page" className="text-[#9F9BA5]">
            {t("QR-страница")}
          </a>
          <a href="#menu" className="text-[#9F9BA5]">
            {t("QR-меню и каталоги")}
          </a>
          <a href="#nfc" className="text-[#9F9BA5]">
            {t("NFC-визитки")}
          </a>
          <a href="#features" className="text-[#9F9BA5]">
            {t("Преимущества")}
          </a>
          <a href="#tariffs" className="text-[#9F9BA5]">
            {t("Тарифы")}
          </a>
          <a href="#contacts" className="text-[#9F9BA5]">
            {t("Контакты")}
          </a>
        </div>
        <div className="flex gap-4">
          <a href="https://one-click.app/register" className="text-[#9F9BA5]">{t("Войти")}</a>
          <div className="relative" ref={languageMenuRef}>
            <a
              href="#"
              className="text-[#9F9BA5]"
              onClick={(e) => {
                e.preventDefault();
                setIsLanguageMenuOpen(!isLanguageMenuOpen);
              }}
            >
              {currentLanguage}
            </a>

            {isLanguageMenuOpen && (
              <div className="absolute left-[-20px] mt-2 w-32 bg-[#0D0D0D] border border-[#332B40] rounded-[10px] shadow-lg z-20">
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLanguageChange(lang.code);
                    }}
                    className={`block px-4 py-2 hover:text-white transition-colors text-[#9F9BA5] ${
                      currentLanguage === lang.code ? "text-white" : ""
                    }`}
                  >
                    {lang.code}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
