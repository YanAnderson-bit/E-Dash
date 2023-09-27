export default {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      align: 'start',
      labels: {
        font: {
          weight: '500',
        },
        color: '#252E48',
        boxWidth: 16,
        boxHeight: 16,
        padding: 10,
        useBorderRadius: true,
        borderRadius: 4,
      },
    },
  },
  categoryPercentage: 0.7,
  barPercentage: 1,
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
        display: false,
      },
      ticks: {
        color: '#4D4141',
        font: {
          weight: 'bold',
        },
      },
    },

    y: {
      ticks: {
        display: false,
      },
      grid: {
        drawOnChartArea: false,
        display: false,
      },
    },
  },
};
