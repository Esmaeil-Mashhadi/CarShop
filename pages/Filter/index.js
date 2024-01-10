import carsData from '@/data/data';
import { useRouter } from 'next/router';
import FilterResult from '@/components/templates/FilterResult';
import { useEffect, useState } from 'react';

const searchResult = () => {
    const router = useRouter()
    const [result , setResult] = useState([])
    useEffect(()=>{
        const{min , max} = router.query
        if(min && max){
            const data = carsData.filter(item => item.price > min && item.price < max)
            setResult(data)
        }
    },[router.query])
    return (
         <FilterResult result = {result}/>
    );
};

export default searchResult;