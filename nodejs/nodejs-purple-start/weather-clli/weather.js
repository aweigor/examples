#!/usr/bin/env node
import { getArgs } from  './helpers/args.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
  try {
    await saveKeyValue('token', args.t);  
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
  // weather
};

initCLI();