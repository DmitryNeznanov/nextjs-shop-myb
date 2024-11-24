"use client"
import Image from "next/image"
import { useState } from "react"

export default function ToggleMobileMenuButton() {
  const [menu, toggleMenu] = useState(true)

  function openMenu() {
    const mobileMenu = document.getElementById("mobileMenu")!
    mobileMenu.classList.toggle("w-[0%]")
    mobileMenu.classList.toggle("w-[100%]")
    document.body.classList.toggle("overflow-hidden")
    window.scrollTo(0, 0)
    toggleMenu(!menu)
  }
  return (
    <button
      onClick={() => {
        openMenu()
      }}
    >
      <Image
        className="md:w-[80px] md:h-[80px] bg-white-titan rounded-full"
        src={`${
          menu === true ? "./icons/menu-open.svg" : "./icons/menu-close.svg"
        }`}
        width={48}
        height={48}
        alt="open-menu"
      ></Image>
    </button>
  )
}
