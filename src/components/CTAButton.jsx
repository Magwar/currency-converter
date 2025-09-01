import { Link } from "react-router-dom";

export default function CTAButton({ text, to }) {
  return (
    <Link
      to={to}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
    >
      {text}
    </Link>
  );
}