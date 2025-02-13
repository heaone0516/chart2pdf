const visit2024Ctx = document.getElementById('visitChart2024').getContext('2d');
const visit2023Ctx = document.getElementById('visitChart2023').getContext('2d');

const createVisitChart = (ctx, year, data) => {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Pla.', 'Gold', 'Silver', 'Wel.'],
      datasets: [
        {
          label: year + ' 방문회원 수',
          data: data,
          backgroundColor: ['#673AB7', '#FFC107', '#BDBDBD', '#D32F2F'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

createVisitChart(visit2024Ctx, '2024', [241, 409, 9165, 3934]);
createVisitChart(visit2023Ctx, '2023', [264, 548, 14104, 308]);
