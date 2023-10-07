import React from 'react';
import styles from './Card.module.css'
import Money from '@/icons/Money';
import Location from '@/icons/Location';
import Link from 'next/link';

const Card = (props) => {
    const {id , name , model , year , distance , location , image , price} = props;
   
    return (
      <Link href={`/Details/${id}`}>
     <div className={styles.container}>
     <img src={image} className={styles.image} /> 
        
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
        

     </div>
     </Link>
       
    );
};

export default Card;