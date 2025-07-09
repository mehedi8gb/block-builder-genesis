
import React from 'react';
import Link from 'next/link';

interface FooterLinksProps {
  links?: Array<{ title: string; url: string }>;
  copyright?: string;
  className?: string;
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ 
  links = [
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Privacy", url: "/privacy" }
  ],
  copyright = "© 2024 Your Company. All rights reserved.",
  className = ""
}) => {
  return (
    <footer className={`bg-gray-900 text-white py-12 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {links.map((link, index) => (
            <Link 
              key={index}
              href={link.url}
              className="hover:text-blue-400 transition-colors font-base"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="text-center text-gray-400 font-base">
          {copyright}
        </div>
      </div>
    </footer>
  );
};
