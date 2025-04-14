import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/ninhbinh/ninhbinh1.jpg",
        "/image/ninhbinh/ninhbinh2.jpg",
        "/image/ninhbinh/ninhbinh3.jpg",
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
            </div>
            <div className="Section4__pagi">
                {slides.map((_, index) => (
                    <div
                    key={index}
                    className={`Section4__pagi__dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => handleDotClick(index)} // Khi nhấn vào dot, cập nhật slide hiện tại
                    ></div>
                ))}
                <div className="Section4__next" onClick={handleNextClick}>
                                <MdNavigateNext />
                            </div>
                            <div className="Section4__prev" onClick={handlePrevClick}>
                                <MdNavigateBefore />
                            </div>
            </div>
            <div className="Section4__text">
                {slides.map((_, index) =>
                    index === currentSlide ? (
                    <div key={index} className="Section4__text__inner">
                        {index === 0 &&
                        `Khu di tích lịch sử và kiến trúc nghệ thuật Cố đô Hoa Lư thuộc địa phận xã Trường Yên, huyện Hoa Lư, tỉnh Ninh Bình.`}
                        {index === 1 &&
                        `Di tích lịch sử, văn hóa Cố đô Hoa Lư được xếp hạng di tích quốc gia năm 1962.
                        Đến năm 2012 được xếp hạng di tích cấp quốc gia đặc biệt; là một trong ba vùng lõi thuộc Quần thể danh thắng Tràng An, được UNESCO công nhận là di sản kép đầu tiên và duy nhất ở Đông Nam Á.
                        `}
                        {index === 2 &&
                        `Di tích lịch sử - văn hóa Cố đô Hoa Lư là một quần thể di tích quốc gia đặc biệt. Lần đầu tiên trong lịch sử, Hoa Lư đã trở thành kinh đô của Nhà nước Phong kiến Trung ương tập quyền của Việt Nam. Nơi phát tích sự nghiệp 3 triều đại: Đinh - Tiền Lê và khởi đầu triều Lý, với 6 vị vua: Đinh Tiên Hoàng, Đinh Toàn, Lê Đại Hành, Lê Trung Tông, Lê Long Đĩnh và Lý Thái Tổ…
                        Những dấu tích lịch sử - văn hóa hiện còn tại khu vực di tích rất phong phú và đa dạng, bao gồm hệ thống kiến trúc thờ tự, tường thành, hoàng thành, hang động và một số công trình khác.
                        `}
                        {index === 3 &&
                        `Hiện nay, Cố đô Hoa Lư có hơn 30 di tích liên quan đến hai triều Đinh - Tiền Lê, đa dạng về loại hình thờ tự, gồm: lăng tẩm, đền, miếu, phủ, chùa. Một số di tích nổi tiếng như: chùa Nhất Trụ, Đền thờ Thục tiết công chúa,  Phủ Kình Thiên, Xuyên Thủy động…Nhưng trong các di tích này tiêu biểu nhất, đặc sắc nhất phải kể đến là đền thờ vua Đinh Tiên Hoàng và đền thờ vua Lê Đại Hành. Hai công trình này được xây dựng và trùng tu kế tiếp nhau qua nhiều triều đại, nhưng hiện nay vẫn mang đậm nét phong cách kiến trúc thời Hậu Lê (Thế kỷ XVII).`}
                    </div>
                    ) : null
                )}
            </div>
        </div>
    );
}

export default Section4;
