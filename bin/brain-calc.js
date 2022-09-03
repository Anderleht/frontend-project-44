#!/usr/bin/env node
import { gamePlay } from '../src/index.js';
import braincalc from '../games/brain-calc.js';

const gamerule = 'What is the result of the expression?';
gamePlay(gamerule, braincalc());
