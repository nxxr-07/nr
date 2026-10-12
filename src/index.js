import { hybernate } from './utils.js';
import logger from './logger.js';
import logs from '../data/logs.json' with { type: 'json' } ;

while (true) {
    await hybernate(Math.random() * (5000 - 1000 + 1) + 1000);
    logger.info(logs[Math.floor(Math.random() * logs.length)]);
}
