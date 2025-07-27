// components/blocks/TextBlock/TextBlock_V1.tsx
"use client";

import React from "react";
import {
    sectionWrapper,
    textBlockHeading,
    textBlockContent,
} from "@/core/variants/designVariants";
import { mergeClasses } from "@/core/utils/classUtils";

export const TextBlock_V1 = ({ props }) => {
    const {
        heading = "Default Heading",
        content = "Default content text goes here.",
        wrapperVariant,
        headingVariant,
        contentVariant,
        className = "",
    } = props;

    return (
        <section className={mergeClasses(sectionWrapper(wrapperVariant), className)}>
            {heading && <h2 className={textBlockHeading(headingVariant)}>{heading}</h2>}
            {content && <p className={textBlockContent(contentVariant)}>{content}</p>}
        </section>
    );
};
