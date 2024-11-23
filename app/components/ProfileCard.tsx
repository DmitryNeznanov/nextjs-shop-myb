"use client"

import Image from "next/image"
import Link from "next/link"
export default function ProfileCard() {
  function openProfileMenu() {
    const profileMenu = document.getElementById("profileMenu")
    profileMenu?.classList.toggle("hidden")
  }
  return (
    <section className="flex relative flex-col items-center">
      <button
        className="p-[16px] bg-white-titan rounded-full"
        onClick={() => {
          openProfileMenu()
        }}
      >
        <Image
          src="./svg/avatar.svg"
          height={24}
          width={24}
          alt="avatar"
        ></Image>
      </button>
      <h3 className="mt-[16px] p-lg-semi md:hidden">Anthony Thomas</h3>
      <section
        className="absolute p-[16px] bg-white rounded-[16px] shadow-xl -mt-[75px]"
        id="profileMenu"
        // before:content-[''] before:w-0 before:h-0 before:absolute before:border-[10px] before:border-transparent before:border-b-white before:right-[12%] before:-top-[20px]
      >
        dfgdfgdfg
      </section>
    </section>
  )
}
