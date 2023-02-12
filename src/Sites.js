import SitesGeneral from "./SitesGeneral";
import { dataSitesOne } from "./data";
import { dataSitesTwo } from "./data";
import { dataSitesThree } from "./data";
import { dataSitesFour } from "./data";
import { dataSitesFive } from "./data";
import { dataSitesSix } from "./data";

function Sites() {

    return (
        <div className="container-sites">    
            <SitesGeneral data={dataSitesOne} title="Canton Tower / Zhuijiang New Town" description="Canton Tower is a modern landmark located in Guangzhou. Walk around Zhujiang New Town and enjoy its towers. Take a Pearl river cruise."/>
            <SitesGeneral data={dataSitesTwo} title="Baiyun Mountain" description="Baiyun Mountain has a stunning natural landscape and cultural heritage. The mountain range is full grandeur with majestic peaks and crisscrossed valleys. There are seven scenic areas on the mountain."/>
            <SitesGeneral data={dataSitesThree} title="Shamian Island" description="Separated from the mainland by a small canal, Shamian Island used to be an important port for foreign trade from the Song to Qing dynasties. "/>
            <SitesGeneral data={dataSitesFour} title="Beijing Road" description="Beijing road is not only a popular shopping district but I found it to be a great venue for photography and long walks. "/>
            <SitesGeneral data={dataSitesFive} title="Chimelong Park" description="For a full day or even a week of fun, Chimelong Tourist Resort has it all: amusement park, international circus, water park, safari park, and birds park."/>
            <SitesGeneral data={dataSitesSix} title="Yuexiu Park" description="Yuexiu Park is the largest park in the city. There are verdant trees, bamboo groves, flower gardens, and stepped paths up the hill."/>
        </div>
    )
}

export default Sites;