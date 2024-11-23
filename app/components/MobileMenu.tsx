"use client"
import Link from "next/link"
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
      className="pt-[32px] pb-[48px] flex flex-col justify-between items-center absolute right-0 bg-red-200 duration-1000"
      id="mobileMenu"
    >
      <Address />
      <Menu />
      <ProfileCard />
    </nav>
  )
}
