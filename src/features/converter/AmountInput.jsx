import Input from "../../components/ui/Input";

export default function AmountInput({ amount, setAmount }) {
  return (
    <Input
      label="Amount"
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="Enter amount"
    />
  );
}