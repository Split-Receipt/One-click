import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function Action({ className = "" }) {
  const { t } = useTranslation();
  const [actionRef, isActionVisible] = useScrollAnimation(0.1, "-50px");

  return (
    <>
      <div
        ref={actionRef}
        className={`bg-[linear-gradient(to_bottom,black,transparent),url('public/img/background.svg')] bg-cover bg-center bg-no-repeat scroll-animate-stagger ${
          isActionVisible ? "animate-in" : ""
        } ${className}`}
      >
        <div className="bg-[url('public/img/pattern.png')] bg-cover bg-top px-10 py-20">
          <div className="container flex gap-20 items-center justify-between">
            <div className="flex flex-col gap-10 w-1/2">
              <h2 className="text-center">
                {t("Создай свою")} <br /> {t("промо-страницу")} <br />{" "}
                {t("за пять минут!")}
              </h2>
              <button>{t("Подключиться бесплатно навсегда")}</button>
            </div>
            <img
              src="public/img/mockup.jpg"
              className="w-1/2 rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Action;
