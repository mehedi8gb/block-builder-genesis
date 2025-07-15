"use client";
import React from 'react';

interface ProductSpecsProps {
    props: {
        specs: { label: string; value: string }[]
    };
    data?: {
        [key: string]: any;
    }
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({props, data}) =>
    (
    <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Specifications</h2>
        {/*<ul className="space-y-4">*/}
        {/*    {data?.specs.map((spec, idx) => (*/}
        {/*        <li key={idx} className="flex justify-between border-b pb-2">*/}
        {/*            <span className="font-medium text-gray-700">{spec.label}</span>*/}
        {/*            <span className="text-gray-600">{spec.value}</span>*/}
        {/*        </li>*/}
        {/*    ))}*/}
        {/*</ul>*/}
    </section>
);
