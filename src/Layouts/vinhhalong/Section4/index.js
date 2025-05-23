import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/vinhhalong/1.jpg",
        "/image/vinhhalong/2.jpg",
        "/image/vinhhalong/am diem tinh.png",
    ];

    const handleNextClick = () => {
            setCurrentSlide((prev) => {
            const nextSlide = (prev + 1) % slides.length; // Xử lý chỉ số vòng lặp
            console.log("Next Slide Index:", nextSlide, "Next Slide Image:", slides[nextSlide]);
            return nextSlide;
        });
    };
    const handlePrevClick = () => {
        setCurrentSlide((prev) => {
        const prevSlide = (prev - 1) % slides.length;
        if(prevSlide < 0) {
            return slides.length - 1;
        }
        return prevSlide;
    });
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="Section4">
            <div className="Section4__title" style={{margin: "0px"}}>
                CỔ VẬT 
            </div>
            <div className="Section4__title" style={{margin: "0px" }}>
                ẤM ĐIỀM TĨNH - NGHỆ NHÂN CHÂU DUYỆT
            </div>
            <div className="Section4__title" style={{margin: "0px" , fontSize: "32px"}}>
                A zisha teapot
            </div>
            <div className="Section4__title" style={{ fontSize: "24px"}}>
                Artist - Zhou Yue
            </div>
            <div className="Section4__slider">
                {slides.map((slide, index) => (
                    <div
                    key={index}
                    className="Section4__slider__image"
                    style={{
                        backgroundImage: `url('${slide}')`,
                        transform: `translateX(-${currentSlide * 100}%)`, // Chỉ dịch chuyển toàn bộ slider
                    }}
                >

                </div>
                ))}
                <div className="Section4__next" onClick={handleNextClick}>
                                <MdNavigateNext />
                            </div>
                            <div className="Section4__prev" onClick={handlePrevClick}>
                                <MdNavigateBefore />
                            </div>
            </div>
            <div className="Section4__pagi">
                {slides.map((_, index) => (
                    <div
                    key={index}
                    className={`Section4__pagi__dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => handleDotClick(index)} // Khi nhấn vào dot, cập nhật slide hiện tại
                    ></div>
                ))}
            </div>
        
        </div>
    );
}

export default Section4;
