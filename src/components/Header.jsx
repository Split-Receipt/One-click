import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { useState, useRef, useEffect } from "react";
import i18n from "../../i18n.js";

function Header({ className = "" }) {
  const { t } = useTranslation();
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.1, "-50px");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ES");
  const languageMenuRef = useRef(null);

  const menuItems = [
    { href: "#products", key: t("menu.products") },
    { href: "#features", key: t("menu.features") },
    { href: "#tariffs", key: t("menu.tariffs") },
    { href: "#contacts", key: t("menu.contacts") },
  ];

  const languages = [
    { code: "ES", name: "Español" },
    { code: "RU", name: "Русский" },
  ];

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

  useEffect(() => {
    const currentI18nLang = i18n.language.toUpperCase();
    setCurrentLanguage(currentI18nLang);
  }, []);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    setIsLanguageMenuOpen(false);
    i18n.changeLanguage(language.toLowerCase());
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderMenuItems = (className = "") => {
    return menuItems.map((item) => (
      <a
        key={item.key}
        href={item.href}
        className={`text-[#9F9BA5] transition-colors ${className}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {item.key}
      </a>
    ));
  };

  return (
    <>
      <div
        ref={headerRef}
        className={`header flex justify-between items-center bg-[#0D0D0D] border border-[#332B40] rounded-[10px] fixed top-4 left-1/2 -translate-x-1/2 z-10 scroll-animate px-4 py-4 max-w-[1200px] w-[calc(100%-32px)] ${
          isHeaderVisible ? "animate-in" : ""
        } ${className}`}
      >
        <div>
          <img src="img/logo.png" className="w-25 md:w-30" />
        </div>

        <div className="hidden lg:flex gap-4">{renderMenuItems()}</div>

        <div
          className={`absolute top-full left-0 right-0 mt-2 bg-[#9560EB] rounded-[10px] px-5 py-14 lg:hidden transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <button
            className="w-[40px] h-[40px] bg-[url('/img/close.svg')] bg-center bg-no-repeat"
            style={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={toggleMobileMenu}
          />
          <div className="flex flex-col gap-3">
            {renderMenuItems("font-bold text-white text-2xl")}
            <div className="mt-8">
              {t('header.feedback')}:
              <p className="text-xl font-bold text-white">info@one-click.app</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <a href="https://one-click.app/register" className="text-[#9F9BA5]">
            {t('header.login')}
          </a>
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
              <div className="absolute left-[-20px] mt-2 w-15 bg-[#0D0D0D] border border-[#332B40] rounded-[10px] shadow-lg z-20">
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
          <div
            onClick={toggleMobileMenu}
            className="lg:hidden cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <img src="img/menu.svg" className="w-8 h-6" alt="Menu" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
