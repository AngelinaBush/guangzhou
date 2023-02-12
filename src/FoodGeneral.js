
function FoodGeneral({foods}) {

    return (
        <div className="foodGeneral-container">
           {foods.map(food => {
            const {id, title, description, searchTerm, image} = food;

            return (
                <div key={id} className="foodGeneral-container-two">
                    <p className="restaurant-title">{title}</p>
                    <p className="restaurant-description">{description}</p>
                    <img className="img-restaurant" src={image} alt="restaurant" width="400px" height="300px"/>
                </div>
            )
           })}
        </div>
        
    )


}

export default FoodGeneral;