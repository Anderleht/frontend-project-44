#!/usr/bin/env node
import { GetanAnswer } from '../src/index.js';
import { gameQuestion, getQuestion } from '../src/games/brain-gcd.js';

GetanAnswer(gameQuestion, getQuestion());
