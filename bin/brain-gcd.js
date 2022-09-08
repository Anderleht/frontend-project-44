#!/usr/bin/env node
import GetanAnswer from '../src/index.js';
import gameGcd from '../src/games/brain-gcd.js';

const gamerule = 'Find the greatest common divisor of given numbers.';
GetanAnswer(gamerule, gameGcd());
