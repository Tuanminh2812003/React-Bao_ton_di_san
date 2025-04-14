
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

                backgroundImage: "url('/image/ninhbinh/ninhbinh1.jpg')",

                backgroundSize: "cover",
                backgroundPosition: "center 0",
            }}>
                <div className="SectionMain__overlay"></div>
                <div className="container">
                    <div className="SectionMain__inner">
                        <div className="SectionMain__inner__title">
                            Di tích lịch sử và kiến trúc nghệ thuật Cố đô Hoa Lư 

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
                            Khu di tích lịch sử và kiến trúc nghệ thuật Cố đô Hoa Lư thuộc địa phận xã Trường Yên, huyện Hoa Lư, tỉnh Ninh Bình.
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionMain;