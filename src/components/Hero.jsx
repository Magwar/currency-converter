export default function Hero() {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
        <span className="text-2xl">$</span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Currency Converter Pro
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Convert currencies with real-time exchange rates
      </p>
      <p className="text-gray-500">
        Get accurate currency conversions for over 150 currencies worldwide.
        Fast, reliable, and easy to use.
      </p>
    </div>
  );
}