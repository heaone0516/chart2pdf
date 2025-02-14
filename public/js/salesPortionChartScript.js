const ctx2024 = document.getElementById('salesPortionChart2024').getContext('2d');
const ctx2023 = document.getElementById('salesPortionChart2023').getContext('2d');

const chartConfig = (ctx, values, label) => {
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [label],
      datasets: [
        { label: 'Pla.', data: [values[0]], backgroundColor: '#673AB7' }, // 보라색
        { label: 'Gold', data: [values[1]], backgroundColor: '#FFC107' }, // 노랑
        { label: 'Silver', data: [values[2]], backgroundColor: '#BDBDBD' }, // 회색
        { label: 'Wel.', data: [values[3]], backgroundColor: '#D32F2F' }, // 빨강
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, //false: 높이 설정이 가능
      plugins: { legend: { position: 'top' } },
      scales: {
        x: { stacked: true },
        y: {
          stacked: true,
          max: 100,
          ticks: { callback: (val) => `${val}%` },
        },
      },
    },
  });
};

// 2024 차트 (Pla, Gold, Silver, Wel 비율)
chartConfig(ctx2024, [1.3, 2.5, 65.4, 30.8], '2024 전체 매장');

// 2023 차트
chartConfig(ctx2023, [1.5, 3.1, 80.1, 15.3], '2023 해당 매장');
