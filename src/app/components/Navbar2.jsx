import Link from "next/link";
import Image from "next/image";
import NavLink from "./Navlink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar2 = () => {
  return (
    <nav className="bg-white fixed z-20 top-0 w-full start-0 border-b border-gray-300 px-4 md:px-12">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 ">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/image/logo.png" alt="logo" width={110} height={50} />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1 text-center mx-2 my-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Lets Talk
          </button>
        </div>
        <div className="md:flex items-center justify-between hidden w-full md:w-auto md:order-1">
          {navLinks.map((link, i) => (
            <ul key={i} className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li>
                <NavLink href={link.path} title={link.title} className="block py-2 px-3  text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 "></NavLink>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
