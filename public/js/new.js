// 플러그인 등록 (Chart.js 4.x 기준)
Chart.register(
    ChartDataLabels,
    window['chartjs-plugin-annotation']
);

const ctx = document.getElementById('swipeRateChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['전체 매장 2024', '전체 매장 2023', '해당 매장 2024', '해당 매장 2023'],
        datasets: [
            {
                label: 'Swipe Rate',
                data: [76.4, 68.6, 77.6, 71.2],
                backgroundColor: [
                    '#d3d3d3', // 전체 매장 2024
                    '#bfbfbf', // 전체 매장 2023
                    '#ff7f50', // 해당 매장 2024 (주황 강조)
                    '#ffd4a3', // 해당 매장 2023 (연주황)
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        indexAxis: 'y', // 수평 바 차트
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {display: false}, // 범례 제거
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: '#000',
                formatter: (value) => `${value.toFixed(1)}%`,
                font: {size: 12},
            },
            annotation: {
                annotations: {
                    // 여기에 필요하다면 라인, 상자, 텍스트 같은 주석 넣을 수 있음
                }
            }
        },
        scales: {
            x: {
                // 시작값을 0으로 고정 (default: false)
                beginAtZero: true,

                // 최소값, 최대값 설정
                min: 0,
                max: 100,

                // 누적형 차트 설정 (막대 차트, 영역 차트 등)
                stacked: false, // true로 하면 누적형

                // x축 눈금(숫자) 설정
                ticks: {
                    display: true, // 눈금 숫자 표시 여부
                    callback: (value) => `${value}%`, // 값 뒤에 % 붙이기
                    font: {size: 12, weight: 'normal'}, // 폰트 크기, 굵기 설정
                    color: '#333', // 눈금 숫자 색상
                },

                // x축 눈금선(grid line) 설정
                grid: {
                    display: false, // 눈금선 표시 여부
                    color: '#ddd', // 눈금선 색상
                    drawBorder: false, // 축의 경계선(x축 아래선) 표시 여부
                    drawOnChartArea: true, // 차트 영역에 눈금선 표시 여부
                    lineWidth: 0.5, // 눈금선 두께
                },

                // x축 제목 설정
                title: {
                    display: true, // 제목 표시 여부
                    text: 'X축 제목', // 제목 내용
                    font: {size: 14, weight: 'bold'}, // 폰트 설정
                    color: '#666', // 제목 색상
                },
            },

            y: {
                // 누적형 차트 설정
                stacked: true, // y축도 누적형 적용

                // 최소, 최대값 설정
                min: 0,
                max: 100,

                // y축 눈금(숫자) 설정
                ticks: {
                    display: false, // 눈금 숫자 표시 여부
                    font: {size: 12}, // 폰트 크기 설정
                    color: '#333', // 눈금 숫자 색상
                    callback: (value) => `${value}%`, // 값 뒤에 % 붙이기
                },

                // y축 눈금선(grid line) 설정
                grid: {
                    display: true, // 눈금선 표시 여부
                    color: '#ddd', // 눈금선 색상
                    drawBorder: false, // 축의 경계선(y축 왼쪽 선) 표시 여부
                },

                // y축 제목 설정
                title: {
                    display: true, // 제목 표시 여부
                    text: 'Y축 제목',
                    font: {size: 14, weight: 'bold'},
                    color: '#666',
                },
            },
        }

    },
});
