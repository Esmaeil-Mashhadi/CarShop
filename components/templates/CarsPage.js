import Card from '@/components/modules/Card';

import styles from './CarsPage.module.css'
const CarsPage = ({cars}) => {
 
    return (
        <div className={styles.container}>
         {cars.map(item => <Card key ={item.id} {...item}/>)}
        </div>
    );
};

export default CarsPage;