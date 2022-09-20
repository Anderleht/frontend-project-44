#!/usr/bin/env node
import { getAnswer } from '../src/index.js';
import { gameQuestion, getQuestionAndAnswer } from '../src/games/brain-gcd.js';

getAnswer(gameQuestion, getQuestionAndAnswer());
