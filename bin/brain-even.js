#!/usr/bin/env node
import GetanAnswer from '../src/index.js';
import isNumEven from '../src/games/brain-even.js';

const gamerule = 'Answer "yes" if the number is even, otherwise answer "no"';
GetanAnswer(gamerule, isNumEven());
