import Select from "../../components/ui/Select";
import { useCurrency } from "../../context/CurrencyContext";

export default function ConvertTo({ to, setTo }) {
  const { rates } = useCurrency();

  return (
    <Select
      label="To"
      value={to}
      onChange={(e) => setTo(e.target.value)}
      options={Object.keys(rates)}
    />
  );
}