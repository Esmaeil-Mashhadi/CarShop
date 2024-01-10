import styles from './Filter.module.css'
import {FaSearch} from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Notification from './Notification';
import carsData from '@/data/data';

const FilterPrice = () => { 

    const [error , SetError] = useState(false)
    const [priceData , setPriceData] = useState({})

    useEffect(()=>{
        const prices = carsData.map((item , index )=>{
            return   item.price
        })

        setPriceData({min : Math.min(...prices) , max : Math.max(...prices)})
    },[])


    const router = useRouter()

    const changeHandler = (e)=>{
        setPriceData({
            ...priceData , [e.target.name] : e.target.value
        })
    }
     
    const searchHandler = ()=> {
        if(!priceData.min && !priceData.max || Number(priceData.max) < Number(priceData.min) ) {
            router.push('/')
            SetError(true)
            setTimeout(() => {
                SetError(false)
            }, 4000);
        } else{
           router.push({
            pathname:"/Filter",
            query:{min:priceData.min , max:priceData.max}
           }) 
        }
            
    }
   
    
    return (
        <> 
           <div className={styles.container}>
            <div className={styles.inputContainer}>
            <input name='min' title='enter Minum price' type='number' min={0} step={1000} value={priceData.min} onChange={changeHandler}/>
            <input name='max' title='enter maximum price'  type='number' min={0} step={1000} value={priceData.max} onChange={changeHandler}/>
            </div>
            <button onClick={searchHandler} className={styles.searchButton}> <FaSearch/>search</button>
        </div> 
         {error &&  

           <Notification props="Please Enter Valid Price Range"/>
         }
        
        </>
    );
};

export default FilterPrice;