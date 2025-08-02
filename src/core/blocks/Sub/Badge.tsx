"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {badgeVariants} from "@/core/variants/designVariants";

function Badge({ props }) {

    return (
        <div className={badgeVariants(props.style)} >
            {props.text}
        </div>
    )
}

export { Badge }
