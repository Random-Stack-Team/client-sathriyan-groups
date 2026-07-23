"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type CustomSelectProps = {
  name: string;
  options: string[];
  placeholder: string;
};

export function CustomSelect({
  name,
  options,
  placeholder,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="relative">
      <input type="hidden" name={name} value={selected} />
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className="text-brand-ink ease-brand hover:border-brand-gold-deep focus:border-brand-gold-deep flex h-13 w-full items-center justify-between border-b border-black/14 text-left text-base font-semibold transition duration-500 outline-none"
      >
        <span className={selected ? "" : "text-brand-muted-light"}>
          {selected || placeholder}
        </span>
        <span className="text-brand-muted ease-brand grid size-9 place-items-center border border-black/10 transition duration-500">
          <ChevronDown
            className={`ease-brand size-4 transition duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <div className="absolute right-0 left-0 z-30 mt-3 overflow-hidden border border-black/8 bg-white shadow-[0_24px_70px_rgba(17,24,39,0.16)]">
          <div className="max-h-72 overflow-y-auto p-2">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-bold transition duration-300 ${
                  selected === option
                    ? "bg-brand-ink text-white"
                    : "text-brand-ink hover:bg-brand-surface"
                }`}
              >
                <span>{option}</span>
                {selected === option ? (
                  <span className="bg-brand-gold h-px w-5" />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
