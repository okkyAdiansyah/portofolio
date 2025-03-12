import React from "react";
import Link from "next/link";
import styles from "@/styles/elements/cta.module.scss";

const CTA = ({style, content}) => {
    
    const ctaStyle = {
        main : "style--main",
        sec : "style--sec",
        bordered : "style--border"
    }

    return(
        <Link
            href={'/'}
            className={styles[ctaStyle[style]]}
        >
            {content}
        </Link>
    )
}

export default CTA;