// Badminton rules for beginners

export const rules = {
    title: '📏 Luật chơi cầu lông',
    icon: '📏',
    sections: [
        {
            id: 'court',
            title: '🏟️ Sân cầu lông',
            content: [
                {
                    subtitle: 'Kích thước sân',
                    items: [
                        'Sân đánh **đơn**: dài 13.4m × rộng 5.18m',
                        'Sân đánh **đôi**: dài 13.4m × rộng 6.1m (rộng hơn 2 đường biên ngoài)',
                        'Chiều cao lưới: **1.55m** ở hai cột, **1.524m** ở giữa (hơi võng)',
                    ],
                },
                {
                    subtitle: 'Các vùng trên sân',
                    items: [
                        '**Ô giao cầu**: vùng giữa đường giao cầu ngắn và đường giao cầu dài',
                        '**Đường giao cầu ngắn (Short service line)**: cách lưới 1.98m',
                        '**Đường giữa (Center line)**: chia sân thành ô giao cầu trái/phải',
                        '**Đường biên đơn**: đường trong cùng (chiều ngang)',
                        '**Đường biên đôi**: đường ngoài cùng (chiều ngang)',
                        '**Đường giao cầu dài đôi (Long service line)**: cách đường cuối sân 0.76m – giao cầu đôi KHÔNG được vượt quá đường này',
                    ],
                },
            ],
        },
        {
            id: 'scoring',
            title: '🔢 Tính điểm',
            content: [
                {
                    subtitle: 'Hệ thống điểm (Rally Point)',
                    items: [
                        'Mỗi set chơi đến **21 điểm**',
                        'Đánh **best of 3** (ai thắng 2 set trước thì thắng trận)',
                        'Mỗi rally (đợt đánh) = 1 điểm cho bên thắng (dù giao hay nhận)',
                        'Nếu hòa **20-20** → phải thắng cách biệt 2 điểm (ví dụ: 22-20)',
                        'Nếu đến **29-29** → bên nào được 30 trước thắng',
                        'Đổi sân khi kết thúc mỗi set, và khi 1 bên đạt **11 điểm** ở set 3',
                    ],
                },
                {
                    subtitle: 'Ai giao cầu?',
                    items: [
                        'Đầu trận: **tung đồng xu** hoặc tung cầu lên, mũi cầu chỉ về ai thì người đó chọn giao hay nhận',
                        'Sau mỗi rally: **bên thắng rally** được quyền giao cầu',
                        'Điểm **chẵn** (0, 2, 4...) → giao từ bên **phải**',
                        'Điểm **lẻ** (1, 3, 5...) → giao từ bên **trái**',
                    ],
                },
            ],
        },
        {
            id: 'serve',
            title: '🎯 Luật giao cầu',
            content: [
                {
                    subtitle: 'Quy tắc giao cầu',
                    items: [
                        'Đầu vợt phải **hướng xuống dưới** khi chạm cầu (không được đánh trên tay)',
                        'Chạm cầu phải ở **dưới 1.15m** tính từ mặt sân',
                        'Hai chân phải **chạm sàn** khi giao (không được nhảy)',
                        'Vợt phải đánh **phần đế cầu** (phần cork) trước',
                        'Giao phải bay **chéo sân** vào ô giao cầu đối diện',
                        'Chỉ có **1 lần giao** (không có "second serve" như tennis)',
                    ],
                },
                {
                    subtitle: 'Giao cầu đôi – khác biệt',
                    items: [
                        'Cầu giao phải rơi trong ô giao cầu ngắn (KHÔNG được quá đường giao cầu dài đôi)',
                        'Bên giao thắng → cùng người giao tiếp, đổi ô giao (từ phải sang trái hoặc ngược lại)',
                        'Bên giao thua → đổi quyền giao cho đội kia',
                        'Người nhận giao phải đứng **đúng ô** (chéo với người giao)',
                    ],
                },
            ],
        },
        {
            id: 'faults',
            title: '❌ Lỗi (Fault) – Mất điểm',
            content: [
                {
                    subtitle: 'Lỗi trong giao cầu',
                    items: [
                        'Giao cầu không chéo sân / ra ngoài ô giao',
                        'Chạm cầu trên 1.15m (đánh trên tay)',
                        'Chân không chạm sàn khi giao',
                        'Giả động tác giao cầu (feint)',
                        'Giao 2 lần chạm (đánh hụt rồi đánh lại)',
                    ],
                },
                {
                    subtitle: 'Lỗi trong rally',
                    items: [
                        '**Cầu ra ngoài** đường biên → mất điểm',
                        '**Cầu chui lưới** hoặc không qua lưới → mất điểm',
                        '**Chạm lưới** (người hoặc vợt) → mất điểm',
                        '**Đánh 2 lần** trên cùng 1 bên sân → mất điểm',
                        '**Vợt/người qua lưới** sang sân đối phương → mất điểm',
                        '**Cầu chạm người** → mất điểm (dù cầu có qua lưới)',
                        '**Cầu chạm trần** → thường tính lại (let), tuỳ luật địa phương',
                    ],
                },
                {
                    subtitle: 'Let (Tạm dừng, đánh lại)',
                    items: [
                        'Cầu mắc trên lưới sau khi qua → let',
                        'Hai bên chưa sẵn sàng mà đã giao → let',
                        'Sự cố bất ngờ (cầu bay vào từ sân khác, người chạy ngang...) → let',
                        'Let KHÔNG tính điểm – giao lại',
                    ],
                },
            ],
        },
        {
            id: 'singles',
            title: '👤 Luật đánh đơn',
            content: [
                {
                    subtitle: 'Quy tắc đánh đơn',
                    items: [
                        'Sân dùng **đường biên trong** (chiều ngang hẹp hơn)',
                        'Giao cầu dùng **đường cuối sân** (chiều dọc dài hơn so với đánh đôi)',
                        'Điểm chẵn → giao bên phải, điểm lẻ → giao bên trái',
                        'Giao cầu có thể giao DÀI (đến đường cuối sân)',
                    ],
                },
            ],
        },
        {
            id: 'doubles',
            title: '👥 Luật đánh đôi',
            content: [
                {
                    subtitle: 'Quy tắc đánh đôi',
                    items: [
                        'Sân dùng **đường biên ngoài** (chiều ngang rộng hơn)',
                        'Giao cầu dùng **đường giao cầu dài đôi** (ngắn hơn đường cuối sân 0.76m)',
                        'Sau giao cầu, cầu được đánh TOÀN BỘ sân (kể cả phía sau đường giao dài đôi)',
                        'Mỗi đội luân phiên giao cầu (không phải cùng 1 người giao)',
                    ],
                },
                {
                    subtitle: 'Thứ tự giao cầu đôi',
                    items: [
                        'Đầu set: 1 người trong đội giao trước',
                        'Bên giao thắng rally → cùng người giao, đổi ô',
                        'Bên giao thua rally → đổi quyền giao cho đối phương',
                        'Người nhận giao giữ nguyên vị trí cho đến khi đội mình được giao',
                    ],
                },
            ],
        },
        {
            id: 'etiquette',
            title: '🤝 Phép lịch sự trên sân',
            content: [
                {
                    subtitle: 'Nên làm',
                    items: [
                        'Bắt tay / vỗ vợt trước và sau trận',
                        'Giơ tay xin lỗi khi đánh trúng người đối phương hoặc may mắn (luck shot)',
                        'Trả cầu lại cho đối phương bằng cách đánh nhẹ qua lưới (không ném)',
                        'Nếu cầu từ sân khác bay vào → giơ tay, hô "stop" rồi trả cầu lại',
                        'Gọi "Service!" hoặc "Ready?" trước khi giao cầu',
                        'Thừa nhận lỗi của mình (cầu ra ngoài, chạm lưới...)',
                    ],
                },
                {
                    subtitle: 'Không nên',
                    items: [
                        'Không la hét, chửi thề trên sân',
                        'Không ném vợt, đập vợt xuống sàn',
                        'Không cố tình đánh vào người đối phương',
                        'Không trì hoãn game (buộc dây giày quá lâu, uống nước liên tục...)',
                        'Không tranh cãi khi không có trọng tài – thỏa thuận sportmanship',
                    ],
                },
            ],
        },
    ],
};
