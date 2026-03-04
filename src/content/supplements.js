// Supplementary content: injury prevention, equipment guide, post-session checklist

export const injuryPrevention = {
    title: '🏥 Phòng chống chấn thương',
    icon: '🏥',
    sections: [
        {
            title: 'Chấn thương thường gặp',
            items: [
                {
                    name: 'Bong gân mắt cá chân',
                    cause: 'Di chuyển nhanh, đổi hướng đột ngột, giày không phù hợp',
                    prevent: 'Mang giày cầu lông đúng chuẩn, tập cơ mắt cá, khởi động kỹ',
                    firstAid: 'RICE: Rest (nghỉ) – Ice (chườm đá 15 phút) – Compression (băng ép) – Elevation (kê chân cao)',
                },
                {
                    name: 'Đau vai / Rotator Cuff',
                    cause: 'Smash quá mạnh, đánh sai form, không khởi động vai',
                    prevent: 'Khởi động vai kỹ, smash đúng kỹ thuật (dùng cổ tay không chỉ vai), tập tăng cường cơ vai',
                    firstAid: 'Nghỉ ngơi, chườm đá, nếu đau kéo dài >3 ngày → đi khám bác sĩ',
                },
                {
                    name: 'Tennis elbow (Đau khuỷu tay)',
                    cause: 'Cầm vợt quá chặt, đánh backhand sai form, tập quá nhiều',
                    prevent: 'Cầm vợt lỏng tay (~60% lực), dùng đúng kỹ thuật backhand, nghỉ ngơi đủ',
                    firstAid: 'Nghỉ, chườm đá, đeo băng khuỷu tay, tránh cầm vật nặng',
                },
                {
                    name: 'Đau đầu gối',
                    cause: 'Nhảy/tiếp đất sai, chạy bằng gót chân, tập quá nhiều',
                    prevent: 'Tiếp đất bằng mũi chân, gối khuỵu giảm xóc, giãn cơ đùi sau buổi tập',
                    firstAid: 'Nghỉ, chườm đá, nếu sưng → đi khám',
                },
                {
                    name: 'Chuột rút (Chuột rút)',
                    cause: 'Thiếu nước, thiếu khoáng chất, không khởi động đủ',
                    prevent: 'Uống nước đều đặn (mỗi 15 phút), ăn chuối trước trận, khởi động kỹ',
                    firstAid: 'Kéo giãn nhẹ cơ bị chuột rút, massage nhẹ, uống nước',
                },
            ],
        },
        {
            title: 'Nguyên tắc phòng chấn thương',
            items: [
                'Luôn khởi động 10-15 phút TRƯỚC khi đánh',
                'Giãn cơ 5-10 phút SAU buổi tập (cool-down)',
                'Uống nước mỗi 15 phút, không đợi khát mới uống',
                'Nghỉ ngơi đủ: không tập liên tục >2 giờ',
                'Nghe cơ thể: ĐAU ≠ mỏi. Nếu đau → DỪNG, đừng cố',
                'Mang giày cầu lông chuyên dụng (có đế cao su non)',
                'Kiểm tra mặt sân: ướt, bụi, hay trơn → báo quản lý sân',
                'Bạn nữ: dây buộc tóc gọn, không đeo trang sức khi chơi',
            ],
        },
    ],
};

