#!/usr/bin/env node
import { gamePlay } from '../src/index.js';
import gameGcd from '../games/brain-gcd.js';

const gamerule = 'Find the greatest common divisor of given numbers.';
gamePlay(gamerule, gameGcd());
