#!/usr/bin/env node
import { gamerule, getQuestion } from '../src/games/brain-prime.js';
import { GetanAnswer } from '../src/index.js';

GetanAnswer(gamerule, getQuestion());