export const equipmentGuide = {
    title: '🎒 Trang bị & Dụng cụ',
    icon: '🎒',
    sections: [
        {
            title: '🏸 Vợt cầu lông',
            items: [
                { name: 'Cho newbie', desc: 'Chọn vợt nhẹ 80-90g, cán 4U-5U, trọng tâm đều (even balance). Đừng mua vợt quá nặng hoặc quá cứng.' },
                { name: 'Thương hiệu gợi ý', desc: 'Yonex, Lining, Victor – tầm giá 500k–1.5 triệu VNĐ cho newbie thoải mái.' },
                { name: 'Lưới (cước)', desc: 'Căng lưới 20-22 lbs cho newbie. Căng thấp = sweetspot rộng, dễ đánh hơn.' },
                { name: 'Grip (quấn cán)', desc: 'Nên quấn thêm lớp overgrip (30-50k) – thay mỗi 2-4 tuần hoặc khi hết dính.' },
            ],
        },
        {
            title: '👟 Giày cầu lông',
            items: [
                { name: 'BẮT BUỘC', desc: 'Giày cầu lông chuyên dụng với đế cao su non, bám sân, nhẹ. KHÔNG dùng giày chạy bộ!' },
                { name: 'Thương hiệu', desc: 'Yonex Power Cushion, Lining, Victor – tầm 600k–1.5 triệu VNĐ.' },
                { name: 'Lưu ý', desc: 'Chọn đúng size, thử di chuyển ngang trong shop. Giày hơi chật 1 chút khi mới mua là OK (sẽ dãn).' },
            ],
        },
        {
            title: '👕 Quần áo',
            items: [
                { name: 'Áo', desc: 'Áo thể thao thoáng khí, vải quick-dry. Tránh áo cotton – dính mồ hôi, nặng, khó chịu.' },
                { name: 'Quần/Váy', desc: 'Quần short thể thao hoặc váy thể thao. Cần co giãn tốt để di chuyển.' },
                { name: 'Vớ', desc: 'Vớ thể thao dày vừa, có đệm đế. Giúp giảm ma sát và bảo vệ chân.' },
            ],
        },
        {
            title: '🏸 Cầu (Shuttlecock)',
            items: [
                { name: 'Cầu lông vũ', desc: 'Tốt nhất cho cảm giác thật. Bay đúng, nhưng mau hỏng. Dùng khi đánh chính thức.' },
                { name: 'Cầu nhựa', desc: 'Bền hơn nhiều, rẻ hơn. Phù hợp cho tập luyện. Cảm giác bay khác cầu lông vũ.' },
                { name: 'Gợi ý cho nhóm', desc: 'Mua 1 hộp cầu lông vũ (12 quả, ~150-250k) + 1 hộp cầu nhựa cho tập.' },
            ],
        },
        {
            title: '🎒 Phụ kiện khác',
            items: [
                { name: 'Bình nước', desc: 'Mang theo ít nhất 500ml nước. Uống mỗi 15 phút.' },
                { name: 'Khăn lau mồ hôi', desc: 'Lau tay, grip, và mặt. Grip ướt = vợt tuột tay!' },
                { name: 'Băng cổ tay', desc: 'Giúp thấm mồ hôi, giữ grip khô. Đặc biệt cần trong mùa hè.' },
                { name: 'Túi vợt', desc: 'Bảo quản vợt, giày, quần áo. Không để vợt dưới nắng hoặc trong xe hơi nóng!' },
            ],
        },
    ],
};

export const postSessionChecklist = {
    title: '📋 Checklist cuối buổi',
    icon: '📋',
    items: [
        {
            category: '🧹 Dọn dẹp', tasks: [
                'Thu gom cầu đã dùng',
                'Lau sân nếu đổ nước',
                'Gấp lưới nếu dùng lưới di động',
            ]
        },
        {
            category: '🎒 Đồ dùng', tasks: [
                'Kiểm tra vợt – có nứt/lỏng lưới không?',
                'Thu grip/overgrip rời',
                'Kiểm tra giày – tháo lót phơi khô sau tập',
                'Gom đủ quần áo bẩn vào túi riêng',
            ]
        },
        {
            category: '💪 Cơ thể', tasks: [
                'Giãn cơ cool-down 5-10 phút',
                'Uống đủ nước sau tập',
                'Kiểm tra: có chỗ nào đau bất thường?',
                'Nếu đau: ghi chú lại vị trí + mức độ để theo dõi',
            ]
        },
        {
            category: '📝 Ghi chú', tasks: [
                'Ghi lại kỹ thuật đã tập hôm nay',
                'Ghi điểm cần cải thiện',
                'Check lịch buổi tập tiếp theo',
            ]
        },
    ],
};
