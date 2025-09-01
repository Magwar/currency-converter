// src/lib/api.js
const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;

export async function fetchRates(base = "USD") {
  try {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`
    );

    if (!res.ok) throw new Error("Failed to fetch exchange rates");

    const data = await res.json();
    return data.conversion_rates;
  } catch (error) {
    console.error("Error fetching rates:", error);
    return null;
  }
}
