function Header({ className = "" }) {
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
            QR-страница
          </a>
          <a href="#menu" className="text-[#9F9BA5]">
            QR-меню и каталоги
          </a>
          <a href="#nfc" className="text-[#9F9BA5]">
            NFC-визитки
          </a>
          <a href="#features" className="text-[#9F9BA5]">
            Преимущества
          </a>
          <a href="#tariffs" className="text-[#9F9BA5]">
            Тарифы
          </a>
          <a href="#contacts" className="text-[#9F9BA5]">
            Контакты
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#">Войти</a>
          <a href="#">RU</a>
        </div>
      </div>
    </>
  );
}

export default Header;
