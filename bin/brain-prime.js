#!/usr/bin/env node
import { gameQuestion, getQuestionAndAnswer } from '../src/games/brain-prime.js';
import { getAnswer } from '../src/index.js';

getAnswer(gameQuestion, getQuestionAndAnswer());
