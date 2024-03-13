import Link from "next/link";
import { nanoid } from "nanoid";

export default function Navbar() {
  const navLinks = [
    { id: nanoid(), title: "Geschenkideen", path: "/" },
    { id: nanoid(), title: "Same Day Delivery", path: "/" },
    { id: nanoid(), title: "Gutscheine", path: "/" },
    { id: nanoid(), title: "Testimonials", path: "/" },
    { id: nanoid(), title: "Kontakt", path: "/" },
  ];
  return (
    <nav className="flex items-center justify-between w-full h-20 px-4">
      <h1 className="text-3xl font-bold">Valentinstag vergessen?</h1>
      <ul className="flex gap-4 text-xl">
        {navLinks.map((navLink) => (
          <>
            <li key={navLink.id}>
              <Link href={navLink.path}>{navLink.title}</Link>
            </li>
            <span className="text-red-400 font-bold">|</span>
          </>
        ))}
      </ul>
    </nav>
  );
}
