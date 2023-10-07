import Card from '@/components/modules/Card';
import styles from './SearchPage.module.css'


const SearchPage = ({data}) => {
         
    return (
        <div className={styles.container}> 
            {data.map(item => <Card key={item.id} {...item} />)}

            {!data.length &&
           <div className={styles.Not}>

           <h1 className={styles.sorry}>Sorry currently there is no car That matches your request ! </h1> 
           <img className={styles.noImage} src='/images/noImage.png' />

        </div>}
        </div>
    );
};

export default SearchPage;