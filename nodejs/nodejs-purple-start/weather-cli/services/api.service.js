import axios from 'axios';

const getWeather = async (city, token) => {
  if (!token) {
    throw new Error('Не задан ключ api');
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'ru',
      units: 'metric'
    }
  });
  return data;
};

export { getWeather };