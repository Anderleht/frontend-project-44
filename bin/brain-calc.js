#!/usr/bin/env node
import GetanAnswer from '../src/index.js';
import braincalc from '../src/games/brain-calc.js';

const gamerule = 'What is the result of the expression?';
GetanAnswer(gamerule, braincalc());
