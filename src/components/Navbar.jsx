import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-white">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        CurrencyApp
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/converter" className="hover:text-blue-600">
          Converter
        </Link>
      </div>
    </nav>
  );
}