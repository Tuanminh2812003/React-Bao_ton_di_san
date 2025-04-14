import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/thanhoa/thanhhoa1.jpg",
        "/image/thanhoa/thanhhoa2.png",
        "/image/thanhoa/thanhhoa3.jpg",
        "/image/thanhoa/thanhhoa1.jpg",
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
                        `Vị trí địa lý`}
                        {index === 1 &&
                        `Xếp hạng di sản`}
                        {index === 2 &&
                        `Ý nghĩa di sản`}
                        {index === 3 &&
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
                        `Di tích lịch sử và kiến trúc nghệ thuật Lam Kinh nằm trên địa bàn thị trấn Lam Sơn và xã Xuân Lam (huyện Thọ Xuân), xã Kiên Thọ (huyện Ngọc Lặc), với tổng diện tích quy hoạch bảo tồn là 200ha.`}
                        {index === 1 &&
                        `Ngày 27/9/2012, Thủ tướng Chính phủ đã quyết định xếp hạng Di tích lịch sử và kiến trúc nghệ thuật Lam Kinh là Di tích quốc gia đặc biệt (Quyết định số 1419/QĐ-TTg).`}
                        {index === 2 &&
                        `Khu di tích lịch sử Lam Kinh giữ được nguyên vẹn những công trình của triều đại nhà Hậu Lê, và lưu giữ nhiều cổ vật quý giá của một thời được coi là hưng thịnh bậc nhất trong lịch sử Việt Nam.
                        Lam Kinh vốn là đất Lam Sơn, quê hương của anh hùng Lê Lợi, người có công chiêu mộ hiền tài, quy tụ nhân dân đánh đuổi giặc Minh xâm lược (1418 - 1427). Năm 1428, Lê Lợi lên ngôi hoàng đế (Lê Thái Tổ), lập nên vương triều Hậu Lê, đóng đô ở Thăng Long, mở ra thời kỳ phát triển mới cho quốc gia Đại Việt. Năm 1430, Lê Thái Tổ đổi tên vùng đất Lam Sơn thành Lam Kinh. Kể từ đó, các kiến trúc điện, miếu... cũng bắt đầu được xây dựng tại đây, gắn với hai chức năng chính:
                        - Điểm nghỉ chân của các vua Lê khi về cúng bái tổ tiên, đồng thời, cũng là nơi ở của quan lại và quân lính thường trực trông coi Lam Kinh;
                        -  Khu tập trung lăng mộ của tổ tiên, các vị vua, hoàng thái hậu nhà Lê và một số quan lại trong hoàng tộc.
                        `}
                        {index === 3 &&
                        `Ðây là công trình kiến trúc nghệ thuật đặc sắc, mang dấu ấn văn hóa cung đình cùng toàn bộ các bia ký, lăng mộ, minh chứng cho từng bước phát triển rực rỡ của nền kiến trúc nước nhà. Các điện miếu và lăng mộ được bố trí theo quan điểm Nho giáo, thuật phong thủy, có sự hài hòa giữa đồi núi, khe suối, cây xanh, tạo nên một môi trường đẹp, cân bằng giữa cảnh quan thiên nhiên và kiến trúc.
                        Thành điện Lam Kinh xưa được xây dựng theo địa thế “tọa sơn hướng thủy”, một tiêu chuẩn vàng trong phong thủy của người Á Đông. Phía Bắc của kinh thành dựa vào núi Dầu, phía Nam nhìn ra sông Chu, có núi Chúa làm bình phong, phía Đông là rừng Phú Lâm, còn phía Tây được bảo vệ bởi núi Hương và núi Hàm Rồng.
                        `}
                    </div>
                    ) : null
                )}
            </div>
        </div>
    );
}

export default Section4;
