const slackToken = "xoxb-5525350307635-5858681611255-kWRedPv7AejlYc2zFx2ufxWO";
const userId = 'U05R7U8LV2A';

const apiUrl = `https://slack.com/api/users.info?user=${userId}`;

const fetchOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${slackToken}`,
    },
};

fetch(apiUrl, fetchOptions)
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`Failed to retrieve user details. Status code: ${response.status}`);
    }
  })
  .then((data) => {
     userData = data.user;
     console.log(`User name: ${userData.profile.real_name}`);
     console.log(`Email: ${userData.profile.email}`)
  })
  .catch((err) => {
    console.log(`Error: ${err}`)
  });

    
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

       
        updateRealTimeData();
        setInterval(updateRealTimeData, 1000);


