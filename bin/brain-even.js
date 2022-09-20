#!/usr/bin/env node
import { getAnswer } from '../src/index.js';
import { gameQuestion, getQuestionAndAnswer } from '../src/games/brain-even.js';

getAnswer(gameQuestion, getQuestionAndAnswer());
