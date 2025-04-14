import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/phutho/phutho1.jpg",
        "/image/phutho/phutho2.jpg",
        "/image/phutho/phutho3.jpg",
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
            <div className="Section4__title">
                Thủ tướng Chính phủ đã quyết định xếp hạng Di tích lịch sử đền Hùng là di tích quốc gia đặc biệt (Quyết định số 1272/QĐ-TTg, ngày 12/8/2009).
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
                        `Đền Hùng là di tích lịch sử văn hóa đặc biệt quan trọng của quốc gia, được xây dựng trên núi Hùng thuộc đất Phong Châu, vốn là đất kế đô của Nhà nước Văn Lang 4.000 năm trước đây.
Các thủ lĩnh Hùng, từ cương vị quân chủ bộ lạc Văn Lang, từ nền tảng kỹ thuật cuối hậu kỳ đá mới - sơ kỳ đồng thau, đã vượt lên mở rộng địa bàn và ảnh hưởng - đẩy mạnh sự phát triển văn minh và xã hội tới mức kỹ thuật đồng thau - sắt sớm, liên minh và áp phục 15 bộ lạc, trở thành thủ lĩnh liên minh bộ lạc, rồi quân chủ quốc gia.
`}
                        {index === 1 &&
                        `Đền Hùng là trung tâm, là tiêu điểm về thời đại các vua Hùng, các ngôi đền thờ vua Hùng nằm trên núi Nghĩa Lĩnh (còn gọi là núi Cả theo địa phương hay các tên khác: núi Hùng, núi Hy Cương), có độ cao 175 mét so với mặt nước biển.`}
                        {index === 2 &&
                        `Núi Hùng trông xa giống như đầu của một con rồng lớn hướng về Nam, mình rồng uốn lượn thành núi Trọc, núi Vặn, núi Pheo. Phía sau núi Hùng có những quả đồi lớn san sát nối liền dài tới 10km giống như đàn voi chầu về Đất Tổ, phía trước là ngã ba Bạch Hạc với sự hợp lưu của ba dòng sông lớn nhất miền Bắc: sông Hồng, sông Lô, sông Đà tạo ra một vùng nước lớn mênh mông, từ đó có những quả đồi thấp lô nhô giống như một đàn rùa nước bò lên trầu về Nghĩa Lĩnh. Phía Đông xa mờ là dãy Tam Đảo trùng điệp (núi mẹ), xa về phía nam là dãy Ba Vì cao ngất (núi cha) tụ lại. Sát núi Hùng còn có những quả đồi như phượng cặp như (Tiên Kiên), hổ phục (Khang Phụ - Chu Hoá).`}
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
