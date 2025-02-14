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
            legend: {display: false},
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
                ticks: {
                    display: false, // 퍼센트 숫자
                },
                grid: {
                    display: false, // 눈금선 표시 여부
                },
            },
            y: {
                grid: {
                    display: false, // 눈금선 표시 여부
                },
            }
        }
    },
});
