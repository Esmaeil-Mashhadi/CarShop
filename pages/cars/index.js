import carsData from "../../data/data";
import CarsPage from "../../components/templates/CarsPage"

const allCars = () => {
    return (
        <div>
           <CarPage data = {carsData}/>
        </div>
    );
};

export default allCars;
