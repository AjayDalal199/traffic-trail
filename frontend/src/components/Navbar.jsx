import { assets } from "../assets/assets";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-10 w-full">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={assets.logo} alt="Logo" className="w-52" />
      </div>

      <div className="flex items-center gap-8">
        {/* Nav Links */}
        <ul className="flex items-center gap-12 text-2xl font-medium">
          <li className="flex items-center gap-1 cursor-pointer ">Services</li>
          <li className="flex items-center gap-1 cursor-pointer ">Company</li>
          <li className="cursor-pointer ">Blogs</li>
          <li className="cursor-pointer ">Startups</li>
          <li className="cursor-pointer ">Contact us</li>
        </ul>

        {/* Pay Now Button */}
        <button className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-red-600 text-white hover:bg-red-700 transition text-xl">
          PAY NOW
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
