#!/usr/bin/env node
import { getAnswer } from '../src/index.js';
import { getQuestionAndAnswer, gameQuestion } from '../src/games/brain-calc.js';

getAnswer(gameQuestion, getQuestionAndAnswer());
