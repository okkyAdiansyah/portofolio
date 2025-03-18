import React from 'react';
import ServiceBubble from '@/components/elements/ServiceBubble/ServiceBubble';
import styles from '@/styles/modules/serviceBubbleGroup.module.scss';

const ServiceBubbleGroup = ({services}) => {
  return (
    <ul className={styles.container}>
        {services.map((item,index) => (
            <li key={`service-${index}`} className={styles['service-bubble']}>
                <ServiceBubble service={item} />
            </li>
        ))}
    </ul>
  )
};

export default ServiceBubbleGroup;