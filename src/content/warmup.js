// Warm-up and cool-down routines

export const warmup = {
    title: '🔥 Khởi động trước buổi tập',
    duration: '10-15 phút',
    desc: 'Bắt buộc trước MỌI buổi tập. Giúp tăng nhiệt cơ thể, giảm nguy cơ chấn thương.',
    sections: [
        {
            title: '1. Chạy nhẹ làm nóng (3 phút)',
            exercises: [
                { name: 'Chạy bộ nhẹ quanh sân', duration: '1 phút', desc: 'Chạy nhẹ nhàng quanh sân cầu lông 3-4 vòng.' },
                { name: 'Chạy nâng cao đùi', duration: '30 giây', desc: 'Chạy tại chỗ, nâng đầu gối lên cao ngang hông.' },
                { name: 'Chạy gót chạm mông', duration: '30 giây', desc: 'Chạy tại chỗ, gót chân đá ngược chạm mông.' },
                { name: 'Bước nhảy sang ngang', duration: '1 phút', desc: 'Nhảy qua lại sang 2 bên, giống như di chuyển trên sân.' },
            ],
        },
        {
            title: '2. Xoay khớp (3 phút)',
            exercises: [
                { name: 'Xoay cổ', duration: '30 giây', desc: 'Xoay cổ theo chiều kim đồng hồ 10 vòng, đổi chiều 10 vòng.' },
                { name: 'Xoay vai', duration: '30 giây', desc: 'Hai tay đưa thẳng, xoay vai tiến 10 vòng, lùi 10 vòng.' },
                { name: 'Xoay khuỷu tay', duration: '30 giây', desc: 'Co khuỷu tay, xoay cẳng tay theo 2 chiều.' },
                { name: 'Xoay cổ tay', duration: '30 giây', desc: 'Nắm tay, xoay cổ tay 2 chiều – ĐẶC BIỆT QUAN TRỌNG cho cầu lông!' },
                { name: 'Xoay hông', duration: '30 giây', desc: 'Hai tay chống hông, xoay hông theo vòng tròn.' },
                { name: 'Xoay mắt cá chân', duration: '30 giây', desc: 'Đứng 1 chân, xoay mũi chân theo vòng tròn. Đổi chân.' },
            ],
        },
        {
            title: '3. Giãn cơ động (4 phút)',
            exercises: [
                { name: 'Lunge walk (bước dài)', duration: '1 phút', desc: 'Bước chân dài về phía trước, gối sau gần chạm sàn. 10 bước mỗi chân.' },
                { name: 'Xoạc ngang (side lunge)', duration: '1 phút', desc: 'Bước rộng sang bên, khuỵu gối, giữ chân kia thẳng. 10 lần mỗi bên.' },
                { name: 'Vặn thân trên', duration: '1 phút', desc: 'Đứng thẳng, hai tay đưa ngang, xoay thân trên qua trái/phải.' },
                { name: 'Swing vợt', duration: '1 phút', desc: 'Cầm vợt, quật nhẹ forehand 10 lần, backhand 10 lần – khởi động cánh tay đánh.' },
            ],
        },
    ],
};

export const cooldown = {
    title: '❄️ Giãn cơ sau buổi tập (Cool-down)',
    duration: '5-10 phút',
    desc: 'Giúp cơ hồi phục, giảm đau nhức ngày hôm sau. Mỗi tư thế giữ 15-30 giây.',
    sections: [
        {
            title: 'Giãn cơ tĩnh',
            exercises: [
                { name: 'Giãn cơ bắp chân', duration: '30 giây mỗi bên', desc: 'Đứng đối diện tường, đẩy tường, 1 chân lùi xa. Giữ gót chân chạm sàn, cảm nhận kéo giãn ở bắp chân.' },
                { name: 'Giãn cổ đùi trước', duration: '30 giây mỗi bên', desc: 'Đứng 1 chân, tay kéo gót chân sau chạm mông. Giữ thẳng lưng.' },
                { name: 'Giãn cơ đùi sau', duration: '30 giây mỗi bên', desc: 'Ngồi chân duỗi thẳng, cúi người về phía trước, cố chạm ngón chân.' },
                { name: 'Giãn cơ vai', duration: '30 giây mỗi bên', desc: 'Tay kéo ngang trước ngực, tay kia giữ. Đổi bên.' },
                { name: 'Giãn cơ hông', duration: '30 giây', desc: 'Ngồi, 1 chân gác lên đùi chân kia (hình số 4), ấn nhẹ đầu gối xuống.' },
                { name: 'Giãn cổ tay', duration: '20 giây mỗi bên', desc: 'Duỗi tay phía trước, tay kia kéo ngón tay ngược lại. Cảm nhận giãn ở cổ tay.' },
            ],
        },
    ],
};
