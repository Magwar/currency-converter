import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Convert Currency Instantly</h1>
      <p className="text-lg mb-6">
        Fast, accurate, and easy-to-use converter for global currencies.
      </p>
      <Link
        to="/converter"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200"
      >
        Try Now
      </Link>
    </section>
  );
}