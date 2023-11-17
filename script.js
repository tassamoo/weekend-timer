document.addEventListener('DOMContentLoaded', function () {
    updateTimer();
    setInterval(updateTimer, 1000); // Update the timer every second
  });
  
  function updateTimer() {
    const now = moment().tz('Asia/Jakarta');
    const weekendEnd = getWeekendEnd(now.year(), now.month(), now.date());
    const timeLeft = getTimeLeft(now, weekendEnd);
    const formattedTimeLeft = formatTimeLeft(timeLeft);
  
    document.getElementById('timer').textContent = formattedTimeLeft;
  }
  
  function getWeekendEnd(year, month, day) {
    const weekendEnd = moment.tz([year, month, day + (7 - moment([year, month, day]).day()) % 7, 17, 0, 0], 'Asia/Jakarta'); // Assuming the weekend ends at 5:00 PM on Sunday in Jakarta
    return weekendEnd;
  }
  
  function getTimeLeft(now, target) {
    const timeLeft = target - now;
    return timeLeft > 0 ? timeLeft : 0;
  }
  
  function formatTimeLeft(timeLeft) {
    const duration = moment.duration(timeLeft);
    const hours = Math.floor(duration.asHours());
    const minutes = duration.minutes();
    const seconds = duration.seconds();
  
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }
  
  function padZero(num) {
    return num < 10 ? `0${num}` : num;
  }
  