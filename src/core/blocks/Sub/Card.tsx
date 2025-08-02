import { cardItem, textBlockHeading } from "@/core/variants/designVariants";
import Link from "next/link";
import Image from "next/image";
import {BlockComponentFactory} from "@/core/registry/BlockComponentFactory";


export const Card = ({ data, props }) => {
    return (
        <Link href={data.slug}>
            <div
                className={cardItem(props.style)}
                style={{
                    backgroundImage: `url(${data.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="p-4 space-y-2">
                    <h3 className={textBlockHeading(props.style)}>
                        {data.name}
                    </h3>

                    {/* ✅ Dynamically render inner blocks inside card */}
                    {props?.blocks?.map((block, index) => {
                        const Block = BlockComponentFactory.resolve(block.type);
                        return <Block key={index} {...block} />;
                    })}
                </div>
            </div>
        </Link>
    );
};
