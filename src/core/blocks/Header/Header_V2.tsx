import React from "react";
import Link from "next/link";
import { HeaderProps } from "@/core/types/theme";

export const Header_V2: React.FC<HeaderProps> = ({ props }) => {
    return (
        <header
            className={`w-full py-4 px-6 flex items-center justify-between backdrop-blur-md bg-white/60 dark:bg-black/30 border-b border-white/20 shadow-md ${props.className || ""}`}
        >
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
                {props.logo && <img src={props.logo} alt="Logo" className="h-10 w-10 rounded" />}
                {props.title && (
                    <span className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            {props.title}
          </span>
                )}
            </div>

            {/* Navigation */}
            {props.nav && (
                <nav>
                    <ul className="flex gap-6">
                        {props.nav.map((item, idx) => (
                            <li key={idx} className="relative group">
                                <Link
                                    href={item.url}
                                    className="text-gray-800 dark:text-gray-100 font-medium transition-colors duration-200"
                                >
                                    {item.title}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {/* Children Slot (for CTA, toggles, etc.) */}
            <div className="flex items-center gap-4">{props.children}</div>
        </header>
    );
};
