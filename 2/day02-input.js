import path from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const input = fs
    .readFileSync(path.join(__dirname, 'day02-input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((line) => {
        let [direction, value] = line.split(' ');
        value = parseInt(value, 10);

        return {
            direction,
            value,
        };
    });

export default input;