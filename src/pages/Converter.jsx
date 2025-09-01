import { useState } from "react";
import AmountInput from "../features/converter/AmountInput";
import ConvertFrom from "../features/converter/ConvertFrom";
import ConvertTo from "../features/converter/ConvertTo";
import ResultBox from "../features/converter/ResultBox";

export default function Converter() {
  const [amount, setAmount] = useState(1);
  const [target, setTarget] = useState("EUR");

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Currency Converter
      </h1>
      <div className="max-w-md mx-auto space-y-6">
        <AmountInput amount={amount} setAmount={setAmount} />
        <ConvertFrom /> {/* new dropdown */}
        <ConvertTo target={target} setTarget={setTarget} />
        <ResultBox amount={amount} target={target} />
      </div>
    </div>
  );
}