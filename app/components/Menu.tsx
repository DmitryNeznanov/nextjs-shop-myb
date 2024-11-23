"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Menu() {
  const pathName = usePathname()

  return (
    <ul className="flex flex-col gap-y-[73px] items-center capitalize">
      {[
        ["discover", "/"],
        ["make your burger", "/burger"],
      ].map(([text, link], i) => {
        return (
          <li
            className="w-max text-center"
            key={i}
          >
            <Link
              className={`relative p-lg ${
                pathName === "/" && link === pathName
                  ? "underline-primary p-lg-semi"
                  : pathName.includes(link) && link !== "/"
                  ? "underline-primary p-lg-semi"
                  : ""
              }`}
              href={link}
            >
              {text}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
