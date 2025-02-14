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
      { label: '여', data: [26.1, 27.8], backgroundColor: '#f28b82' },
      { label: '남', data: [73.9, 72.2], backgroundColor: '#80deea' },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'left',
        labels: { usePointStyle: true },
      },
      datalabels: {
        color: '#333',
        font: { size: 12 },
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
            font: { size: 11, weight: 'bold' },
            position: { y: 'start' },
          },
          label2: {
            type: 'label',
            xValue: 1,
            yValue: 100,
            content: ['총 6,082명'],
            color: 'black',
            font: { size: 11, weight: 'bold' },
            position: { y: 'start' },
          },
        },
      },
    },
    scales: {
      x: { stacked: true },
      y: {
        stacked: true,
        max: 100,
        ticks: {
          callback: (val) => `${val}%`,
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
        borderColor: '#a9a9a9',
        backgroundColor: '#a9a9a9',
        pointBackgroundColor: '#1565c0',
        pointRadius: 5,
        tension: 0.4,
        fill: false,
      },
      {
        label: '해당매장',
        data: [14, 23, 21, 10, 1.2],
        borderColor: '#ff7f50',
        backgroundColor: '#ff7f50',
        pointBackgroundColor: '#d84315',
        pointRadius: 5,
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
        labels: { usePointStyle: true },
      },
      datalabels: {
        align: 'top',
        anchor: 'end',
        color: '#333',
        font: { size: 12 },
        formatter: (value) => `${value.toFixed(1)}%`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 30,
        ticks: { callback: (value) => `${value}%` },
      },
      x: { ticks: { font: { size: 12 } } },
    },
  },
});
