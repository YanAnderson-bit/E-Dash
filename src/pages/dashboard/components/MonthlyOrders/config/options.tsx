export default {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
  },
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
