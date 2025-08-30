import { Rocket, Zap, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
      <FeatureCard
        icon={<Zap size={24} />}
        title="Fast Conversion"
        description="Get instant results with our optimized conversion engine"
      />
      <FeatureCard
        icon={<Shield size={24} />}
        title="Accurate Rates"
        description="Real-time exchange rates from trusted financial sources"
      />
      <FeatureCard
        icon={<Rocket size={24} />}
        title="Global Coverage"
        description="Support for 150+ currencies from around the world"
      />
    </div>
  );
}