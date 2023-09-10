 
    function updateRealTimeData() {
            const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
            const utcTimeElement = document.getElementById('utc-time');

            const now = new Date();
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDayOfWeek = daysOfWeek[now.getUTCDay()];
            const currentUTCTime = now.getTime();

            currentDayOfTheWeekElement.textContent = `Current Day of the Week: ${currentDayOfWeek}`;
            utcTimeElement.textContent = `Current UTC Time: ${currentUTCTime}`;
        }

       
        updateRealTimeData();
        setInterval(updateRealTimeData, 1000);


