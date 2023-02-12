import { dataCafes } from "./data";


function Buttons({filteredCafes, setCafes}) {

    return (
        <div className="btnFoods-container">
            <button className="btnFood" onClick={() => setCafes(dataCafes)}>All Restaurants</button>
            <button className="btnFood" onClick={() => filteredCafes("Chinese")}>Chinese cuisine</button>
            <button className="btnFood" onClick={() => filteredCafes("Italian")}>Italian Cuisine</button>
            <button className="btnFood" onClick={() => filteredCafes("Turkish")}>Turkish Cuisine</button>
            <button className="btnFood" onClick={() => filteredCafes("Russian")}>Russian Cuisine</button>
        </div>
    )

}

export default Buttons;