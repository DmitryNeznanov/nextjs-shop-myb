"use client"
import Menu from "./Menu"
import ProfileCard from "./ProfileCard"
import { useLayoutEffect } from "react"
import Address from "./Address"
export default function MobileMenu() {
  useLayoutEffect(() => {
    function calculateMobileMenuHeight() {
      const headerNavHeight = document
        .getElementById("headerNav")!
        .getBoundingClientRect().height
      const viewportHeight = window.innerHeight
      const mobileMenuHeight = viewportHeight - headerNavHeight

      document.getElementById(
        "mobileMenu"
      )!.style.minHeight = `${mobileMenuHeight.toString()}px`
    }
    calculateMobileMenuHeight()
    window.addEventListener("resize", calculateMobileMenuHeight)
  }, [])

  return (
    <nav
      className="pt-[32px] pb-[48px] flex flex-col justify-between items-center  absolute z-[9999] right-0 w-[0%] overflow-hidden test bg-white"
      id="mobileMenu"
    >
      <Address />
      <Menu />
      <ProfileCard />
    </nav>
  )
}
