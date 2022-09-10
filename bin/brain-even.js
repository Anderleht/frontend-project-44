#!/usr/bin/env node
import { GetanAnswer } from '../src/index.js';
import { gamerule, getQuestion } from '../src/games/brain-even.js';

GetanAnswer(gamerule, getQuestion());
