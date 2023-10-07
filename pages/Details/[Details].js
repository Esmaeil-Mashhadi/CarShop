import Card from "@/components/modules/Card";
import CarDetail from "@/components/templates/CarDetail";
import carsData from "@/data/data";
import { useRouter } from "next/router";


const Details = () => {
    const router = useRouter()

    const {Details} = router.query
    const  result = carsData[Details-1]
        
    return (
        <div>
           <CarDetail {...result}/>
        </div>
    );
};

export default Details;