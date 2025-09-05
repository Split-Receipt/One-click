import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect, useMemo } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import VideoBlock from "./VideoBlock.jsx";

function InfoBlock({ className = "", title, info }) {
  const { t } = useTranslation();
  const [infoRef, isInfoVisible] = useScrollAnimation(0.1, "-50px");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const tabs = useMemo(
    () => [
      {
        id: "possibilities",
        label: t("infoBlock.possibilities"),
        icon: "img/possibilities.png",
      },
      { id: "features", label: t("menu.features"), icon: "img/features.png" },
      { id: "for", label: t("infoBlock.for"), icon: "img/for.png" },
    ],
    [t]
  );

  const [activeTab, setActiveTab] = useState(() => tabs[0]);

  useEffect(() => {
    setActiveTab(tabs.find((tab) => tab.id === activeTab.id) || tabs[0]);
  }, [t, tabs, activeTab.id]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabs.find((tab) => tab.id === tabId));
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentInfo = info?.[activeTab.id];

  return (
    <>
      <div
        id="products"
        ref={infoRef}
        className={`py-10 md:py-15 scroll-animate-stagger ${
          isInfoVisible ? "animate-in" : ""
        } ${className}`}
      >
        <div className="container flex flex-col gap-8">
          <h2 className="text-center">{t(title)}</h2>

          <div className="hidden md:flex gap-4 w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`card w-full ${
                  activeTab.id === tab.id ? "active" : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="md:hidden relative" ref={dropdownRef}>
            <button
              onClick={handleDropdownToggle}
              className={`card w-full ${
                activeTab.id === activeTab.id ? "active" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex-1 text-center">{activeTab.label}</span>
                <img
                  src="img/arrow.svg"
                  className={`w-6 h-6 transition-transform duration-600 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  alt="arrow"
                  loading="lazy"
                />
              </div>
            </button>

            <div
              className={`absolute top-full left-0 mt-2 w-full bg-[#0D0D0D] border border-[#332B40] rounded-[10px] shadow-lg z-20 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                isDropdownOpen
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-2 pointer-events-none"
              }`}
            >
              {tabs
                .filter((tab) => tab.id !== activeTab.id)
                .map((tab) => (
                  <div
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className="block w-full px-4 py-3 text-left hover:text-white transition-colors text-[#9F9BA5] border-b border-[#332B40] last:border-b-0 cursor-pointer"
                  >
                    {tab.label}
                  </div>
                ))}
            </div>
          </div>

          {currentInfo && (
            <div className="grid md:grid-cols-[40%_60%] gap-14 md:gap-18 items-start overflow-hidden">
              <div
                key={activeTab.id}
                className="flex flex-col gap-4 tab-content-animate p-2"
              >
                <img
                  src={activeTab.icon}
                  className="w-15 h-15"
                  loading="lazy"
                  alt={activeTab.label}
                />
                <h3 className="tab-title">{activeTab.label}</h3>
                <h4 className="tab-subtitle">{currentInfo.title}</h4>
                <div className="tab-text">
                  {Array.isArray(currentInfo.text)
                    ? currentInfo.text.map((textItem, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 mb-2"
                        >
                          <img
                            src="img/check.svg"
                            className="w-4 h-4"
                            loading="lazy"
                            alt="check"
                          />
                          <span>{textItem}</span>
                        </div>
                      ))
                    : currentInfo.text}
                </div>
                <button className="w-1/2 mt-6">
                  <a href="https://one-click.app/register">
                    {t("common.register")}
                  </a>
                </button>
              </div>
              <div>
                {!info.videos?.length ? (
                  <img
                    src={info.image}
                    className="md:w-full md:h-full md:max-w-[550px] max-w-[300px] rounded-[10px]"
                    loading="lazy"
                    alt={info.title}
                  />
                ) : (
                  <VideoBlock info={info} className="md:mt-10" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default InfoBlock;
