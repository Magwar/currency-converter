import { createContext, useContext, useState, useEffect } from "react";
import { fetchRates } from "../lib/api";

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [base, setBase] = useState("USD");
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRates = async () => {
      setLoading(true);
      const data = await fetchRates(base);
      if (data) setRates(data);
      setLoading(false);
    };
    loadRates();
  }, [base]);

  return (
    <CurrencyContext.Provider value={{ base, setBase, rates, loading }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
