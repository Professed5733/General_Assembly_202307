// const req = new XMLHttpreques();

// const req = fetch("https://goweather.herokuapp.com/weather/singapore");

// const getCountryWeather = function (country) {
//   fetch(`https://goweather.herokuapp.com/weather/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json_data) {
//       console.log(json_data);
//       document.querySelector("#temp").innerText = json_data.temperature;
//     });
// };

// getCountryWeather("thailand");

// const getCountryWeather = function (country) {
//   fetch(`https://goweather.herokuapp.com/weather/${country}`)
//     .then((response) => response.json())
//     .then((json_data) => console.log(json_data))
//     .catch((error) => console.log("error"));
// };

// const getCountryWeather = function (country) {
//   try {
//     fetch(`https://goweather.herokuapp.com/weather/${country}`)
//       .then((response) => response.json())
//       .then((json_data) => console.log(json_data));
//   } catch (error) {
//     console.log("error");
//   }
// };

const getCountryWeather = async function (country) {
  try {
    const response = await fetch(
      `https://goweather.herokuapp.com/weather/${country}`
    );
    const json_data = await response.json();
    console.log(json_data);
    return json_data;
  } catch (error) {
    console.log("error");
  }
};

// getCountryWeather("singapore");
// const data = getCountryWeather("singapore").then((data) => data.tempreture);
const get3CoutriesWeather = async (c1, c2, c3) => {
  try {
    const data = await Promise.all([
      getCountryWeather(c1),
      getCountryWeather(c2),
      getCountryWeather(c3),
    ]);

    console.log(data.map((d) => d.temperature));
  } catch (error) {
    console.error(error);
  }
};

get3CoutriesWeather("brunei", "singapore", "malaysia");

(async () => {
  const data = await get3CoutriesWeather("brunei", "singapore", "malaysia");
  console.log(data);
})();

// IIFE
// (async function () {})()
// (async () => {})()
