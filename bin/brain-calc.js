#!/usr/bin/env node
import { GetanAnswer } from '../src/index.js';
import { getQuestion, gameQuestion } from '../src/games/brain-calc.js';

GetanAnswer(gameQuestion, getQuestion());
