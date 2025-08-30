import { useNavigate } from "react-router-dom";

export default function CTAButton() {
  const navigate = useNavigate();

  return (
    <div className="mt-12">
      <button
        onClick={() => navigate("/converter")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </div>
  );
}