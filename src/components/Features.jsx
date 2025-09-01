import { ArrowLeftRight, Globe, Clock } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <ArrowLeftRight size={28} />,
      title: "Easy Conversion",
      desc: "Convert between currencies instantly.",
    },
    {
      icon: <Globe size={28} />,
      title: "Global Coverage",
      desc: "Supports all major world currencies.",
    },
    {
      icon: <Clock size={28} />,
      title: "Real-time Rates",
      desc: "Up-to-date exchange rates at your fingertips.",
    },
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 border rounded-lg shadow hover:shadow-lg text-center"
          >
            <div className="flex justify-center mb-4 text-blue-600">
              {f.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}