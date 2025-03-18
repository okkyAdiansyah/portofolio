import React from 'react';
import ServiceBubbleGroup from '../ServiceBubbleGroup/ServiceBubbleGroup';
import Link from 'next/link';
import styles from '@/styles/modules/serviceCard.module.scss';

const ServiceCard = ({icon, serviceType, services, className}) => {
  return (
    <div className={`${styles.container} ${className}`}>
        <div className={styles['icon-container']}>
            {icon}
        </div>
        <div className={styles['service-title-container']}>
            <p>{serviceType}</p>
            <Link href={'/'} className={styles.cta}>
                <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.2071 8.70711C30.5976 8.31658 30.5976 7.68342 30.2071 7.29289L23.8431 0.928932C23.4526 0.538408 22.8195 0.538408 22.4289 0.928932C22.0384 1.31946 22.0384 1.95262 22.4289 2.34315L28.0858 8L22.4289 13.6569C22.0384 14.0474 22.0384 14.6805 22.4289 15.0711C22.8195 15.4616 23.4526 15.4616 23.8431 15.0711L30.2071 8.70711ZM0.5 9H29.5V7H0.5V9Z" fill="#F1F1F1"/>
                </svg>
            </Link>
        </div>
        <ServiceBubbleGroup services={services}/>
    </div>
  )
};

export default ServiceCard;