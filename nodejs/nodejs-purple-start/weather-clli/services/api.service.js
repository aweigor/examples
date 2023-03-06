import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error('Не задан ключ api');
  }
  //const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${key}`;
  const  url = new URL('https://api.openweathermap.org/data/3.0/onecall');
  url.searchParams.append('lat', -94.04);
  url.searchParams.append('exclude', 'hourly,daily');
  url.searchParams.append('appid',token);

  https.get(url, (response) => {
    let res = '';
    response.on('data', (chunk) => {
      res += chunk;
    });

    response.on('end', () => {
      console.log(res);
    });
  });
};

export { getWeather };