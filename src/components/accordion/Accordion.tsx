"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionProps = {
    children: React.ReactNode;
};

export default function Accordion({ children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Content wrapper */}
            <div
                className={`relative transition-all duration-500 overflow-hidden ${isOpen ? "max-h-max" : "max-h-12"
                    }`}
            >
                <div className="text-[var(--color-text)] text-center text-sm">{children}</div>

                {/* Gradient overlay khi đóng */}
                {!isOpen && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
                )}
            </div>

            {/* Toggle button */}
            <div className="flex justify-center mt-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center"
                >
                    <ChevronDown
                        className={`h-6 w-6 text-[var(--subtext-color)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                            }`}
                    />
                </button>
            </div>
        </div>
    );
}
