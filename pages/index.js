import carsData from '@/data/data'
import styles from '../styles/Home.module.css'

import Categories from '@/components/modules/Categories'
import FilterPrice from '@/components/modules/FilterPrice'
import { useState } from 'react'
import HomeCard from '@/components/modules/HomeCard'

export default function Home() {
    const [currentIndex , setCurrentIndex] = useState(0)
     const maincars = carsData.slice(0,6)
 
     const goToRight  = ()=>{
      if(currentIndex == 5){
        return setCurrentIndex(0)
      }
      setCurrentIndex((prev)=> prev + 1)
     }

     const goToLeft = ()=>{
      if(currentIndex == 0){
        return setCurrentIndex(5)
      }
      setCurrentIndex((prev) => prev - 1)
     }

return (
    <div className={styles.container} >
      <div className={styles.topSide}>
        <FilterPrice/>
         <Categories/>
      </div>
       <div className={styles.subContainer}>

         <div >
          <HomeCard goToLeft={goToLeft}  goToRight={goToRight} props = {maincars[currentIndex]} />
         </div>
       
      </div>
    </div>
  )
}
