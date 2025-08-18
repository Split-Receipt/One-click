import { useTranslation } from 'react-i18next';
function Action({ className = "" }) {
  const { t } = useTranslation();
  return (
    <>
      <div className={`bg-[linear-gradient(to_bottom,black,transparent),url('public/img/background.svg')] bg-cover bg-center bg-no-repeat${className}`}>
        <div className="bg-[url('public/img/pattern.png')] bg-cover bg-top px-10 py-20">
          <div className="container flex gap-20 items-center justify-between">
            <div className="flex flex-col gap-10">
              <h2 className="text-center">{t('Создай свою')} <br /> {t('промо-страницу')} <br /> {t('за пять минут!')}</h2>
              <button>{t('Подключиться бесплатно навсегда')}</button>
            </div>
            <img src="public/img/mockup.jpg" className="max-w-[548px] rounded-[20px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Action;
