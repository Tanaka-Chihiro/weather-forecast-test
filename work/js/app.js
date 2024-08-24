const getWeather = document.getElementById("get-weather");

document.addEventListener('DOMContentLoaded', () => {
  getWeather.addEventListener('click', () => {
    const cityNumber = document.getElementById('city-select').value;
    const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${cityNumber}.json`;

    fetch(url)
    .then( response => {
      return response.json();
    })
    .then( weather => {
      console.log(weather);
      const area = weather[0].timeSeries[0].areas[0];
      const tempsArea = weather[1].tempAverage.areas[0];
      console.log(area);
      console.log(tempsArea);

      document.getElementById("publishingOffice").lastElementChild.textContent = weather[0].publishingOffice;
      document.getElementById("reportDatetime").lastElementChild.textContent = weather[0].reportDatetime;
      document.getElementById("targetArea").lastElementChild.textContent = area.area.name;
      document.getElementById("todayHighTemperature").lastElementChild.textContent = tempsArea.max + "℃";
      document.getElementById("todayLowTemperature").lastElementChild.textContent = tempsArea.min + "℃";
      document.getElementById("today").lastElementChild.textContent = area.weathers[0];
      document.getElementById("tomorrow").lastElementChild.textContent = area.weathers[1];
      document.getElementById("dayAfterTomorrow").lastElementChild.textContent = area.weathers[2];
    })

    // console.log(cityNumber);
    // console.log(url);

  })
});