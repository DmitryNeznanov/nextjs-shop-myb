import Image from "next/image"
import Link from "next/link"
import ToggleMobileMenuButton from "./ToggleMobileMenuButton"

import MobileMenu from "./MobileMenu"
export default function Header() {
  return (
    <header
      className="container"
      id="header"
    >
      <nav
        className="pt-[12px] md:pt-[32px] flex flex-row justify-between items-center relative"
        id="headerNav"
      >
        <div>
          <Link href="/">
            <Image
              className="md:w-[80px] md:h-[80px]"
              src="./svg/logo.svg"
              width={48}
              height={48}
              alt="logo"
            ></Image>
          </Link>
        </div>
        <address className="w-max h-max bg-red-200 rounded-full">
          <Link
            className="block px-[12px] py-[6px] p-lg-semi text-danger capitalize hover:underline before:content-[url('/icons/phone.svg')] before:mr-[4px]"
            href="tel:88004378722"
          >
            call me back
          </Link>
        </address>
        <ToggleMobileMenuButton />
      </nav>
      <MobileMenu />
    </header>
  )
}
