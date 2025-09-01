import { useCurrency } from "../../context/CurrencyContext";

export default function ResultBox({ amount, target }) {
  const { rates, loading, base } = useCurrency();

  if (loading) return <p>Fetching rates...</p>;
  if (!rates[target]) return <p>No data available for {target}</p>;

  const converted = (amount * rates[target]).toFixed(2);

  return (
    <div className="p-4 border rounded-lg bg-gray-50 text-center shadow">
      <p className="text-lg font-semibold">Converted Amount:</p>
      <p className="text-2xl font-bold text-blue-600 mt-2">
        {converted} {target}
      </p>
      <p className="text-gray-500 text-sm mt-2">
        Based on 1 {base} = {rates[target]} {target}
      </p>
    </div>
  );
}