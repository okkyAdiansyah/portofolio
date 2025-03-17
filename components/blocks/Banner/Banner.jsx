import React from "react";
import BannerBg from "@/components/elements/BannerBg/BannerBg";
import styles from "@/styles/blocks/banner.module.scss";

const Banner = () => {
    return(
        <section className={styles.container}>
            <BannerBg />
            <div className={styles['text-container']}>
                <p>
                    CREATIVE DIGITAL
                </p>
                <p>
                    PARTNER
                </p>
            </div>
        </section>
    );
};

export default Banner;