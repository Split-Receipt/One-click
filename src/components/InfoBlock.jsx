import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function InfoBlock({ className = "", id, title, info }) {
  const { t } = useTranslation();
  const [infoRef, isInfoVisible] = useScrollAnimation(0.1, "-50px");

  const tabs = [
    {
      id: "possibilities",
      label: "Возможности",
      icon: "img/possibilities.png",
    },
    { id: "features", label: "Преимущества", icon: "img/features.png" },
    { id: "for", label: "Для кого", icon: "img/for.png" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabs.find((tab) => tab.id === tabId));
  };

  const currentInfo = info?.[activeTab.id];

  return (
    <>
      <div
        id={id}
        ref={infoRef}
        className={`py-10 scroll-animate-stagger ${
          isInfoVisible ? "animate-in" : ""
        } ${className}`}
      >
        <div className="container flex flex-col gap-8">
          <h2 className="text-center">{t(title)}</h2>
          <div className="flex gap-4 w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`card w-full ${
                  activeTab.id === tab.id ? "active" : ""
                }`}
              >
                {t(tab.label)}
              </button>
            ))}
          </div>

          {currentInfo && (
            <div className="grid grid-cols-2 gap-4 max-h-[600px] overflow-hidden">
              <div key={activeTab.id} className="flex flex-col gap-4 tab-content-animate">
                <img src={activeTab.icon} className="w-15 h-15" />
                <h3 className="tab-title">{t(activeTab.label)}</h3>
                <h4 className="tab-subtitle">{t(currentInfo.title)}</h4>
                <div className="tab-text">
                  {Array.isArray(currentInfo.text)
                    ? currentInfo.text.map((textItem, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 mb-2"
                        >
                          <img src="img/check.svg" className="w-4 h-4" />
                          <span>{t(textItem)}</span>
                        </div>
                      ))
                    : t(currentInfo.text)}
                </div>
                <button className="w-1/2 mt-6">
                  <a href="https://one-click.app/register">
                    {t("Регистрация")}
                  </a>
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {info?.videos?.map((video, index) => (
                  <video key={index} src={video} className="h-auto w-full" autoPlay loop muted />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default InfoBlock;
