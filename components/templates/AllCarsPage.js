import React from 'react';
import CarsPage from './CarsPage';
import carsData from '@/data/data';
import styles from './AllCarsPage.module.css'

const AllCarsPage = () => {
    return (
        <div className={styles.container}>
            <CarsPage cars={carsData}/>
        </div>
    );
};

export default AllCarsPage;