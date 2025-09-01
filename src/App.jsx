import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CurrencyProvider } from "./context/CurrencyContext";

export default function App() {
  return (
    <CurrencyProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CurrencyProvider>
  );
}