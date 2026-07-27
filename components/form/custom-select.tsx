"use client";

import { ChevronDown } from "lucide-react";
import { useCallback, useRef, useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(-1);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const close = useCallback(() => {
    setIsOpen(false);
    setActiveIndex(-1);
    triggerRef.current?.focus();
  }, []);

  const select = useCallback(
    (option: string) => {
      setSelected(option);
      close();
    },
    [close],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOpen(true);
          setActiveIndex(selected ? options.indexOf(selected) : 0);
        }
        return;
      }

      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          const next = activeIndex < options.length - 1 ? activeIndex + 1 : 0;
          setActiveIndex(next);
          optionRefs.current[next]?.focus();
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          const prev = activeIndex > 0 ? activeIndex - 1 : options.length - 1;
          setActiveIndex(prev);
          optionRefs.current[prev]?.focus();
          break;
        }
        case "Enter": {
          e.preventDefault();
          if (activeIndex >= 0) select(options[activeIndex]);
          break;
        }
        case "Escape": {
          e.preventDefault();
          close();
          break;
        }
        case "Home": {
          e.preventDefault();
          setActiveIndex(0);
          optionRefs.current[0]?.focus();
          break;
        }
        case "End": {
          e.preventDefault();
          setActiveIndex(options.length - 1);
          optionRefs.current[options.length - 1]?.focus();
          break;
        }
      }
    },
    [isOpen, activeIndex, options, selected, select, close],
  );

  return (
    <div className="relative" onKeyDown={handleKeyDown}>
      <input type="hidden" name={name} value={selected} />
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`${name}-listbox`}
        onClick={() => {
          setIsOpen((v) => !v);
          if (!isOpen) setActiveIndex(selected ? options.indexOf(selected) : 0);
        }}
        className="text-brand-ink ease-brand hover:border-brand-gold-deep focus:border-brand-gold-deep flex h-13 w-full items-center justify-between border-b border-black/14 text-left text-base font-semibold transition duration-500 outline-none"
      >
        <span className={selected ? "" : "text-brand-muted-light"}>
          {selected || placeholder}
        </span>
        <span className="text-brand-muted ease-brand grid size-9 place-items-center rounded-lg border border-black/10 transition duration-500">
          <ChevronDown
            className={`ease-brand size-4 transition duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          id={`${name}-listbox`}
          role="listbox"
          aria-label={placeholder}
          className="absolute right-0 left-0 z-30 mt-3 overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_24px_70px_rgba(17,24,39,0.16)]"
        >
          <div className="max-h-72 overflow-y-auto p-2">
            {options.map((option, index) => (
              <button
                key={option}
                ref={(el) => {
                  optionRefs.current[index] = el;
                }}
                type="button"
                role="option"
                aria-selected={selected === option}
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => select(option)}
                onFocus={() => setActiveIndex(index)}
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
