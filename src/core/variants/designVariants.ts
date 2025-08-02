// /core/variants/designVariants.ts

import { cva, type VariantProps } from "class-variance-authority";

// ✅ Define reusable type exports
export type GridContainerVariants = VariantProps<typeof gridContainer>;
export type CardItemVariants = VariantProps<typeof cardItem>;
export type TextVariants = VariantProps<typeof textVariants>;
export type SectionWrapperVariants = VariantProps<typeof sectionWrapper>;
export type TextBlockHeadingVariants = VariantProps<typeof textBlockHeading>;
export type TextBlockContentVariants = VariantProps<typeof textBlockContent>;
export type PositionVariants = VariantProps<typeof positionVariants>;

// 🎯 Grid Container Variants
export const gridContainer = cva("", {
    variants: {
        layout: {
            grid: "grid",
            default: "grid grid-cols-1",
            masonry: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            list: "flex flex-col space-y-4",
            carousel: "slick-slider",
        },
        columns: {
            1: "grid-cols-1",
            2: "grid-cols-2",
            3: "grid-cols-3",
            4: "grid-cols-4",
            5: "grid-cols-5",
            6: "grid-cols-6",
            auto: "grid-cols-auto",
            fit: "grid-cols-[repeat(auto-fit,minmax(200px,1fr))]",
            fill: "grid-cols-[repeat(auto-fill,minmax(250px,1fr))]",
        },
        spacing: spacingVariants(),
        animate: animationVariants(),
        rounded: roundedVariants(),
        justify: justifyVariants(),
        align: alignVariants(),
        border: borderVariants(),
        backgroundOpacity: bgOpacityVariants(),
        gap: spacingVariants(),
    },
    defaultVariants: {
        layout: "default",
        animate: "fade",
        rounded: "md",
        columns: 3,
        spacing: "md",
        justify: "start",
        align: "left",
        gap: "md",
        border: "none",
        backgroundOpacity: 100,
    },
});

// 🔹 Card Item Variant
export const cardItem = cva("relative cursor-pointer transition", {
    variants: {
        rounded: roundedVariants(),
        shadow: shadowVariants(),
        animate: animationVariants(),
    },
    defaultVariants: {
        rounded: "lg",
        shadow: "md",
        animate: "fade",
    },
});

// 🔹 Text Variant
export const textVariants = cva("", {
    variants: {
        size: textSizeVariants(),
        align: alignVariants(),
        weight: {
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        },
        color: textColorVariants(),
        animate: animationVariants(),
    },
    defaultVariants: {
        size: "base",
        align: "left",
        weight: "normal",
        color: "foreground",
        animate: "none",
    },
});

// 🔹 Section Wrapper
export const sectionWrapper = cva("w-full py-8", {
    variants: {
        bgColor: bgColorVariants(),
        padding: paddingVariants(),
        align: alignVariants(),
    },
    defaultVariants: {
        bgColor: "none",
        padding: "md",
        align: "center",
    },
});

// 🔹 Heading Text Variant
export const textBlockHeading = cva("font-heading font-bold", {
    variants: {
        size: headingSizeVariants(),
        color: textColorVariants(),
        spacing: spacingBlockVariants(),
        animate: animationVariants(),
    },
    defaultVariants: {
        size: "lg",
        color: "dark",
        spacing: "normal",
        animate: "fade",
    },
});

// 🔹 Content Text Variant
export const textBlockContent = cva("font-body", {
    variants: {
        size: textSizeVariants(),
        color: {
            muted: "text-gray-500",
            dark: "text-gray-800",
        },
        spacing: spacingBlockVariants(),
    },
    defaultVariants: {
        size: "md",
        color: "dark",
        spacing: "normal",
    },
});

// 🔹 Position Variant
export const positionVariants = cva("", {
    variants: {
        position: {
            topLeft: "absolute top-0 left-0",
            topRight: "absolute top-0 right-0",
            bottomLeft: "absolute bottom-0 left-0",
            bottomRight: "absolute bottom-0 right-0",
            center: "absolute inset-0 flex items-center justify-center",
            fixedTopLeft: "fixed top-0 left-0",
            fixedTopRight: "fixed top-0 right-0",
            fixedBottomLeft: "fixed bottom-0 left-0",
            fixedBottomRight: "fixed bottom-0 right-0",
        },
    },
    defaultVariants: {
        position: "center",
    },
});

