
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
                backgroundImage: "url('/image/hanoi/hanoi3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center 0",
            }}>
                <div className="SectionMain__overlay"></div>
                <div className="container">
                    <div className="SectionMain__inner">
                        <div className="SectionMain__inner__title">
                            Di tích lịch sử, kiến trúc nghệ thuật và khảo cổ Cổ Loa
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
                            Di tích Cổ Loa thuộc địa phận huyện Đông Anh, thành phố Hà Nội.
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionMain;