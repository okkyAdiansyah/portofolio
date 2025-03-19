import React from 'react';
import styles from '@/styles/blocks/worksHome.module.scss';
import WorkShowcase from '../Work-Showcase/WorkShowcase';

const WorksHome = () => {
  
    return (
        <section className={styles.container}>
            <div className={styles['title-container']}>
                <p>[3]</p>
                <p>Works</p>
            </div>
            <p className={styles.title}>
                MASTERPIECE
            </p>
            <div className={styles['work-showcase-container']}>
                <WorkShowcase />
            </div>
        </section>
    )
}

export default WorksHome;