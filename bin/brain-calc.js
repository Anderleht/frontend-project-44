#!/usr/bin/env node
import { GetanAnswer } from '../src/index.js';
import { getQuestion, gamerule } from '../src/games/brain-calc.js';

GetanAnswer(gamerule, getQuestion());
