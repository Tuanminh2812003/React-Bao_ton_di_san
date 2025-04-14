import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/hanoi/hanoi1.jpg",
        "/image/hanoi/hanoi2.jpg",
        "/image/hanoi/hanoi3.jpg",
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
            {slides.map((_, index) =>
                    index === currentSlide ? (
                    <div key={index} className="Section4__title">
                        {index === 0 &&
                        `Xếp hạng di sản`}
                        {index === 1 &&
                        `Ý nghĩa di sản`}
                        {index === 2 &&
                        `Điểm nổi bật`}
                    </div>
                    ) : null
                )}
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
            <div className="Section4__text">
                {slides.map((_, index) =>
                    index === currentSlide ? (
                    <div key={index} className="Section4__text__inner">
                        {index === 0 &&
                        `Di tích Cổ Loa thuộc địa phận huyện Đông Anh, thành phố Hà Nội.`}
                        {index === 1 &&
                        `Ngày 27/9/2012, Thủ tướng Chính phủ đã quyết định xếp hạng Di tích lịch sử, kiến trúc nghệ thuật và khảo cổ Cổ Loa là Di tích quốc gia đặc biệt (Quyết định số 1419/QĐ-TTg).`}
                        {index === 2 &&
                        `Di tích lịch sử Cổ Loa rộng khoảng 500ha, được vua Thục An Dương Vương xây từ thế kỷ thứ 3 trước Công nguyên để làm kinh đô nước Âu Lạc (tên nước Việt Nam thời đó).
                        Vào khoảng năm 208 trước Công nguyên, sau khi thống nhất hai bộ tộc Âu Việt và Lạc Việt, lập nên nhà nước Âu Lạc, An Dương Vương đã chọn vùng đất này để lập kinh đô, xây thành Cổ Loa (thành Ốc, Tư Long thành, Loa thành)…
                        Di tích Cổ Loa cũng là địa điểm khảo cổ học có giá trị nổi bật, gắn với các giai đoạn văn hóa khảo cổ của người Việt, như văn hóa Sơn Vi, văn hóa Phùng Nguyên, văn hóa Đồng Đậu, văn hóa Gò Mun, mà đỉnh cao là Văn hóa Đông Sơn, với nhiều di chỉ khảo cổ tiêu biểu: Đồng Vông, Bãi Mèn, Đình Chiền, Đình Tràng, Mả Tre, Thành Nội, Thành Ngoại, Thành Trung, Xuân Kiều, xóm Nhồi, đền Thượng, Tiên Hội, Đường Mây, Cầu Vực... Tại khu vực này, các nhà khảo cổ đã phát hiện được hàng vạn công cụ lao động, nhạc khí và vũ khí bằng đồng, góp phần làm sáng tỏ nhiều vấn đề về thời kỳ An Dương Vương và lịch sử vùng đất này.
                        `}
                        {index === 3 &&
                        `Cổ Loa vừa là Kinh thành, vừa là Quân thành và Thị thành. Cổ Loa thật sự là đô thị cổ đại ở Việt Nam có quy mô rộng lớn nhất và được khởi dựng sớm nhất trong khu vực Đông Nam Á.`}
                    </div>
                    ) : null
                )}
            </div>
        </div>
    );
}

export default Section4;
