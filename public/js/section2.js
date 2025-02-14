// 플러그인 등록 (Chart.js 4.x 기준)
Chart.register(
    ChartDataLabels,
    window['chartjs-plugin-annotation'] // 핵심: 이렇게 해야 함!
);

// 성별 비율 차트
const genderCtx = document.getElementById('genderChart').getContext('2d');
new Chart(genderCtx, {
    type: 'bar',
    data: {
        labels: ['전체매장', '해당매장'],
        datasets: [
            {
                label: '여',
                data: [26.1, 27.8],
                backgroundColor: '#f28b82',
                borderColor: (ctx) =>
                    ctx.chart.data.labels[ctx.dataIndex] === '해당매장' ? '#d32f2f' : '#f28b82', // 해당매장만 테두리 강조
                borderWidth: (ctx) => (ctx.chart.data.labels[ctx.dataIndex] === '해당매장' ? 2 : 0),
            },
            {
                label: '남',
                data: [73.9, 72.2],
                backgroundColor: '#80deea',
                borderColor: (ctx) =>
                    ctx.chart.data.labels[ctx.dataIndex] === '해당매장' ? '#0097a7' : '#80deea',
                borderWidth: (ctx) => (ctx.chart.data.labels[ctx.dataIndex] === '해당매장' ? 2 : 0),
            },
        ],
    },


    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'left',
                labels: {usePointStyle: true},
            },
            datalabels: {
                color: '#333',
                font: {size: 12},
                formatter: (value) => `${value.toFixed(1)}%`,
                anchor: 'center',
                align: 'center',
            },
            annotation: {
                annotations: {
                    label1: {
                        type: 'label',
                        xValue: 0,
                        yValue: 100,
                        content: ['총 511,353명'],
                        color: 'black',
                        font: {size: 11, weight: 'bold'},
                        position: {y: 'start'},
                    },
                    label2: {
                        type: 'label',
                        xValue: 1,
                        yValue: 100,
                        content: ['총 6,082명'],
                        color: 'black',
                        font: {size: 11, weight: 'bold'},
                        position: {y: 'start'},
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: (context) => {
                        const label = context.tick.label;
                        return label === '해당매장' ? '#d84315' : '#333'; // 해당매장 빨간색 강조
                    },
                    font: (context) => {
                        const label = context.tick.label;
                        return label === '해당매장'
                            ? {weight: 'bold', size: 14}
                            : {weight: 'normal', size: 12};
                    },
                },
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
                },
                grid: {
                    display: false, // 눈금선 표시 여부
                },
            },
        },
    },
});

// 연령대 꺾은선 그래프
const ageCtx = document.getElementById('ageChart').getContext('2d');
new Chart(ageCtx, {
    type: 'line',
    data: {
        labels: ['20대 이상', '30대 이상', '40대 이상', '50대 이상', '60대 이상'],
        datasets: [
            {
                label: '전체매장',
                data: [14.7, 25.6, 25.8, 9.0, 1.2],
                borderColor: 'rgba(169, 169, 169, 0.4)', // 연하게
                backgroundColor: 'rgba(169, 169, 169, 0.4)',
                pointBackgroundColor: 'rgba(21, 101, 192, 0.4)',
                pointRadius: 5,
                borderWidth: 2,
                tension: 0.4,
                fill: false,
            },
            {
                label: '해당매장',
                data: [14, 23, 21, 10, 1.2],
                borderColor: '#ff7f50',
                backgroundColor: '#ff7f50',
                pointBackgroundColor: '#d84315',
                pointRadius: 7,
                borderWidth: 3,
                tension: 0.4,
                fill: false,
            },

        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {usePointStyle: true},

            },
            datalabels: {
                color: '#333',
                font: {size: 12},
                formatter: (value) => `${value.toFixed(1)}%`,
                align: 'end',    // 기준점을 위로 올려붙이기
                anchor: 'end',   // 기준점도 위쪽 끝
                offset: -30,       // 여기서 높일수록 위로 더 멀어짐!
            },

        },
        scales: {
            y: {
                beginAtZero: true,
                max: 30,
                ticks: {
                    display: false,
                    callback: (value) => `${value}%`
                },

                grid: {
                    display: false, // 눈금선 표시 여부
                },
            },
            x: {
                ticks: {
                    font: {size: 12}
                },
                grid: {
                    display: false, // 눈금선 표시 여부
                },
            },
        },
    },
});
