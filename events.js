// Sample event data
const events = [
    { name: 'Science Fair', date: '2024-11-10' },
    { name: 'Math Workshop', date: '2024-11-15' },
    { name: 'History Seminar', date: '2024-11-20' }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');
  
    // Display events
    events.forEach(event => {
      const eventItem = document.createElement('li');
      eventItem.innerText = `${event.name} - ${event.date}`;
      eventList.appendChild(eventItem);
    });
  });
  