// /core/variants/designVariants.ts

import {cva, type VariantProps} from "class-variance-authority";

// ✅ Define types here and export them
export type GridContainerVariants = VariantProps<typeof gridContainer>;
export type CardItemVariants = VariantProps<typeof cardItem>;
export type TextVariants = VariantProps<typeof textVariants>;
export type SectionWrapperVariants = VariantProps<typeof sectionWrapper>;
export type TextBlockHeadingVariants = VariantProps<typeof textBlockHeading>;
export type TextBlockContentVariants = VariantProps<typeof textBlockContent>;


// Grid container variant generator
export const gridContainer = cva("", {
    variants: {
        columns: {
            1: "grid grid-cols-1",
            2: "grid grid-cols-2",
            3: "grid grid-cols-3",
            4: "grid grid-cols-4",
            5: "grid grid-cols-5",
            6: "grid grid-cols-6",
            auto: "grid grid-cols-auto",
            fit: "grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]",
            fill: "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]",
        },
        spacing: {
            none: "gap-0",
            xs: "gap-1",
            sm: "gap-2",
            md: "gap-4",
            lg: "gap-6",
            xl: "gap-8",
            "2xl": "gap-12",
            "3xl": "gap-16",
            "fluid": "gap-[clamp(1rem,2vw,3rem)]",
        },
        animate: {
            none: '',
            fade: 'transition-opacity duration-500',
            zoom: 'transition-transform transform hover:scale-105 duration-500',
            slideUp: 'transition-transform transform hover:-translate-y-2 duration-500',
            pulse: 'animate-pulse',
            wiggle: 'hover:animate-wiggle',
            pop: "transition-transform hover:scale-[1.02] duration-300 ease-in-out",
            subtle: "transition-all duration-200 hover:opacity-80",
        },
        rounded: {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            full: 'rounded-full',
            "2xl": "rounded-2xl",
            "3xl": "rounded-3xl",
            "pill": "rounded-[999px]",
        },
        justify: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
            around: "justify-around",
            evenly: "justify-evenly",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
            top: "items-start",
            middle: "items-center",
            bottom: "items-end",
        },
        border: {
            none: "border-0",
            thin: "border border-gray-200",
            thick: "border-4 border-gray-400",
            dashed: "border border-dashed border-gray-300",
        },
        backgroundOpacity: {
            0: "bg-opacity-0",
            10: "bg-opacity-10",
            25: "bg-opacity-25",
            50: "bg-opacity-50",
            75: "bg-opacity-75",
            100: "bg-opacity-100",
        },
    },
    defaultVariants: {
        columns: 3,
        spacing: "md",
        justify: "start",
        align: "left",
        border: "none",
        backgroundOpacity: 100,
    },
});


// Card item variant generator
export const cardItem = cva("relative cursor-pointer transition", {
    variants: {
        rounded: {
            none: "",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            full: "rounded-full",
        },
        shadow: {
            none: "",
            sm: "shadow-sm",
            md: "shadow-md",
            lg: "shadow-lg",
            xl: "shadow-xl",
            glow: "shadow-[0_0_10px_rgba(0,0,0,0.5)]",
        },
        animate: {
            none: "",
            fade: "transition-opacity duration-500",
            zoom: "transition-transform duration-300 transform hover:scale-105",
            slideUp: "transform transition-transform duration-300 -translate-y-2 hover:translate-y-0",
            slideDown: "transform transition-transform duration-300 translate-y-2 hover:translate-y-0",
            pulse: 'animate-pulse',
            wiggle: 'hover:animate-wiggle',
            pop: "transition-transform hover:scale-[1.02] duration-300 ease-in-out",
            subtle: "transition-all duration-200 hover:opacity-80",
        },
    },
    defaultVariants: {
        rounded: "lg",
        shadow: "md",
        animate: "fade",
    },
});

// Text variant generator (for headings, content)
export const textVariants = cva("", {
    variants: {
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        },
        fontSize: {
            xs: "text-xs",
            sm: "text-sm",
            base: "text-base",
            lg: "text-lg",
            xl: "text-xl",
            "2xl": "text-2xl",
            "4xl": "text-4xl",
        },
        fontWeight: {
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        },
        textColor: {
            primary: "text-primary",
            secondary: "text-secondary",
            muted: "text-muted",
            accent: "text-accent",
            destructive: "text-destructive",
            foreground: "text-foreground",
            // add more theme colors here...
        },
    },
    defaultVariants: {
        align: "left",
        fontSize: "base",
        fontWeight: "normal",
        textColor: "foreground",
    },
});

export const sectionWrapper = cva("w-full py-8", {
    variants: {
        bgColor: {
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
        },
        padding: {
            sm: "px-4",
            md: "px-8",
            lg: "px-16",
        },
        align: {
            center: "text-center",
            left: "text-left",
            right: "text-right",
        },
    },
    defaultVariants: {
        bgColor: "none",
        padding: "md",
        align: "center",
    },
});

export const textBlockHeading = cva("font-heading font-bold", {
    variants: {
        size: {
            sm: "text-xl",
            md: "text-2xl",
            lg: "text-4xl",
        },
        color: {
            primary: "text-primary",
            secondary: "text-secondary",
            dark: "text-gray-900",
        },
        spacing: {
            normal: "mb-4",
            tight: "mb-2",
            loose: "mb-6",
        },
    },
    defaultVariants: {
        size: "lg",
        color: "dark",
        spacing: "normal",
    },
});

export const textBlockContent = cva("font-body", {
    variants: {
        size: {
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
        },
        color: {
            muted: "text-gray-500",
            dark: "text-gray-800",
        },
        spacing: {
            normal: "mb-0",
            tight: "mb-1",
            loose: "mb-4",
        },
    },
    defaultVariants: {
        size: "md",
        color: "dark",
        spacing: "normal",
    },
});