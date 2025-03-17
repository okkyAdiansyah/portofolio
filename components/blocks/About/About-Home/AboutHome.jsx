import React from "react";
import styles from "@/styles/blocks/aboutHome.module.scss";
import Image from "next/image";
import Profile from "@/public/Profile.png";
import CTA from "@/components/elements/Button/CTA/CTA";
import AboutBg from "@/public/Profile-2.png";

const AboutHome = () => {
    return(
        <section className={styles.container}>
            <div className={`${styles['child-container--3-cols']} ${styles['flex-start']}`}>
                <div>
                    <p>[1]</p>
                </div>
                <div className={styles['text-box']}>
                    <p>
                        About Me
                    </p>
                    <p>
                        I specialize in web and mobile development, creating fast, scalable, and user-friendly applications tailored to your business needs. With expertise in React, Next.js, and WordPress (headless CMS), I develop modern websites, custom plugins, and mobile apps that deliver seamless experiences. My approach prioritizes clean architecture, performance optimization, and security, ensuring your project is built for long-term success. Whether you need a custom website, plugin development, API integration, or mobile application, I bring technical expertise and creative problem-solving to the table.
                    </p>
                    <p>
                        I follow a structured development process, using Git version control, caching solutions (Redis, LiteSpeed), and best coding practices to ensure efficiency and scalability. From crafting engaging user interfaces to optimizing backend performance, I provide end-to-end solutions that help businesses grow. Let’s work together to bring your vision to life
                    </p>
                </div>
                <div className={styles['text-box']}>
                    <p>
                        Approach Angle
                    </p>
                    <p>
                        I believe that every project deserves a strategic, user-focused, and performance-driven approach. My process begins with a deep understanding of your goals, ensuring that the final product aligns with your vision and business needs. I prioritize clean architecture, scalability, and seamless user experiences, whether it’s a custom website, a mobile app, or a plugin development. By leveraging modern technologies like React, Next.js, WordPress (headless CMS), and caching solutions (Redis, LiteSpeed), I ensure that every project is built for speed, security, and long-term growth.
                    </p>
                </div>
            </div>
            <div className={`${styles['child-container--3-cols']} ${styles['flex-end']}`}>
                <div>
                    <Image
                        src={Profile}
                        alt="Profile Picture"
                    />
                </div>
                <div>
                    <p>
                        CREATE
                    </p>
                    <p>
                        YOUR ONLINE
                    </p>
                    <p>
                        PRESENCE
                    </p>
                </div>
                <div>
                    <p>Start Now</p>
                    <CTA
                        style={'bordered'}
                        content={
                            <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.7678 20.7678C47.7441 19.7915 47.7441 18.2085 46.7678 17.2322L30.8579 1.32233C29.8816 0.34602 28.2986 0.34602 27.3223 1.32233C26.346 2.29864 26.346 3.88155 27.3223 4.85786L41.4645 19L27.3223 33.1421C26.346 34.1184 26.346 35.7014 27.3223 36.6777C28.2986 37.654 29.8816 37.654 30.8579 36.6777L46.7678 20.7678ZM0 21.5H45V16.5H0V21.5Z" fill="#B3B3B3"/>
                            </svg>
                        }
                    />
                </div>
            </div>
            <div>
                <div className={styles['bg-img']}>
                    <Image src={AboutBg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default AboutHome;