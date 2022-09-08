#!/usr/bin/env node
import brainprime from '../src/games/brain-prime.js';
import GetanAnswer from '../src/index.js';

const gamerule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
GetanAnswer(gamerule, brainprime());
