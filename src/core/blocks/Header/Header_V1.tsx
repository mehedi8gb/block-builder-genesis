import React from "react";
import Link from "next/link";
import {HeaderProps} from "@/core/types/theme";

export const Header_V1: React.FC<HeaderProps> = ({
    props
                                              }) => {
    return (
        <header className={`w-full flex items-center justify-between py-4 px-6 bg-white shadow ${props.className || ""}`}>
            <div className="flex items-center gap-2">
                {props.logo && <img src={props.logo} alt="Logo" className="h-8 w-8"/>}
                {props.title && <span className="font-bold text-xl">{props.title}</span>}
            </div>
            {props.nav && (
                <nav>
                    <ul className="flex gap-6">
                        {props.nav.map((item, idx) => (
                            <li key={idx}>
                                <Link href={item.url} className="text-gray-700 hover:text-blue-600 transition">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            {props.children}
        </header>
    );
};

