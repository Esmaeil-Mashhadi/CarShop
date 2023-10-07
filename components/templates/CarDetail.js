import React from 'react';
import Card from '../modules/Card';
import Location from '@/icons/Location';
import Money from '@/icons/Money';
import styles from './CarDetail.module.css'
import { useRouter } from 'next/router';

const CarDetail = (props) => {
    const router = useRouter()
    
    const {id , name , model , year , distance , location , image , price , description} = props;
    return (
        
        <div className={styles.detailContainer}>

              
          <img src={image} />

          <div className={styles.descriptionContainer}>

          <h2>{name}</h2>
          <h3>{model}</h3>

          <div className={styles.otherDetailContainer}> 

          <div>Year : {year}</div>
          <div> <Money/>{price} $</div>
          <div><Location/> {location} </div>
          <div> distance:  {distance}</div>

          </div>
          
          <div className={styles.description}>{description}</div>

          <div className={styles.buttonContainer}>
             <button onClick={()=>router.back()  } className={styles.back}>Back</button>
             <button onClick={()=> router.push('/demo')} className={styles.Buy}>Buy Car</button>
          </div>
    
          </div>
          
        </div>
    );
};

export default CarDetail;