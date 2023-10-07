import carsData from "../../data/data";
import CarsPage from "../../components/templates/CarsPage"

const allCars = () => {
    return (
        <div>
           <CarsPage data = {carsData}/>
        </div>
    );
};

export default allCars;
