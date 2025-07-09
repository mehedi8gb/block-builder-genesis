"use client";
import React from 'react';

interface TextBlockProps {
  heading?: string;
  content?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const TextBlock: React.FC<TextBlockProps> = ({ 
  heading = "Default Heading",
  content = "Default content text goes here.",
  align = 'left',
  className = ""
}) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];
  console.log("classname", className);

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className={`max-w-4xl mx-auto ${alignmentClass}`}>
        {heading && (
          <h2 className="text-3xl font-bold mb-6 font-heading">{heading}</h2>
        )}
        {content && (
          <p className="text-lg leading-relaxed font-base">{content}</p>
        )}
      </div>
    </section>
  );
};
