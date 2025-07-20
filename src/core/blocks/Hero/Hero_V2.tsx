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

export const Hero_V2: React.FC<HeroProps> = ({
                                                 props: {
                                                     title = "Welcome",
                                                     subtitle = "Discover amazing products",
                                                     buttonText = "Shop Now",
                                                     backgroundImage,
                                                     className = ""
                                                 }
                                             }) => {
    const backgroundStyle = backgroundImage
        ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
        : {};

    return (
        <section
            className={`relative w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center text-white ${className}`}
            style={backgroundStyle}
        >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
            <div className="relative z-10 bg-white/10 border border-white/30 backdrop-blur-lg rounded-xl p-10 max-w-2xl text-center shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow">
                    {title}
                </h1>
                <p className="text-lg md:text-xl mb-6 text-white/90">
                    {subtitle}
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                    {buttonText}
                </button>
            </div>
        </section>
    );
};
