import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function Screen({ className = "" }) {
  const { t } = useTranslation();
  const [screenRef, isScreenVisible] = useScrollAnimation(0.1, "-100px");

  return (
    <>
      <div
        ref={screenRef}
        className={`bg-[url('public/img/background.svg')] bg-[length:100%] bg-bottom bg-no-repeat scroll-animate-stagger ${
          isScreenVisible ? "animate-in" : ""
        } ${className}`}
      >
        <div className="bg-[url('public/img/pattern.png')] bg-[length:100%] bg-center w-screen h-screen flex flex-col items-center justify-center gap-10 relative">
          <div className="relative flex flex-col items-center gap-8">
            <img
              src="public/img/cursor.svg"
              className="absolute top-1/2 left-[-20%] -translate-y-1/2 animate-bounce-slow transform transition-transform duration-1000 ease-out hover:scale-110"
              style={{
                animation: "float-up-right 3s ease-in-out infinite",
                transform: "translateY(0px)",
              }}
            />
            <h1 className="text-center">
              {t("One click — твой")} <br /> {t("персональный инструмент")}{" "}
              <br /> {t("контактов и продаж")}
            </h1>
            <p className="text-center text-2xl">
              {t("Подключись сейчас и получи вечный")} <br />{" "}
              {t("бесплатный доступ!")}
            </p>
            <button className="bg-[#9560EB]">{t("Подключиться")}</button>
            <img
              src="public/img/message.svg"
              className="absolute top-1/2 right-[-21%] -translate-y-1/2 animate-bounce-slow transform transition-transform duration-1000 ease-out hover:scale-110"
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
