//  const axios = require('axios');
    
    function updateRealTimeData() {
            const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
            const utcTimeElement = document.getElementById('utc-time');

            const now = new Date();
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDayOfWeek = daysOfWeek[now.getUTCDay()];
            const currentUTCTime = now.getTime();

            currentDayOfTheWeekElement.textContent = `Current Day of the Week: ${currentDayOfWeek}`;
            utcTimeElement.textContent = `Current UTC Time: ${currentUTCTime} milliseconds`;
        }

        // Update real-time data initially and set an interval to update it every second
        updateRealTimeData();
        setInterval(updateRealTimeData, 1000);

// const apiToken = 'xoxe.xoxp-1-Mi0yLTU1MjUzNTAzMDc2MzUtNTg1Nzk2MDcwOTA3OC01ODk1ODQ2NTk0NTkyLTU4NTgzMTcxMjI0ODctODk1YzBiYmY5YTg1YTZmMTRmYTYzZWQ5NGYyZWM2OGRjZTY1YWM2MDI2NzMyZGVjODYyYjhkYjNhYzZjYTc5MQ'; 
// const userIdOrName = 'T05FFAA91JP/D05REHPA3KL'; 


// const apiUrl = 'https://slack.com/api/users.info';

// // Create a request headers object with the authorization token
// const headers = {
//   Authorization: `Bearer ${apiToken}`,
// };

// // Create a request body object
// const data = new URLSearchParams({
//   user: userIdOrName,
// });

// // Make the API request using Axios
// axios.get(apiUrl, data, { headers })
//   .then((response) => {
//     const userData = response.data.user;
    
//     // Access user information from the userData object
//     console.log(userData);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
