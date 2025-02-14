const ctx2024All = document.getElementById('salesPortionChart2024All').getContext('2d');
const ctx2024Store = document.getElementById('salesPortionChart2024Store').getContext('2d');
const ctx2023Store = document.getElementById('salesPortionChart2023Store').getContext('2d');

const createStackedBarChart = (ctx, values, label, total) => {
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
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: { usePointStyle: true },
        },
        datalabels: {
          color: '#000',
          font: { size: 11 },
          formatter: (value) => `${value.toFixed(1)}%`,
          anchor: 'end',
          align: 'top',
          clip: false,
        },
        annotation: {
          annotations: {
            labelAnnotation: {
              type: 'label',
              xValue: 0,
              yValue: 100,
              content: `총 ${total.toLocaleString()}명`,
              color: 'black',
              font: { size: 12, weight: 'bold' },
              position: { y: 'start' },
            },
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: { font: { size: 12 } },
        },
        y: {
          stacked: true,
          max: 100,
          ticks: {
            callback: (value) => `${value}%`,
          },
        },
      },
    },
  });
};

// 전체 매장 2024
createStackedBarChart(ctx2024All, [1.3, 2.5, 65.4, 30.8], '2024 전체매장', 511353);

// 해당 매장 2024
createStackedBarChart(ctx2024Store, [1.5, 2.6, 58.4, 25.1], '2024 해당매장', 6082);

// 해당 매장 2023
createStackedBarChart(ctx2023Store, [3.5, 1.5, 80.1, 15.3], '2023 해당매장', 5000); // 5000은 임의값
