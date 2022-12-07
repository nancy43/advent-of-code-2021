import path from 'path';
import fs from 'fs';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const puzzleInput = fs
    .readFileSync(path.join(__dirname, 'day01-input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((num) => parseInt(num, 10));
export default puzzleInput;