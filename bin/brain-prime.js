#!/usr/bin/env node
import { gameQuestion, getQuestion } from '../src/games/brain-prime.js';
import { getAnswer } from '../src/index.js';

getAnswer(gameQuestion, getQuestion());
