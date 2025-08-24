import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function Screen({ className = "" }) {
  const { t } = useTranslation();
  const [screenRef, isScreenVisible] = useScrollAnimation(0.1, "-100px");

  return (
    <>
      <div
        ref={screenRef}
        className={`bg-[url('/img/background.svg')] bg-cover lg:bg-[length:100%] lg:bg-bottom bg-top bg-no-repeat scroll-animate-stagger ${
          isScreenVisible ? "animate-in" : ""
        } ${className}`}
      >
        <div className="bg-[url('/img/pattern.png')] bg-[length:100%] bg-center w-screen h-screen flex flex-col items-center justify-center gap-10 relative md:px-10 px-5">
          <div className="relative flex flex-col items-center gap-8">
            <img
              src="img/cursor.svg"
              className="absolute top-[-90px] left-0 md:top-[-150px] xl:top-1/2 xl:left-[-20%] xl:-translate-y-1/2 animate-bounce-slow transform transition-transform duration-1000 ease-out hover:scale-110 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
              style={{
                animation: "float-up-right 3s ease-in-out infinite",
                transform: "translateY(0px)",
              }}
            />
            <h1 className="text-center">
              {t("One\u00A0click\u00A0—\u00A0твой")} <br /> {t("персональный инструмент")}{" "}
              <br /> {t("контактов и\u00A0продаж")}
            </h1>
            <p className="text-center md:text-2xl text-lg">
              {t("Подключись сейчас и получи вечный")} <br className="hidden md:block" />{" "}
              {t("бесплатный доступ!")}
            </p>
            <button className="bg-[#9560EB]">
              <a href="https://one-click.app/register">{t("Подключиться")}</a>
            </button>
            <img
              src="img/message.svg"
              className="absolute bottom-[-25%] right-0 xl:top-1/2 xl:right-[-21%] xl:-translate-y-1/2 animate-bounce-slow transform transition-transform duration-1000 ease-out hover:scale-110 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
              style={{
                animation: "float-down-left 3s ease-in-out infinite",
                transform: "translateY(0px)",
              }}
            />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float-up-right {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-12px) translateX(8px);
          }
        }

        @keyframes float-down-left {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(12px) translateX(-8px);
          }
        }

        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-8px) translateX(3px);
          }
        }

        /* Parallax effect on scroll */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(149, 96, 235, 0.3);
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(149, 96, 235, 0.5);
        }
      `}</style>
    </>
  );
}

export default Screen;