// 🔹 Badge Variant
export const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground",
            },
            size: textSizeVariants(),
            position: {
                topLeft: "absolute top-0 left-0",
                topRight: "absolute top-0 right-0",
                bottomLeft: "absolute bottom-0 left-0",
                bottomRight: "absolute bottom-0 right-0",
                center: "absolute inset-0 flex items-center justify-center",
                fixedTopLeft: "fixed top-0 left-0",
                fixedTopRight: "fixed top-0 right-0",
                fixedBottomLeft: "fixed bottom-0 left-0",
                fixedBottomRight: "fixed bottom-0 right-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
            position: "topRight",
        },
    }
);

// 🔹 Image Variant
export const imageVariants = cva("object-cover", {
    variants: {
        size: {
            sm: "w-8 h-8",
            md: "w-16 h-16",
            lg: "w-24 h-24",
            xl: "w-32 h-32",
            full: "w-full h-full",
        },
        rounded: roundedVariants(),
        shadow: shadowVariants(),
    },
    defaultVariants: {
        size: "md",
        rounded: "md",
        shadow: "none",
    },
});

// 🔧 Reusable variant fragments
function spacingVariants() {
    return {
        none: "gap-0",
        xs: "gap-1",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
        "2xl": "gap-12",
        "3xl": "gap-16",
        fluid: "gap-[clamp(1rem,2vw,3rem)]",
    };
}

function headingSizeVariants() {
    return {
        sm: "text-xl",
        md: "text-2xl",
        lg: "text-4xl",
    };
}

function textSizeVariants() {
    return {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
    };
}

function spacingBlockVariants() {
    return {
        normal: "mb-4",
        tight: "mb-2",
        loose: "mb-6",
    };
}

function justifyVariants() {
    return {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
    };
}

function alignVariants() {
    return {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        top: "items-start",
        middle: "items-center",
        bottom: "items-end",
    };
}

function borderVariants() {
    return {
        none: "border-0",
        thin: "border border-gray-200",
        thick: "border-4 border-gray-400",
        dashed: "border border-dashed border-gray-300",
    };
}

function roundedVariants() {
    return {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        pill: "rounded-[999px]",
    };
}

function shadowVariants() {
    return {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
        glow: "shadow-[0_0_10px_rgba(0,0,0,0.5)]",
    };
}

function bgColorVariants() {
    return {
        white: "bg-white",
        gray: "bg-gray-100",
        dark: "bg-gray-900 text-white",
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        accent: "bg-accent text-white",
        transparent: "bg-transparent",
        gradient: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
        indigo: "bg-indigo-500 text-white",
        purple: "bg-purple-500 text-white",
        pink: "bg-pink-500 text-white",
        teal: "bg-teal-500 text-white",
        orange: "bg-orange-500 text-white",
        yellow: "bg-yellow-500 text-white",
        red: "bg-red-500 text-white",
        none: "",
    };
}

function bgOpacityVariants() {
    return {
        0: "bg-opacity-0",
        10: "bg-opacity-10",
        25: "bg-opacity-25",
        50: "bg-opacity-50",
        75: "bg-opacity-75",
        100: "bg-opacity-100",
    };
}

function paddingVariants() {
    return {
        sm: "px-4",
        md: "px-8",
        lg: "px-16",
    };
}

function textColorVariants() {
    return {
        primary: "text-primary",
        secondary: "text-secondary",
        muted: "text-muted",
        accent: "text-accent",
        destructive: "text-destructive",
        foreground: "text-foreground",
        dark: "dark"
    };
}

function animationVariants() {
    return {
        none: "",
        fade: "transition-opacity duration-500",
        zoom: "transition-transform duration-300 transform hover:scale-105",
        slideUp: "transform transition-transform duration-300 -translate-y-2 hover:translate-y-0",
        slideDown: "transform transition-transform duration-300 translate-y-2 hover:translate-y-0",
        pulse: "animate-pulse",
        wiggle: "hover:animate-wiggle",
        pop: "transition-transform hover:scale-[1.02] duration-300 ease-in-out",
        subtle: "transition-all duration-200 hover:opacity-80",
    };
}