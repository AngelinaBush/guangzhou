import { useState } from "react";
import { dataOne } from "./data";

function GeneralInfo() {


    const [info] = useState(dataOne);
    const [showMore, setShowMore] = useState(false);

    const showTextClick = (element) => {
        element.showText = !element.showText;
        setShowMore(!showMore);
    }


    return(
        <div className="general-info">
            {info.map(element => {
                const {id, title, showText, description} = element;

                return (
                        <div className="general-info-content" key={id}>
                            <h2>{title}</h2>
                            <p>{showText ? description : description.substring(0,400) }
                            <button className="btnShow" onClick={() => showTextClick(element)}>{showText ? "Show less" : "Show more" + "..."}</button>
                            </p>
                        </div>
                )
            })}
        </div>
    )
}

export default GeneralInfo;