#!/usr/bin/env node
import GetanAnswer from '../src/index.js';
import getQuestion from '../src/games/brain-progression.js';

const gamerule = 'What number is missing in the progression?';
GetanAnswer(gamerule, getQuestion());
