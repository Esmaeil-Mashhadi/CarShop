import styles from './Filter.module.css'
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Notification from './Notification';

const FilterPrice = () => { 
    const [min , setMin] = useState("")
    const [max , setMax] = useState("")
    const [error , SetError] = useState(false)
    
   
    const router = useRouter()

    const searchHandler = ()=> {
        if(!min && !max || Number(max) < Number(min) ) {
            router.push('/')
            SetError(true)
            setTimeout(() => {
                SetError(false)
            }, 4000);
        } else{
           router.push(`Filter/${min}/${max}`) 
        }
            
    }
   
    
    return (
        <> 
           <div className={styles.container}>
            <div className={styles.inputContainer}>
            <input  placeholder='Enter Minimum Price' type='number' min={0} step={1000} value={min} onChange={(e)=> setMin(e.target.value)} />
            <input  placeholder='Enter Maximum Price' type='number' min={0} step={1000} value={max} onChange={(e)=> setMax(e.target.value)}/>
            </div>
            <button onClick={searchHandler} className={styles.searchButton}> <FaSearch/> Search</button>
        </div> 
         {error &&  

           <Notification props="Please Enter Valid Price Range"/>
         }
        
        </>
    );
};

export default FilterPrice;