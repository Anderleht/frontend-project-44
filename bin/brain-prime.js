#!/usr/bin/env node
import brainprime from '../games/brain-prime.js';
import { gamePlay } from '../src/index.js';

const gamerule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gamePlay(gamerule, brainprime());
