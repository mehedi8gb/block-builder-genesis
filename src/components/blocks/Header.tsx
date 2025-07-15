import React from "react";
import Link from "next/link";

interface HeaderProps {
    props: {
        logo?: string;
        title?: string;
        nav?: { title: string; url: string }[];
        children?: React.ReactNode;
        className?: string;
    }
}

export const Header: React.FC<HeaderProps> = ({
    props: {
        logo,
        title,
        nav = [
            { title: "Home", url: "/" },
        ],
        children,
        className = ""
    }
                                              }) => {
    return (
        <header className={`w-full flex items-center justify-between py-4 px-6 bg-white shadow ${className || ""}`}>
            <div className="flex items-center gap-2">
                {logo && <img src={logo} alt="Logo" className="h-8 w-8"/>}
                {title && <span className="font-bold text-xl">{title}</span>}
            </div>
            {nav && (
                <nav>
                    <ul className="flex gap-6">
                        {nav.map((item, idx) => (
                            <li key={idx}>
                                <Link href={item.url} className="text-gray-700 hover:text-blue-600 transition">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            {children}
        </header>
    );
};

