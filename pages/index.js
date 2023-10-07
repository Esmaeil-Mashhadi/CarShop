import carsData from '@/data/data'
import styles from '../styles/Home.module.css'

import Categories from '@/components/modules/Categories'
import FilterPrice from '@/components/modules/FilterPrice'
import { useState } from 'react'
import HomeCard from '@/components/modules/HomeCard'

export default function Home() {
    const [currentIndex , setCurrentIndex] = useState(0)
    const [slide , setSlide] = useState(false)
    const [fadeR , setFadeR] = useState(false)
    const[fadeL , setFadeL] = useState(true)
   
    

     const maincars = carsData.slice(0,6)
 

  const goToLeft = ()=> {

    setFadeR(false)
     if (currentIndex === 1){
      setFadeL(true)}

      if(currentIndex === 0){

        return
      }
    
    setCurrentIndex(currentIndex -1)
    setSlide(!slide)
  
    }

    const goToRight = ()=>{ 
      setFadeL(false)
      if(currentIndex ===4){
        setFadeR(true)
      }
      if(currentIndex === 5) {
        return
      }
      setCurrentIndex(currentIndex +1)
      setSlide(!slide)  
  
    }


return (
    <div className={styles.container} >
      <div className={styles.topSide}>
        <FilterPrice/>
         <Categories/>
      </div>

          <div className={styles.subContainer}>
        <div className={slide ? styles.slider : styles.sliderp}>
          <HomeCard props = {maincars[currentIndex]} goToLeft = {goToLeft}  goToRight = {goToRight} fadeR={fadeR} fadeL={fadeL}/>
        </div>
       
        </div>
    </div>
  )
}
