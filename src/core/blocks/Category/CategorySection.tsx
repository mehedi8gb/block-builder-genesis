"use client";

import {gridContainer, sectionWrapper, textBlockHeading} from '@/core/variants/designVariants';
import {useCategoryStore} from '@/core/stores/useCategoryStore';
import {BlockComponentFactory} from "@/core/registry/BlockComponentFactory";

export const CategorySection = ({props}) => {
    const categories = useCategoryStore(s => s.getAllCategories());
    console.log("Section props style", props.style);
    return (
        <section className={sectionWrapper(props.style)}>
            <div className="max-w-6xl mx-auto px-4">
                {props.title && (
                    <h2 className={textBlockHeading(props.style)}>
                        {props.title}
                    </h2>
                )}

                <div className={gridContainer(props.style)}>
                    {categories.map((item, i) =>
                        props.blocks.map((blockConfig, j) => {
                            const Block = BlockComponentFactory.resolve(blockConfig.type);
                            if (!Block) return null;
                            return (
                                <Block key={`${i}-${j}`} data={item} props={blockConfig.props}/>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
};
