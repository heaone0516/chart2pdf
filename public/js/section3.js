// 성별 비율 차트
const salesPortionCtx = document.getElementById('salesPortionChart').getContext('2d');

new Chart(salesPortionCtx, {
    type: 'bar',
    data: {
        labels: ['2024 전체매장', '2024 해당매장', '2023 해당매장'],
        datasets: [
            {label: 'Wel.', data: [30.8, 25.1, 15.3], backgroundColor: '#D32F2F'},
            {label: 'Silver', data: [65.4, 58.4, 80.1], backgroundColor: '#BDBDBD'},
            {label: 'Gold', data: [2.5, 2.6, 1.5], backgroundColor: '#FFC107'},
            {label: 'Pla.', data: [1.3, 1.5, 3.1], backgroundColor: '#673AB7'},
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                },
            },
            datalabels: {
                color: '#000',
                font: {size: 10},
                formatter: (value) => `${value.toFixed(1)}%`,
                anchor: 'center',
                align: 'center',
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false, // 눈금선 표시 여부
                },
            },
            y: {
                stacked: true,
                max: 100,
                ticks: {
                    display: false,
                    callback: (value) => `${value}%`,
                },
                grid: {
                    display: false, // 눈금선 표시 여부
                },
            },
        },
    },
});
