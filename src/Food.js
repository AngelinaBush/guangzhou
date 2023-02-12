import { useState } from "react"
import FoodGeneral from "./FoodGeneral";
import { dataCafes } from "./data";
import Buttons from "./Buttons";


function Food() {
    
    const [cafes, setCafes] = useState(dataCafes);

    const chosenCafes = (searchTerm) => {
        const newCafes = dataCafes.filter(cafe => cafe.searchTerm === searchTerm);
        setCafes(newCafes)
    }
    
    return (
        <div className="food-container">
            <Buttons filteredCafes={chosenCafes} setCafes={setCafes}/>
            <FoodGeneral foods={cafes}/>
        </div>
    )
}

export default Food;