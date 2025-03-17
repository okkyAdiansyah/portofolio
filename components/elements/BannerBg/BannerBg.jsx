import React from "react";
import styles from "@/styles/elements/bannerBg.module.scss";
import Image from "next/image";
import PersonalIcon from "@/public/Decor-2.png"
import Decor from "@/public/Decor.png";
import BannerImg from "@/public/Banner.png";

const BannerBg = () => {
    return(
        <div className={styles.container}>
            <Image 
                className={styles['personal-icon']} 
                src={PersonalIcon} 
                width={532} 
                height={532} 
                alt="Personal Icon" 
            />
            <Image
                className={styles.decor}
                src={Decor}
                alt="Decor"
            />
            <Image
                className={styles['banner-img']}
                src={BannerImg}
                alt="Banner"
            />
        </div>
    );
};

export default BannerBg;