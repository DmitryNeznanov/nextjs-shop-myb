import Link from "next/link"

export default function Address() {
  return (
    <address className="w-max">
      <Link
        className="p-lg-semi hover:underline"
        href="tel:88004378722"
      >
        8 800 437-87-22
      </Link>
    </address>
  )
}
