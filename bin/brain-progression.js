#!/usr/bin/env node
import { gamePlay } from '../src/index.js';
import brainprogression from '../games/brain-progression.js';

const gamerule = 'What number is missing in the progression?';
gamePlay(gamerule, brainprogression());
