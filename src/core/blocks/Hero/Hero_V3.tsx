import React from 'react';

interface HeroProps {
    props: {
        title?: string;
        subtitle?: string;
        buttonText?: string;
        backgroundImage?: string;
        className?: string;
    };
}

export const Hero_V3: React.FC<HeroProps> = ({
                                                 props: {
                                                     title = "Welcome",
                                                     subtitle = "Discover amazing products",
                                                     buttonText = "Shop Now",
                                                     backgroundImage,
                                                     className = ""
                                                 }
                                             }) => {
    return (
        <section
            className={`relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 ${className}`}
        >
            {/* Text Side */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                    {subtitle}
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    {buttonText}
                </button>
            </div>

            {/* Visual Side */}
            <div className="w-full md:w-1/2 h-64 md:h-full relative">
                <div
                    className="w-full h-full rounded-xl shadow-lg"
                    style={{
                        backgroundImage: `url(${backgroundImage || "https://source.unsplash.com/800x600/?technology"})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div>
        </section>
    );
};
