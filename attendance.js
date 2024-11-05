// Sample attendance data
const attendanceData = {
    Math: 65,
    Science: 85,
    English: 72,
    History: 68
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const attendanceList = document.getElementById('attendance-list');
  
    // Display attendance and check for low attendance
    for (const subject in attendanceData) {
      const attendance = attendanceData[subject];
      const subjectElement = document.createElement('p');
      subjectElement.innerText = `${subject}: ${attendance}%`;
  
      if (attendance < 70) {
        subjectElement.innerHTML += ' <span class="notification">Low Attendance</span>';
        alert(`Warning: Your attendance in ${subject} is below 70%!`);
      }
  
      attendanceList.appendChild(subjectElement);
    }
  });
      