import Link from "next/link";
import DarkModeToggle from "../context/DarkModeToggle";
const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between gap-4 text-black bg-white px-4 py-2 rounded-md font-bold uppercase">
        <li>
          <Link href="/">Omnimus</Link>
        </li>
        <div className="flex gap-4">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/clients">Clients</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </div>
      </ul>
      <ul></ul>
    </nav>
  );
};

export default Navbar;
