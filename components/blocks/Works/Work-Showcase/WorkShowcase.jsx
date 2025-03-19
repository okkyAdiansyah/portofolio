'use client';

import React, { useState } from 'react';
import styles from '@/styles/blocks/workShowcase.module.scss';
import AsuraLogo from '@/public/Asura-Logo.webp';
import EsquireLogo from '@/public/Esquire-Logo.png';
import MuliaLogo from '@/public/Mulia-Logo.svg';
import MSLogo from '@/public/MS-Logo.png';
import Asura from '@/public/Asura.jpg';
import TheMulia from '@/public/TheMulia.jpg';
import Esquire from '@/public/Esquire.jpg';
import MS from '@/public/MS.png';
import WorkAccordion from '@/components/modules/WorkAccordion/WorkAccordion';
import Image from 'next/image';
import Link from 'next/link';

const WorkShowcase = () => {
    const [activeAccordion, setActiveAccordion] = useState(0)
    const work = [
        {
            logo : AsuraLogo,
            thumb : Asura,
            logoW : 100,
            logoH : 100,
            href : '/',
            name : 'Asuracomic.net',
            projectName : 'Asurascans',
            detail : 'Comic reading platform built with Next.JS. Developed both user-facing interface and admin dashboard',
            desc : 'Comic Reading Platform',
            type : 'Web App'
        },
        {
            logo : EsquireLogo,
            thumb : Esquire,
            logoW : 150,
            logoH : 15,
            href : '/',
            name : 'Esquire.com',
            projectName : 'Esquire',
            detail : 'Online magazine built with react and Wordpress API for content retrieval',
            desc : 'Online Magazine',
            type : 'Blogs'
        },
        {
            logo : MuliaLogo,
            thumb : TheMulia,
            logoW : 150,
            logoH : 60,
            href : '/',
            name : 'TheMulia.com',
            projectName : 'The Mulia',
            detail : 'Hotel landing page and booking platform connected to third party booking engine PMS',
            desc : 'Online Hotel Booking Platform',
            type : 'Ecommerce'
        },
        {
            logo : MSLogo,
            thumb : MS,
            logoW : 150,
            logoH : 65,
            href : '/',
            name : 'MagicSpoon.com',
            projectName : 'Magic Spoon',
            detail : 'Shopify custom theme built with react template to provide flexible customization',
            desc : 'Cereal Online Stroe',
            type : 'Ecommerce'
        }
    ]

    const handleAccordionToggle = (index) => {
        setActiveAccordion(index)
    }

    return (
        <>
            <div className={styles['work-control-container']}>
                {work.map((item, index) => (
                    <WorkAccordion
                        key={`accordion-${index}`}
                        logo={item.logo}
                        logoW={item.logoW}
                        logoH={item.logoH}
                        href={item.href}
                        name={item.name}
                        desc={item.desc}
                        type={item.type}
                        isActive={activeAccordion === index ? true : false}
                        onClick={() => handleAccordionToggle(index)}
                    />
                ))}
            </div>
            <div className={styles['work-detail-wrapper']}>
                <div className={styles['work-title']}>
                    <p>Impactful Work</p>
                </div>
                <div className={styles['work-detail-container']}>
                    <div className={styles['work-detail-thumb']}>
                        <Image
                            src={work[activeAccordion].thumb}
                            width={500}
                            height={250}
                            alt=''
                        />
                    </div>
                    <div className={styles['work-detail']}>
                        <p className={styles['detail-title']}>{work[activeAccordion].projectName}</p>
                        <p className={styles['detail-subtitle']}>{work[activeAccordion].desc}</p>
                        <div className={styles['detail-container']}>
                            <Link
                                href={work[activeAccordion].href}
                                className={styles.link}
                            >
                                <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.2071 8.70711C30.5976 8.31658 30.5976 7.68342 30.2071 7.29289L23.8431 0.928932C23.4526 0.538408 22.8195 0.538408 22.4289 0.928932C22.0384 1.31946 22.0384 1.95262 22.4289 2.34315L28.0858 8L22.4289 13.6569C22.0384 14.0474 22.0384 14.6805 22.4289 15.0711C22.8195 15.4616 23.4526 15.4616 23.8431 15.0711L30.2071 8.70711ZM0.5 9H29.5V7H0.5V9Z" fill="#F1F1F1"/>
                                </svg>
                            </Link>
                            <p className={styles.detail}>{work[activeAccordion].detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkShowcase;