import Logo from "../public/images/Group.svg";
import Link from "next/link";
import Image from "next/image";
import Search from "../public/images/Search.svg";
import Person from "../public/images/person.svg";
import Zero from "../public/images/zero.svg";
export default function Header() {
  return (
    <header>
      <div className=" main-container bg-white my-3  rounded-xl flex justify-between p-4 items-center px-7">
        <div className="menu  ">
          <nav className="flex space-x-6">
            <Link href="/newdrops">New Drops 🔥</Link>
            <div className="relative group">
              <Link href="/men" className="px-2 py-1 hover:text-blue-500">
                Men ▼
              </Link>
              <div className="absolute left-0 top-full mt-2 w-40 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                <Link
                  rel="stylesheet"
                  href="/men/shirts"
                  className="block px-4 py-2 hover:bg-gray-100"
                >Shirts</Link>
                <Link
                  rel="stylesheet"
                  href=""
                  className="block px-4 py-2 hover:bg-gray-100"
                >Pants</Link>
              </div>
            </div>
            <Link href="/women">Women ▼</Link>
          </nav>
        </div>
        <div className="logo ">
          <Image className="w-24 " src={Logo} alt="" />
        </div>
        <div className="icon flex gap-8">
          <Image src={Search} alt="" />
          <Image src={Person} alt="" />
          <Image src={Zero} alt="" />
        </div>
      </div>
    </header>
  );
}
