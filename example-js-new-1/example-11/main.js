
import {createLoader} from './load.js';

const loadAnimals = createLoader(console.log, console.error);

loadAnimals();

