// src/data/products.ts

import {Product} from "@/core/types/theme";

export const productList: Product[] = [
    {
        id: 1,
        name: 'Potato',
        price: '$5.00',
        slug: 'potato',
        image: 'https://cdn.pixabay.com/photo/2018/05/29/23/18/potato-3440360_1280.jpg',
        specs: [
            {
                label: "Material",
                value: "Organic Cotton"
            },
            {
                label: "Grade",
                value: "A"
            },
            {
                label: "Color",
                value: "Test"
            }
        ]
    },
    {
        id: 2,
        name: 'Dal',
        price: '$3.00',
        slug: 'dal',
        image: 'https://cdn.pixabay.com/photo/2017/07/28/16/30/bee-pollen-2549125_1280.jpg',
        specs: [
            {
                label: "Material",
                value: "Organic Cotton"
            },
            {
                label: "Grade",
                value: "A"
            },
            {
                label: "Color",
                value: "Test"
            }
        ]
    },
    {
        id: 3,
        name: 'T-shirt',
        price: '$18.00',
        slug: 't-shirt',
        image: 'https://fabrilife.com/image-gallery/638a77dc9c88d-square.jpg',
    },
    {
        id: 4,
        name: 'Sports Trouser',
        price: '$20.00',
        slug: 'sports-trowser',
        image: 'https://fabrilife.com/image-gallery/67cc87e4ecfe9-square.jpg',
    },
];
