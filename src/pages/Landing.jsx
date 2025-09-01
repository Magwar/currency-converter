import Hero from "../components/Hero";
import Features from "../components/Features";
import CTAButton from "../components/CTAButton";

export default function Landing() {
  return (
    <div>
      <Hero />
      <Features />
      <div className="text-center py-12">
        <CTAButton text="Get Started" to="/converter" />
      </div>
    </div>
  );
}