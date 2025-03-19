import React from 'react';
import styles from '@/styles/modules/workAccordion.module.scss';
import Link from 'next/link';
import WorkAccordionTitle from '@/components/elements/WorkAccordionTitle/WorkAccordionTitle';

const WorkAccordion = ({logo, logoW, logoH, href, name, desc, type, onClick, isActive}) => {
    return (
        <div 
            className={`${styles.container} ${isActive && styles.isActive}`}
        >
            <WorkAccordionTitle 
                src={logo}
                width={logoW}
                height={logoH}
                onClick={onClick}
            />
            <div className={styles['accordion-content']}>
                <div className={styles['accordion-content-title-container']}>
                    <Link
                        href={href}
                        className={styles.title}
                    >
                        {name}
                    </Link>
                    <p className={styles.subtitle}>{desc}</p>
                </div>
                <p className={styles.type}>
                    {type}
                </p>
            </div>
        </div>
    )
}

export default WorkAccordion;