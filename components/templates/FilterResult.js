import Card from '../modules/Card';
import styles from './FilterResult.module.css'

const FilterResult = ({result}) => {
    return (
      <div>
        <>
         {result.length ? <div className={styles.container}>
            {result.map(item=> 
               <Card key={item.id} {...item}/> )}
        </div>
        :
        <div className={styles.Not}>
           <h1 className={styles.sorry}>Sorry currently there is no car That matches your price range ! </h1> 
           <img className={styles.noImage} src='/images/noImage.png' />
        </div>
         
          } </>
      </div>
    );
};

export default FilterResult;