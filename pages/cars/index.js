import carsData from "@/data/CarData";
import CarPage from "@/components/template/CarPage";

const allCars = () => {
    return (
        <div>
           <CarPage data = {carsData}/>
        </div>
    );
};

export default allCars;