import React from 'react';

interface HeroProps {
    props: {
        title?: string;
        subtitle?: string;
        buttonText?: string;
        backgroundImage?: string;
        className?: string;
    }
}

export const Hero_V1: React.FC<HeroProps> = ({
                                              props: {
                                                  title = "Welcome",
                                                  subtitle = "Discover amazing products",
                                                  buttonText = "Shop Now",
                                                  backgroundImage,
                                                  className = ""
                                              }
                                          }) => {
    const backgroundStyle = backgroundImage
        ? {backgroundImage: `url(${backgroundImage})`}
        : {};

    return (
        <section
            className={`relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 ${className}`}
            style={backgroundStyle}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-base">
                    {subtitle}
                </p>
                <button
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    {buttonText}
                </button>
            </div>
        </section>
    );
};
