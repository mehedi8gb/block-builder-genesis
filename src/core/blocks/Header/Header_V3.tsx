'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

export interface NavItem {
    title: string;
    url: string;
}

export interface HeaderProps {
    title?: string;
    logo?: string;
    nav?: NavItem[];
    className?: string;
    children?: React.ReactNode;
}

export const Header_V3: React.FC<HeaderProps> = ({
                                                     title,
                                                     logo,
                                                     nav = [],
                                                     className,
                                                     children,
                                                 }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            role="banner"
            className={clsx(
                'w-full py-4 px-6 flex items-center justify-between backdrop-blur-md bg-white/60 dark:bg-black/30 border-b border-white/20 shadow-md',
                className
            )}
        >
            {/* Logo + Title */}
            <div className="flex items-center gap-3">
                {logo && <img src={logo} alt={`${title || 'Logo'}`} className="h-10 w-10 rounded" />}
                {title && (
                    <span className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            {title}
          </span>
                )}
            </div>

            {/* Navigation - Desktop */}
            {nav?.length > 0 && (
                <nav className="hidden md:block">
                    <ul className="flex gap-6">
                        {nav.map((item, idx) => (
                            <li key={idx} className="relative group">
                                <Link
                                    href={item.url}
                                    className="text-gray-800 dark:text-gray-100 font-medium transition-colors duration-200"
                                >
                                    {item.title}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {/* Right-side actions */}
            <div className="flex items-center gap-4">{children}</div>

            {/* Mobile Nav Toggle */}
            {nav?.length > 0 && (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-800 dark:text-white focus:outline-none"
                    aria-label="Toggle Navigation"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            )}

            {/* Mobile Nav Menu */}
            {isOpen && (
                <nav className="absolute top-full left-0 w-full bg-white dark:bg-black shadow-md md:hidden z-50">
                    <ul className="flex flex-col gap-2 p-4">
                        {nav.map((item, idx) => (
                            <li key={idx}>
                                <Link
                                    href={item.url}
                                    className="block text-gray-800 dark:text-gray-100 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};
