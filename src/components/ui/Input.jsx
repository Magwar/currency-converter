export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="mb-4">
      {label && <label className="block mb-2 font-semibold">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
}