export default function Footer() {
  return (
    <footer className="text-center py-6 border-t mt-8 text-sm text-gray-600">
      © {new Date().getFullYear()} CurrencyApp. All rights reserved.
    </footer>
  );
}