"use client";

import { useCurrency, SUPPORTED_CURRENCIES } from "@/context/CurrencyContext";
import { Globe } from "lucide-react";

interface CurrencySwitcherProps {
  isDark?: boolean;
}

export default function CurrencySwitcher({ isDark = false }: CurrencySwitcherProps) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="relative inline-flex items-center gap-1">
      <Globe 
        size={13} 
        className={`transition-colors duration-300 ${
          isDark ? "text-ivory/60" : "text-muted-foreground"
        }`} 
      />
      <select
        value={currency.code}
        onChange={(e) => setCurrency(e.target.value)}
        className={`appearance-none bg-transparent pr-4 pl-1 py-1 rounded-md text-[11px] font-bold font-body uppercase tracking-wider focus:outline-none cursor-pointer transition-all duration-300 border-none select-none ${
          isDark 
            ? "text-ivory/80 hover:text-ivory bg-white/5 hover:bg-white/10" 
            : "text-muted-foreground hover:text-foreground bg-muted/40 hover:bg-muted/70"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${isDark ? 'white' : 'black'}' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
          backgroundPosition: "right 2px center",
          backgroundSize: "7px",
          backgroundRepeat: "no-repeat",
        }}
      >
        {Object.values(SUPPORTED_CURRENCIES).map((c) => (
          <option key={c.code} value={c.code} className="text-foreground bg-background py-2 text-xs">
            {c.flag} {c.code}
          </option>
        ))}
      </select>
    </div>
  );
}
