import React, {useState} from "react";
import '../../theme/nummarit.css'

export default function Navbar({children}: any) {

  const [mobileNav, setMobileNav] = useState(false)
  const [closeMenuButton, setCloseMenuButton] = useState(false)

  return (
    <header>
      <div className="h-[120px] bg-partionsininen py-[20px] px-[40px] flex ">
        <a href="/whatsapp/send" className="mr-auto">
          <img
            src="https://nummenpojat.kuvat.fi/kuvat/Kuvituskuvaa%20ja%20grafiikkaa/Graafinen%20ohje%20ja%20br%C3%A4ndimateriaalit/Lippukunnan%20logot/HN%20ovaali%20logo.png?img=img4k"
            className="h-[80px] w-[160px]" alt="Nummenpojat logo"/>
        </a>
        <nav className="hidden md:flex">
          <ul className="h-full flex place-items-center gap-[40px]">
            {
              children
            }
          </ul>
        </nav>
        <nav className="md:hidden place-items-center flex">
          <button onClick={() => {
            setMobileNav(!mobileNav);
            setCloseMenuButton(!closeMenuButton)
          }} className="w-[19px]">
            <div className="flex">
              <div hidden={closeMenuButton}>
                <svg viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.3em"
                     height="1.3em" fill="white">
                <path
                  d="M0 96c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24z"></path>
              </svg>
              </div>
              <div hidden={!closeMenuButton}>
                <svg viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.3em"
                     height="1.3em" fill="white">
                <path
                  d="M71.029 71.029c9.373-9.372 24.569-9.372 33.942 0L256 222.059l151.029-151.03c9.373-9.372 24.569-9.372 33.942 0 9.372 9.373 9.372 24.569 0 33.942L289.941 256l151.03 151.029c9.372 9.373 9.372 24.569 0 33.942-9.373 9.372-24.569 9.372-33.942 0L256 289.941l-151.029 151.03c-9.373 9.372-24.569 9.372-33.942 0-9.372-9.373-9.372-24.569 0-33.942L222.059 256 71.029 104.971c-9.372-9.373-9.372-24.569 0-33.942z"></path>
                </svg>
              </div>
            </div>
          </button>
        </nav>
      </div>
      <div className={mobileNav ? "bg-partionsininen flex flex-col px-[40px] pb-[20px]" : "hidden"}>
        {
          children.map((child: any) => <div className="h-[60px] list-none">{child}</div>)
        }
      </div>
    </header>
  );
}