import SearchPage from '@/components/templates/SearchPage';
import { useRouter } from 'next/router';
import carsData from '@/data/data';

const HomeSearch = () => {

    const router = useRouter()

    const {car} = router.query

    const regex = new RegExp(car , "ig")
    
    const data = carsData.filter(item => item.name.match(regex))

  
    return (
        <div>
            <SearchPage data ={data}/>
        </div>
    );
};

export default HomeSearch;