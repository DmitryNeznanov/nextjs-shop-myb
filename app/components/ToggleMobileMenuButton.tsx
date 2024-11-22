"use client"
import Image from "next/image"
import { useState } from "react"

export default function ToggleMobileMenuButton() {
  const [menu, toggleMenu] = useState(true)

  function openMenu() {
    const menu = document.getElementById("mobileMenu")
    menu?.classList.toggle("hidden")
    toggleMenu(!menu)
  }
  return (
    <button
      className=""
      onClick={() => {
        openMenu()
      }}
    >
      <Image
        className="bg-white-titan rounded-full"
        src={`${
          menu === false ? "./icons/menu-open.svg" : "./icons/menu-close.svg"
        }`}
        width={48}
        height={48}
        alt="open-menu"
      ></Image>
    </button>
  )
}
