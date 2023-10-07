import styles from './CategoryPage.module.css'
import React from 'react';
import carsData from '@/data/data';
import Card from '@/components/modules/Card';

const CategoryPage = ({category}) => {


    const categoryResult =  carsData.filter(item => item.category === category)
    return (
        <div>
             <div className={styles.container}> 
          {categoryResult.map(item => <Card key={item.id} {...item}/>)}
        </div>
        </div>
    );
};

export default CategoryPage;