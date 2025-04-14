
import React, { useEffect, useRef, useState } from "react";

function SectionMain(){

    const innerRef = useRef(null); // Tham chiếu đến phần tử DOM
    const [marginTop, setMarginTop] = useState(0); // Trạng thái lưu giá trị margin-top

    useEffect(() => {
        // Tính toán chiều cao của phần tử khi render
        if (innerRef.current) {
        const height = innerRef.current.offsetHeight;
        setMarginTop(height / 2); // Đặt margin-top = 1/2 chiều cao
        }
    }, []);

    return(
        <>
            <div className="SectionMain" style={{

                backgroundImage: "url('/image/phutho/phutho3.jpg')",

                backgroundSize: "cover",
                backgroundPosition: "center 0",
            }}>
                <div className="SectionMain__overlay"></div>
                <div className="container">
                    <div className="SectionMain__inner">
                        <div className="SectionMain__inner__title">

                            Khu Di tích lịch sử Đền Hùng

                        </div>
                    </div>
                </div>
            </div>
            <div className="SectionMainP2"
                ref={innerRef}
                style={{ marginTop: `-${marginTop}px` }}
            >
                <div className="container">
                    <div className="SectionMainP2__inner">

                        <div className="SectionMainP2__inner__title" style={{textAlign: "center"}}>
                            Khu Di tích lịch sử Đền Hùng thuộc thôn Cổ Tích, xã Hy Cương, thành phố Việt Trì, tỉnh Phú Thọ; là nơi thờ các vua Hùng có công dựng nước, Tổ Tiên của dân tộc Việt Nam.
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionMain;