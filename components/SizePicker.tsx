"use client";

import { useState } from "react";

interface SizePickerProps {
  sizes: ProductSize[];
  onChange?: (size: number) => void;
}

interface ProductSize {
  size: number;
  is_available: boolean;
}

export default function SizePicker({ sizes, onChange }: SizePickerProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const allSize = [...sizes].sort((a, b) => a.size - b.size);

  const handleSelected = (size: number, is_available: boolean) => {
    if (!is_available) return;
    setSelectedSize(size);
    onChange?.(size);
  };
  return (
    <div>
      {allSize.map((s) => {
        return (
          <button
            key={s.size}
            onClick={() => handleSelected(s.size, s.is_available)}
            disabled={!s.is_available}
            className={`p-4 m-2 rounded-lg border-none text-sm font-medium ${
              selectedSize === s.size ? "bg-black text-white " : "bg-white text-black "
            } ${
              !s.is_available
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            {s.size}
          </button>
        );
      })}
    </div>
  );
}
