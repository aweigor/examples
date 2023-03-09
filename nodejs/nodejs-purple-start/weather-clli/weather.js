#!/usr/bin/env node
import { getArgs } from  './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY, getKeyValue } from './services/storage.service.js';
import chalk from 'chalk';
import dedent from 'dedent-js';


const saveToken = async (token) => {
  if (!token.length) {
    printError('не передан token');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);  
    printSuccess('Токен сохранен');
  } catch (e) {
    printError(e.message);
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError('не передан city');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);  
    printSuccess('Город сохранен');
  } catch (e) {
    printError(e.message);
  }
}

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    const weather = await getWeather(city, token);
    printWeather(weather);
  } catch (e) {
    if (e?.response?.status == 404) {
      printError('Неверно указан город');
    } else if (e?.response?.status == 401) {
      printError('Неверно указан токен');
    } else {
      printError(e.message);
    }
  }
}

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  } else if (args.c) {
    saveCity(args.c);
    
  } else if (args.t) {
    saveToken(args.t);
  } else {
    getForcast();
  }
};

const printWeather =  (res, icon) => {
  console.log(
    dedent(`${chalk.bgYellow(' WEATHER ')} Погода в городе ${res.name}
    ${icon} ${res.weather[0].description}
    Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
    Влажность: ${res.main.humidity}%
    Скорость ветра: ${res.wind.speed}`)
  )
}

initCLI();