import { useRouter } from 'next/router';
import styles from './Search.module.css'
import {FaSearch} from 'react-icons/fa'
import { useEffect, useState } from 'react';
import carsData from '@/data/data';
import Link from 'next/link';
import SearchResult from '@/pages/search';

const Search = () => {


    const router = useRouter()
    const [value , setValue] = useState("")
    const [isDisable , setIsDisable] = useState(true)
    const [data ,setData] = useState([])


    const regex = new RegExp(value , "ig")


    const searchHandler = ()=>{
        router.push({
            pathname:'/search',
            query:{
                car : value
            }
        })
    }
    
    
    const changeHandler = (e)=>{
        setValue(e.target.value)
    }



  useEffect(()=>{
      const EnterHandler = (event)=>{
        if(event.key === "Enter" && value){
            searchHandler()
            setData([])
            setValue("")
        }
      }
      window.addEventListener("keypress" , EnterHandler)

      const outSideClick = (event)=>{
        if(!event.target.closest(`${styles.search}`)){
            setData([])
        }
      }

      window.addEventListener("click" , outSideClick)
      

    if(value){
        setIsDisable(false)
        const data = carsData.filter(item => item.name.match(regex))
        setData(data)
     
    }else{
        setIsDisable(true)
        setData([])
    }
  },[value])

    return (
        <div>
             <div className={styles.search}>

             <div className={styles.inputes}>
             <input placeholder='Search Your Car here' value={value} onChange= {changeHandler} /> 
             <div className={styles.searchResult}> 
                 {data.map(item => {
                return  <Link onClick={()=> {setData([])
                 setValue("")}} className={styles.searchShow} key={item.id} href={`/Details/${item.id}`}>{item.name} {item.model}</Link>
             })} 
            </div> 
           
           </div> 
          <button onClick={searchHandler} disabled={isDisable}><FaSearch/> Search </button>
        </div> 
        </div>
    );
};

export default Search;