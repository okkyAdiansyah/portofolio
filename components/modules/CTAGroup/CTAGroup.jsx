import CTA from "@/components/elements/Button/CTA/CTA";
import React from "react";
import styles from "@/styles/modules/ctaGroup.module.scss";

const CTAGroup = () => {
    return(
        <>
            <div className={styles.container}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.944 23.624V0.776H16.336V23.624H8.944ZM0.784 15.704V8.696H24.448V15.704H0.784Z" fill="#F1F1F1"/>
                </svg>
                <div className={styles["text-group"]}>
                    <p className={styles.location}>New Jersey</p>
                    <p className={styles.existence}>[Since 2019]</p>
                </div>
                <CTA style={'main'} content={"Let's Talk"} />
            </div>
        </>
    )
}

export default CTAGroup;