export default function Select({ label, value, onChange, options = [] }) {
  return (
    <div className="mb-4">
      {label && <label className="block mb-2 font-semibold">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}