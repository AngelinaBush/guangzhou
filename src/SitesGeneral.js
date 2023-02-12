import { useState } from "react";
import LeftArrow from './LeftArrow.png';
import RightArrow from './RightArrow.png'

function SitesGeneral({data, title, description}) {
    
    const [site, setSite] = useState(0);
    const {image} = data[site]

    const Next = () => {
        setSite((site => {
            site++;
            if (site > data.length - 1) {
                site = 0;
            }
            return site;
        }))}

    const Prev = () => {
        setSite((site => {
            site--;
            if (site < 0) {
                return data.length-1;
            }
            return site;
        }))}


    return(
        <div className="container-general-sites">
            <div>
                <img src={image} alt="site" width="400px" height="300px"/>
            </div>
            <div className="sites-btns">
                <button className="btn-site" onClick={Prev}><img src={LeftArrow} alt="arrow" width="20px"/></button>
                <button className="btn-site" onClick={Next}><img src={RightArrow} alt="arrow" width="20px"/></button>
            </div>
            <div>
                <p className="site-title">{title}</p>
            </div>
            <div>
                <p className="site-description">{description}</p>
            </div>
        </div>
    )
}

export default SitesGeneral;