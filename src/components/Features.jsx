import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function Features({ className = "" }) {
  const { t } = useTranslation();
  const [featuresRef, isFeaturesVisible] = useScrollAnimation(0.1, "-50px");

  const featuresData = [
    {
      image: "img/copy.png",
      title: t('features.allLinks.title'),
      description: t('features.allLinks.description'),
      area: "area-a",
    },
    {
      image: "img/custom.png",
      title: t('features.fullCustomization.title'),
      description: t('features.fullCustomization.description'),
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
            {t('features.efficiency.title')}
          </h3>
          <h4 className="mb-5 relative z-10">{t('features.efficiency.description')}</h4>
          <button>
            <a href="https://one-click.app/register">{t('common.connect')}</a>
          </button>
        </div>
      ),
    },
    {
      image: "img/settings.png",
      title: t('features.code.title'),
      description: t('features.code.description'),
      area: "area-e",
    },
    {
      image: "img/redo.png",
      title: t('features.speed.title'),
      description: t('features.speed.description'),
      area: "area-f",
    },
    {
      image: "img/time.png",
      title: t('features.time.title'),
      description: t('features.time.description'),
      area: "area-g",
    },
    {
      image: "img/picture.png",
      title: t('features.modern.title'),
      description: t('features.modern.description'),
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
          <h2 className="text-center mb-8">{t('menu.features')}</h2>
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
