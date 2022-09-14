#!/usr/bin/env node
import { getAnswer } from '../src/index.js';
import { getQuestion, gameQuestion } from '../src/games/brain-calc.js';

getAnswer(gameQuestion, getQuestion());
