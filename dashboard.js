const attendanceData = {
    Math: 65,
    Science: 85,
    English: 72,
    History: 68
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('attendanceChart').getContext('2d');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(attendanceData),
        datasets: [{
          label: 'Attendance Percentage',
          data: Object.values(attendanceData),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  });
  