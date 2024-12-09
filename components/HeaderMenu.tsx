import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";

const HeaderMenu = () => {
  return (
    <div>
      <header className="bg-black text-white">
        <div className="flex justify-between items-center px-6 py-4 md:px-10">
          <div className="font-bold text-lg">
            <Link href="/">
              <span className="text-yellow-500">Food</span>
              <span className="text-white">tuck</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-yellow-500 text-white">
              Home
            </Link>
            <Link href="/menu" className="hover:text-yellow-500 text-white">
              Menu
            </Link>
            <Link href="/blog" className="hover:text-yellow-500 text-white">
              Blog
            </Link>
            <Link href="/pages" className="hover:text-yellow-500 text-white">
              Pages
            </Link>
            <Link href="/about" className="hover:text-yellow-500 text-white">
              About
            </Link>
            <Link href="/shop" className="hover:text-yellow-500 text-white">
              Shop
            </Link>
            <Link href="/contact" className="hover:text-yellow-500 text-white">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <FaSearch className="cursor-pointer hover:text-yellow-500" />
            <FaUser className="cursor-pointer hover:text-yellow-500" />
            <FaShoppingCart className="cursor-pointer hover:text-yellow-500" />
          </div>
        </div>

        {/* Mobile Menu */}
        <nav className="flex md:hidden flex-wrap justify-center space-x-4 py-4 text-sm">
          <Link href="/" className="hover:text-yellow-500 text-white">
            Home
          </Link>
          <Link href="/menu" className="hover:text-yellow-500 text-white">
            Menu
          </Link>
          <Link href="/blog" className="hover:text-yellow-500 text-white">
            Blog
          </Link>
          <Link href="/sign-in" className="hover:text-yellow-500 text-white">
            Pages
          </Link>
          <Link href="/about" className="hover:text-yellow-500 text-white">
            About
          </Link>
          <Link href="/shop" className="hover:text-yellow-500 text-white">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-yellow-500 text-white">
            Contact
          </Link>
        </nav>
      </header>

    </div>
  );
};

export default HeaderMenu;
