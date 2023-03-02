#!/usr/bin/env node
import { getArgs } from  './helpers/args.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    // save city
  }
  if (args.t) {
    // save token
  }
  // weather
};

initCLI();