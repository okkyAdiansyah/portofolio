import React from 'react';
import ServiceCard from '@/components/modules/ServiceCard/ServiceCard';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/blocks/services.module.scss';
import Decor from '@/public/Decor.png';

const Services = () => {
    const marketingTools = ['Landing Page', 'Email Marketing', 'CRM'];
    const website = ['Blog', 'Ecommerce', 'Web App'];
    const socialMediaManagement = ['Meta', 'Ads', 'Content Creation'];

    return (
        <section className={styles.container}>
            <div className={styles['title-container']}>
                <p>[2]</p>
                <p>Services</p>
            </div>
            <div className={styles['content-container']}>
                <div className={styles['cta-container']}>
                    <p>If You’d Like To Know More</p>
                    <Link href={'/'} className={styles.cta}>
                        Get In Touch
                    </Link>
                </div>
                <div className={styles.content}>
                    <div className={styles['services-title']}>
                        <p>THE SERVICES THAT YOU MIGHT NEED</p>
                        <Image src={Decor} alt='' />
                    </div>
                    <div className={styles['service-cards-container']}>
                        <ServiceCard
                            className={styles['card-span']}
                            icon={
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="11" fill="#505050"/>
                                    <circle cx="24" cy="24" r="9" fill="#151515"/>
                                </svg>
                            }
                            serviceType={'Marketing Tools'}
                            services={marketingTools}
                        />
                        <ServiceCard
                            className={styles['card-col-1']}
                            icon={
                                <svg width="58" height="61" viewBox="0 0 58 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.944 39.32L31.512 30.344L47.592 13.4H56.232L41.736 29L37.416 33.608L31.944 39.32ZM24.984 47V13.4H32.712V47H24.984ZM47.976 47L36.024 32.36L41.112 26.84L57.048 47H47.976Z" fill="#505050"/>
                                    <path d="M26.056 21.68L26.488 30.656L10.408 47.6L1.768 47.6L16.264 32L20.584 27.392L26.056 21.68ZM33.016 14L33.016 47.6L25.288 47.6L25.288 14L33.016 14ZM10.024 14L21.976 28.64L16.888 34.16L0.951994 14L10.024 14Z" fill="#505050"/>
                                </svg>
                            }  
                            serviceType={'Website'}
                            services={website}
                        />
                        <ServiceCard
                            className={styles['card-col-2']}
                            icon={
                                <svg width="49" height="61" viewBox="0 0 49 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.336 47V33.272L29.112 37.976L14.328 13.4H22.584L33.912 32.264H29.16L40.536 13.4H48.168L33.384 37.976L35.112 33.272V47H27.336Z" fill="#505050"/>
                                    <path d="M21.664 14L21.664 27.728L19.888 23.024L34.672 47.6L26.416 47.6L15.088 28.736L19.84 28.736L8.464 47.6L0.831997 47.6L15.616 23.024L13.888 27.728L13.888 14L21.664 14Z" fill="#505050"/>
                                </svg>
                            }  
                            serviceType={'Social Media Management'}
                            services={socialMediaManagement}
                        />
                    </div>
                </div>
            </div>
        </section>
  )
};

export default Services;