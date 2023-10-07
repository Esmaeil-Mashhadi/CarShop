import carsData from '@/data/data';
import { useRouter } from 'next/router';
import FilterResult from '@/components/templates/FilterResult';

const searchResult = () => {
    const router = useRouter()

    console.log(router.query);
    const [min , max] = router.query.slug || []
   
     const result = carsData.filter(item => item.price >min && item.price <max)
 
    return (
         <FilterResult result = {result}/>
    );
};

export default searchResult;