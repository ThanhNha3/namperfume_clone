"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items = [] }: { items: { label: string; href?: string }[] }) {
    return (
        <nav className="text-sm text-gray-600 my-2" aria-label="breadcrumb">
            <ol className="flex items-center flex-wrap gap-1">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-1">
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="hover:text-red-600 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="font-medium text-gray-800">{item.label}</span>
                        )}
                        {index < items.length - 1 && (
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
