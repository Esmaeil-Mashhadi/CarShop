import Link from 'next/link';
import styles from './MobileNave.module.css'
import Hatchback from '@/icons/Hatchback';
import Sedan from '@/icons/Sedan';
import Sport from '@/icons/Sport';
import Suv from '@/icons/Suv';
import {MdCategory} from 'react-icons/md'

import {AiTwotoneHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {MdContactPhone} from 'react-icons/md'
import {FaCarSide} from 'react-icons/fa'
import { useState } from 'react';
import { styled } from 'styled-components';


const ListDiv = styled.ul`
transition: .2s ease;
  ${(props) => props.toggle ? `transform:translateX(0%)` :""}
`


 const Div = styled.div`
   span{
     background-color: ${props=>props.toggle ? `red`:``};
     transform-origin :9px;
    &:nth-child(1){
      transform:${(props)=>props.toggle ? `rotate(45deg)` : ""}
    }
    &:nth-child(2){
      transform:${props=> props.toggle ? `translateX(-100%) ; opacity :0`:``}
    }
    &:nth-child(3){
      transform:${props=>props.toggle ? `rotate(-45deg)` : ``}
    }
   }
 
 `    

 const Category = styled.div`
   opacity : ${(props)=>props.catclick ? `1` :``};
   transform:${props => props.catclick ? `translate(100% , -90px)` :``};
   pointer-events:${props=>props.catclick ? `all` :`none`}
 
 `
 // just testing styled component in next 
const MobileNave = () => {
    
    
    const [toggle , setToggle] = useState(false)
    const [catclick , setCatclick] = useState(false)
    const clickHandler = ()=>{
        setToggle(!toggle)
         setCatclick(false)
    }

    const CategoryHandler = ()=>{
      setCatclick(!catclick)
    }


    return (
    <div className={styles.wholeContainer}>
        
    <Div toggle ={toggle} className={styles.spanContainer} onClick={clickHandler}>
      <span></span>
      <span></span>
      <span></span>
    </Div>
          
       <ListDiv toggle={toggle} className={styles.linksContainer}>
          <ul className={styles.linkSubContainer}>

            <div  onClick={()=>{setToggle(false) ; setCatclick(false)}}>

             <li><Link href="/"><AiTwotoneHome/>Home</Link></li>
            <li><Link href="/"> <FcAbout/> About us </Link></li>
            <li><Link href="/"> <MdContactPhone/> Contact us</Link></li>
            <li><Link href="/AllCars"> <FaCarSide/>See all Cars</Link></li>

            </div>
        
             <li>
             <span onClick={CategoryHandler}>
                <MdCategory/> Categories 
             </span>
             <Category onClick={()=>{setToggle(false) ;setCatclick(false)}} catclick = {catclick} className={styles.Categories}>
            <Link href="/categories/suv"><Suv/> suv</Link>
            <Link href="/categories/sport"><Sport/>sport</Link>
            <Link href="/categories/sedan"> <Sedan/>sedan</Link>
            <Link href="/categories/hatchback"><Hatchback/>hatchback</Link>
            </Category>
             </li>
            </ul>   
       </ListDiv>
           
            
        </div>
    );
};

export default MobileNave;




