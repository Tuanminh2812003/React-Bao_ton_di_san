import "../../Components/LayoutDefault.scss";

import SectionMain from "./SectionMain";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section5p2 from "./Section5p2";
import Section7 from "./Section7";
import Footer from "./Footer";

function LayoutDefault(){
    return(
        <>
            <div className="redMode">
            <div className="container">
                    <Section4/>
                </div>
            </div>
        </>
    )
}

export default LayoutDefault;