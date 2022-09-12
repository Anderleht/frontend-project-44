#!/usr/bin/env node
import { gameQuestion, getQuestion } from '../src/games/brain-prime.js';
import { GetanAnswer } from '../src/index.js';

GetanAnswer(gameQuestion, getQuestion());
