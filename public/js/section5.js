const createSteakChart = (ctx, memberData, nonMemberData, maxValue, title) => {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2024', '2023'], // 2024, 2023 연도 라벨
            datasets: [
                {
                    label: '회원',
                    data: [memberData[0], memberData[1]],
                    backgroundColor: '#f28b82',
                },
                {
                    label: '비회원',
                    data: [nonMemberData[0], nonMemberData[1]],
                    backgroundColor: '#bdbdbd',
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {display: false},
                title: {
                    display: true,
                    text: title,
                    color: '#666',
                    font: {size: 14, weight: 'bold'},
                },
                datalabels: {
                    color: '#333',
                    anchor: 'end',
                    align: 'top',
                    formatter: (value) => `${value.toFixed(1)}%`,
                },
                annotation: {
                    annotations: {
                        memberLabel2024: {
                            type: 'label',
                            xValue: 0,
                            yValue: -5, // 막대 아래쪽
                            content: '회원',
                            color: '#666',
                            font: {size: 11},
                            position: {x: 'center', y: 'end'},
                        },
                        nonMemberLabel2024: {
                            type: 'label',
                            xValue: 0,
                            yValue: -12, // 회원 아래쪽
                            content: '비회원',
                            color: '#666',
                            font: {size: 11},
                            position: {x: 'center', y: 'end'},
                        },
                        memberLabel2023: {
                            type: 'label',
                            xValue: 1,
                            yValue: -5,
                            content: '회원',
                            color: '#666',
                            font: {size: 11},
                            position: {x: 'center', y: 'end'},
                        },
                        nonMemberLabel2023: {
                            type: 'label',
                            xValue: 1,
                            yValue: -12,
                            content: '비회원',
                            color: '#666',
                            font: {size: 11},
                            position: {x: 'center', y: 'end'},
                        },
                    },
                },
            },
            scales: {
                x: {
                    stacked: false,
                    grid: {display: false},
                    ticks: {font: {size: 12}},
                },
                y: {
                    stacked: false,
                    beginAtZero: true,
                    max: maxValue,
                    grid: {display: false},
                    ticks: {
                        display: false,
                        callback: (value) => `${value}%`,
                    },
                },
            },
        },
    });
};

// 차트 실행
const ctxOverall = document.getElementById('steakChartOverall').getContext('2d');
const ctxSpecific = document.getElementById('steakChartSpecific').getContext('2d');

createSteakChart(ctxOverall, [65.9, 62.0], [18.9, 61.9], 70, '전체매장');
createSteakChart(ctxSpecific, [59.0, 31.0], [24.6, 12.1], 70, '해당매장');
