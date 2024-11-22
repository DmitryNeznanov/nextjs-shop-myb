"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Menu() {
  const pathName = usePathname()

  return (
    <ul>
      {[
        ["discover", "/"],
        ["make your burger", "/burger"],
      ].map(([text, link], i) => {
        console.log(pathName, pathName.length)

        return (
          <li key={i}>
            <Link
              className={`${
                pathName === "/" && link === pathName
                  ? "underline"
                  : pathName.includes(link) && link !== "/"
                  ? "underline"
                  : ""
              }`}
              href={`${link}`}
            >
              {text}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
