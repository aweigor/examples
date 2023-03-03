import { homedir } from 'os';
import { join } from 'path'; // basename, dirname, extname, relative, isAbsolute, resove, sep

const filePath = console.log(join(homedir(), 'weather-data.json'));

const saveKeyValue = (key, value) => {
};

export {saveKeyValue};
