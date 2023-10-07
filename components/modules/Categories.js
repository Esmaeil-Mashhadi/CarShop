import Hatchback from '@/icons/Hatchback';
import Sedan from '@/icons/Sedan';
import Sport from '@/icons/Sport';
import Suv from '@/icons/Suv';
import styles from './Categories.module.css'
import Link from 'next/link';

const Categories = () => {
    return (
        <div className={styles.container}>
             <Link href="categories/suv"><Suv/> suv</Link>
             <Link href="categories/sport"><Sport/>sport</Link>
             <Link href="categories/sedan"> <Sedan/>sedan</Link>
             <Link href="categories/hatchback"><Hatchback/>hatchback</Link>
        </div>
    );
};

export default Categories;