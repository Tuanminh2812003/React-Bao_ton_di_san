import "../../Components/LayoutDefault.scss";
import "./diadanh.scss";
import { Link } from "react-router-dom";

import SectionMain from "./SectionMain";
import Section1 from "./Section1";
import Section1p2 from "./Section1p2"
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section5p2 from "./Section5p2";
import Section5p3 from "./Section5p3";
import Section7 from "./Section7";
import Footer from "./Footer";

function LayoutDefault(){
    return(
        <>
            <div className="redMode">

                <div className="container">
                    <div className="diadanh">
                        <div className="diadanh__title">
                            PHÚ THỌ
                        </div>
                        <div className="diadanh__content">
                            <Link to={"/phutho/denhung"} className="diadanh__content__box">
                                Khu Di tích lịch sử Đền Hùng
                            </Link>
                            <Link to={"https://heritageflashxr.quydisan.vn/hatxoan "} className="diadanh__content__box">
                                Di tích lịch sử, kiến trúc nghệ thuật và khảo cổ Cổ Loa
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LayoutDefault;