import Select from "../../components/ui/Select";
import { useCurrency } from "../../context/CurrencyContext";

export default function ConvertFrom({ from, setFrom }) {
  const { rates } = useCurrency();

  return (
    <Select
      label="From"
      value={from}
      onChange={(e) => setFrom(e.target.value)}
      options={Object.keys(rates)}
    />
  );
}