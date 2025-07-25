'use client';
import React from 'react';
import clsx from 'clsx';


export interface TextBlockProps {

    props: {
        heading?: string;
        content?: string;
        align?: 'left' | 'center' | 'right';
        variant?: 'default' | 'primary' | 'muted';
        className?: string;
        children?: React.ReactNode;
    }
}

export const TextBlock_V2: React.FC<TextBlockProps> = ({
                                                           props: {
                                                               heading = 'Default Heading',
                                                               content,
                                                               align = 'left',
                                                               variant = 'default',
                                                               className = '',
                                                               children,
                                                           }
                                                       }) => {
    const alignmentClass = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    }[align];

    const variantClass = {
        default: '',
        primary: 'bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black',
        muted: 'bg-gray-50 dark:bg-gray-800',
    }[variant];

    return (
        <article
            role="region"
            className={clsx(
                'py-12 px-4 md:px-8 transition-all duration-300',
                variantClass,
                className
            )}
        >
            <div className={clsx('max-w-4xl mx-auto', alignmentClass)}>
                {heading && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-gray-900 dark:text-white">
                        {heading}
                    </h2>
                )}

                {content && (
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        {content}
                    </p>
                )}

                {/* Slot support */}
                {children && <div className="mt-4">{children}</div>}
            </div>
        </article>
    );
};
