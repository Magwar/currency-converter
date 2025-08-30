export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
    </div>
  );
}