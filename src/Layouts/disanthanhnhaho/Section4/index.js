import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/disanthanhnhaho/1.jpg",
        "/image/disanthanhnhaho/tuong dong than tai.png",

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
            <div className="Section4__title" style={{margin:"0px"}}>
                CỔ VẬT TƯỢNG ĐỒNG THẦN TÀI
            </div>

            <div className="Section4__title" style={{margin:"0px" , fontSize: "32px"}}>
                A gilt - Bronze figure of Dakini
            </div>

            <div className="Section4__title" style={{fontSize: "24px"}}>
                 (Triều đại nhà Thanh - thời vua Càn Long)
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
