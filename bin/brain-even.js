#!/usr/bin/env node
import { gamePlay } from '../src/index.js';
import isNumEven from '../games/brain-even.js';

const gamerule = 'Answer "yes" if the number is even, otherwise answer "no"';
gamePlay(gamerule, isNumEven());
