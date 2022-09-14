#!/usr/bin/env node
import { getAnswer } from '../src/index.js';
import { gameQuestion, getQuestion } from '../src/games/brain-even.js';

getAnswer(gameQuestion, getQuestion());
