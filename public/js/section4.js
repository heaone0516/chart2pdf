const createVisitChart = (ctx, data) => {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Pla.', 'Gold', 'Silver', 'Wel.'],
      datasets: [
        {
          data: data,
          backgroundColor: ['#673AB7', '#FFC107', '#BDBDBD', '#D32F2F'],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        datalabels: {
          color: (context) => {
            const index = context.dataIndex;
            return index === 2 || index === 3 ? 'black' : '#444';
          },
          anchor: 'end',
          align: 'top',
          formatter: (value) => value.toLocaleString(),
        },
      },
      scales: {
        x: {
          grid: { display: false },
        },
        y: {
          beginAtZero: true,
          max: 20000, // y축 최대값 고정 -> 2024, 2023 그래프 높이 맞춤
          ticks: {
            display: false,
            callback: (value) => value.toLocaleString()
          },
          grid: {
            display: false,
          }
        },
      },
    },
  });
};

// 2024 차트
createVisitChart(document.getElementById('visitChart2024'), [241, 409, 9165, 3934]);

// 2023 차트
createVisitChart(document.getElementById('visitChart2023'), [264, 548, 14104, 308]);
