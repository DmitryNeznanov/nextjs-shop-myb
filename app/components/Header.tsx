import Image from "next/image"
import Link from "next/link"
import ToggleMobileMenuButton from "./ToggleMobileMenuButton"
import Menu from "./Menu"
export default function Header() {
  return (
    <header className="container pt-[12px] md:pt-[32px]">
      <nav className="flex flex-row justify-between items-center relative">
        <div>
          <Link href="/">
            <Image
              className="xl:max-w-[80px] md:max-h-[80px]"
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
      <div
        className="relative"
        id="mobileMenu"
      >
        <nav className="absolute w-full bg-red">
          <address>
            <Link
              className="p-lg-semi hover:underline"
              href="tel:88004378722"
            >
              8 800 437-87-22
            </Link>
          </address>
          <Menu />
        </nav>
      </div>
    </header>
  )
}
