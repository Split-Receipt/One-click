import { useTranslation } from 'react-i18next';
function Header({ className = "" }) {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={`flex justify-between items-center bg-[#0D0D0D] border border-[#332B40] rounded-[10px] fixed top-4 p-4 max-w-[1200px] w-full left-1/2 -translate-x-1/2 z-10 ${className}`}
      >
        <div>
          <img src="public/img/logo.png" alt="logo" width={105} />
        </div>
        <div className="flex gap-4">
          <a href="#page" className="text-[#9F9BA5]">
            {t('QR-страница')}
          </a>
          <a href="#menu" className="text-[#9F9BA5]">
            {t('QR-меню и каталоги')}
          </a>
          <a href="#nfc" className="text-[#9F9BA5]">
            {t('NFC-визитки')}
          </a>
          <a href="#features" className="text-[#9F9BA5]">
            {t('Преимущества')}
          </a>
          <a href="#tariffs" className="text-[#9F9BA5]">
            {t('Тарифы')}
          </a>
          <a href="#contacts" className="text-[#9F9BA5]">
            {t('Контакты')}
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#">{t('Войти')}</a>
          <a href="#">RU</a>
        </div>
      </div>
    </>
  );
}

export default Header;
