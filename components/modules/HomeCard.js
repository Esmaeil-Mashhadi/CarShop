import Location from '@/icons/Location';
import styles from './HomeCard.module.css'
import Link from 'next/link';
import Money from '@/icons/Money';
import {AiOutlineDoubleRight} from 'react-icons/ai'
import {AiOutlineDoubleLeft} from 'react-icons/ai'

const HomeCard = ({props , goToLeft , goToRight }) => {
    const {id , name , model , year , distance , location , image , price} = props;
  
    return (
      
    
    <div className={styles.container}>
      <Link href={`/Details/${id}`}><img src={image} className={styles.image} />
        <span className={styles.latest}>LATEST CARS !</span> </Link>
         
        
      <div className={styles.subContainer}>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.model}> <span style={{color:'lightGrey'}}>Model :</span> {model}</h3>
        <h4 className={styles.year}> <span style={{color:'lightGrey'}}>Year : </span> {year}</h4> 
        <div className={styles.distance}> <span style={{color:'lightGrey'}}>Distance : </span> {distance} km</div>

       
         <div className={styles.location}> <Location/>
          <div >{location} </div>
         </div>
      
          <div className={styles.money}> <Money/> 
            <div className={styles.price}>{price} $</div>
          </div>
     
        <aside  onClick={goToRight} className={styles.nextSvg}>
            <AiOutlineDoubleRight/>
        </aside>

        <aside onClick={goToLeft} className={styles.prevSvg} >
            <AiOutlineDoubleLeft />
        </aside> 
       </div>

    
     </div> 
   

       
    );
};

export default HomeCard;