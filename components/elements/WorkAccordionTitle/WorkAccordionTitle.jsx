import React from 'react';
import styles from '@/styles/elements/workAccordionTitle.module.scss';
import Image from 'next/image';

const WorkAccordionTitle = ({src, width, height, onClick}) => {
    return (
        <div 
            className={styles.container}
            onClick={onClick}    
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt=''
            />
        </div>
    )
}

export default WorkAccordionTitle;