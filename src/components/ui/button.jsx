
import React from "react";

export function Button({ children, asChild, ...props }) {
  const Comp = asChild ? "a" : "button";
  return (
    <Comp
      className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
      {...props}
    >
      {children}
    </Comp>
  );
}
