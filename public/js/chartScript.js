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
        plugins: {
            legend: {display: false}, // 범례 제거
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: (value) => `${value}%`,
                },
            },
            y: {
                ticks: {
                    font: {size: 12},
                },
            },
        },
    },
});
