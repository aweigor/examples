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

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    // save city
  }
  if (args.t) {
    saveKeyValue('token', args.t);
  }
  getWeather('moscow')
  // weather
};

initCLI();