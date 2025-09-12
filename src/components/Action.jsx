import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function Action({ className = "" }) {
  const { t } = useTranslation();
  const [actionRef, isActionVisible] = useScrollAnimation(0.1, "-50px");

  return (
    <>
      <div
        ref={actionRef}
        className={`bg-[linear-gradient(to_bottom,black,transparent),url('/img/background.svg')] bg-cover bg-center bg-no-repeat scroll-animate-stagger ${
          isActionVisible ? "animate-in" : ""
        } ${className}`}
      >
        <div className="bg-[url('/img/pattern.webp')] bg-cover bg-top py-10 sm:py-20">
          <div className="container flex flex-col gap-10 items-center justify-between sm:gap-15 md:gap-20 sm:flex-row">
            <div className="flex flex-col gap-10 w-full sm:w-1/2 items-center">
              <h2 className="text-center" style={{ whiteSpace: "pre-line" }}>{t("action.title")}</h2>
              <button className="w-full sm:max-w-[350px]">
                <a href="https://one-click.app/register">
                  {t("action.button")}
                </a>
              </button>
            </div>
            <img
              src="img/mockup.webp"
              className="w-[300px] sm:w-1/2 rounded-[20px]"
              loading="lazy"
              alt="mockup"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Action;
