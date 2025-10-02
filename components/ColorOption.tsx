"use client";
import { useEffect, useState } from "react";

interface ColorOption {
  name: string;
  value: string;
}

const colorOption: ColorOption[] = [
  { name: "blue", value: "#4A69E2" },
  { name: "yellow", value: "#FFA52F" },
  { name: "black", value: "#232321" },
  { name: "green", value: "#234D41" },
  { name: "gray", value: "#353336" },
  { name: "pink", value: "#F08155" },
  { name: "gratlight", value: "#C9CCC6" },
  { name: "elephent", value: "#677282" },
  { name: "brown", value: "#925513" },
  { name: "coffe", value: "#BB8056" },
];

export default function ColorOption() {
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(()=>{
    setSelectedColor(colorOption[0].value)
  },[])

  return (
    <div className="p-1">
      {colorOption.map((color) => (
        <button
          onClick={() => setSelectedColor(color.value)}
          key={color.value}
          title={color.name}
          style={{backgroundColor:color.value}}
          className={`w-10 h-10 rounded-full  border-4  transition-transform m-2 duration-200 ${
            selectedColor === color.value
              ? "scale-110 outline outline-3 border-[#E7E7E3]  outline-[#232321]"
              : "border-none"
          }`}
        ></button>
      ))}
    </div>
  );
}
