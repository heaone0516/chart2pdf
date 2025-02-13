const steak2024Ctx = document.getElementById('steakChart2024').getContext('2d');
const steak2023Ctx = document.getElementById('steakChart2023').getContext('2d');

const createSteakChart = (ctx, year, memberData, nonMemberData) => {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['전체매장', '해당매장'],
      datasets: [
        {
          label: '회원',
          data: memberData,
          backgroundColor: '#f28b82', // 연핑크
        },
        {
          label: '비회원',
          data: nonMemberData,
          backgroundColor: '#f7c6c7', // 더 연한 핑크
        },
      ],
    },
    options: {
      responsive: true,
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

// 2024
createSteakChart(steak2024Ctx, '2024', [65.9, 50.0], [18.9, 24.6]);

// 2023
createSteakChart(steak2023Ctx, '2023', [62.0, 31.0], [19.6, 21.0]);
