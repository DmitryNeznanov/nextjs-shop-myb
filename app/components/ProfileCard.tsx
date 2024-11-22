"use client"

import Image from "next/image"
import Link from "next/link"
export default function ProfileCard() {
  return (
    <section className="flex flex-col items-center">
      <button className="p-[16px] bg-white-titan rounded-full">
        <Image
          src="./svg/avatar.svg"
          height={24}
          width={24}
          alt="avatar"
        ></Image>
      </button>
      <h3 className="mt-[16px] p-lg-semi md:hidden">Anthony Thomas</h3>
      <div
        className="p-[16px] bg-white relative rounded-[16px] [box-shadow:_0px_6px_80px_0px_rgba(0,0,0,4%);]
        before:content-[''] before:w-0 before:h-0 before:absolute before:border-[10px] before:border-transparent before:border-b-white before:right-[12%] before:-top-[20px]"
      >
        testsasasasasas <br></br>
        sasasa
      </div>
    </section>
  )
}
