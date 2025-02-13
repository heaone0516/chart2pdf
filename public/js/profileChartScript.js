// 남녀 비율 스택형 바 차트
const genderCtx = document.getElementById('genderChart').getContext('2d');
new Chart(genderCtx, {
  type: 'bar',
  data: {
    labels: ['전체매장', '해당매장'],
    datasets: [
      { label: '여성', data: [26.1, 27.8], backgroundColor: '#f28b82' },
      { label: '남성', data: [73.9, 72.2], backgroundColor: '#a7c7e7' },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'top' } },
    scales: { x: { stacked: true }, y: { stacked: true, max: 100 } },
  },
});

// 연령대 꺾은선 차트
const ageCtx = document.getElementById('ageChart').getContext('2d');
new Chart(ageCtx, {
  type: 'line',
  data: {
    labels: ['20대 이상', '30대 이상', '40대 이상', '50대 이상', '60대 이상'],
    datasets: [
      {
        label: '전체 매장',
        data: [14.7, 25.6, 25.8, 9.0, 1.2],
        borderColor: '#a9a9a9',
        backgroundColor: '#a9a9a9',
        tension: 0.4,
        fill: false,
      },
      {
        label: '해당 매장',
        data: [14.7, 25.6, 25.8, 9.0, 1.2],
        borderColor: '#ff7f50',
        backgroundColor: '#ff7f50',
        tension: 0.4,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'top' } },
    scales: {
      y: { beginAtZero: true, max: 30, ticks: { callback: (val) => `${val}%` } },
    },
  },
});
