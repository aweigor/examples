#!/usr/bin/env node
import { getArgs } from  './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('не передан token');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, args.t);  
    printSuccess('Токен сохранен');
  } catch (e) {
    printError(e.message);
  }
}

const getForcast = async () => {
  try {
    const weather = await getWeather(process.env.CITY);
    console.log(weather);
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
  console.log(process.env)
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    // save city
  }
  if (args.t) {
    saveKeyValue('token', args.t);
  }
  getForcast();
};

initCLI();