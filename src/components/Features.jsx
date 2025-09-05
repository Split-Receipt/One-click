import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function Features({ className = "" }) {
  const { t } = useTranslation();
  const [featuresRef, isFeaturesVisible] = useScrollAnimation(0.1, "-50px");
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const featuresData = [
    {
      image: "img/copy.png",
      title: t("features.allLinks.title"),
      description: t("features.allLinks.description"),
      area: "area-a",
    },
    {
      image: "img/custom.png",
      title: t("features.fullCustomization.title"),
      description: t("features.fullCustomization.description"),
      area: "area-b",
    },
    {
      area: "area-c",
      className: "relative feature-video overflow-hidden",
      children: (
        <>
          <video
            src="/video/featurevideo.webm"
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            loop
            playsInline
            muted
            onPlay={handlePlay}
            onClick={handleVideoClick}
          />
          {!isPlaying && (
            <button
              className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 !bg-black flex items-center justify-center !rounded-full !border-2 !border-white"
              onClick={handlePlay}
            >
              <img src="/img/play.svg" className="w-10 h-10" />
            </button>
          )}
        </>
      ),
    },
    {
      area: "area-d",
      className: "bg-[url('/img/background.svg')] bg-cover bg-top",
      children: (
        <div className="bg-[url('/img/pattern.png')] bg-cover bg-top h-full w-full text-left">
          <h3 className="mb-2 relative z-10">
            {t("features.efficiency.title")}
          </h3>
          <h4 className="mb-5 relative z-10">
            {t("features.efficiency.description")}
          </h4>
          <button>
            <a href="https://one-click.app/register">{t("common.connect")}</a>
          </button>
        </div>
      ),
    },
    {
      image: "img/settings.png",
      title: t("features.code.title"),
      description: t("features.code.description"),
      area: "area-e",
    },
    {
      image: "img/redo.png",
      title: t("features.speed.title"),
      description: t("features.speed.description"),
      area: "area-f",
    },
    {
      image: "img/time.png",
      title: t("features.time.title"),
      description: t("features.time.description"),
      area: "area-g",
    },
    {
      image: "img/picture.png",
      title: t("features.modern.title"),
      description: t("features.modern.description"),
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
          <h2 className="text-center mb-8">{t("menu.features")}</h2>
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
