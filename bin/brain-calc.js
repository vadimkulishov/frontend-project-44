#!/usr/bin/env node

import { playGame } from '../src/index.js';
import { gameRules } from '../src/games/calc.js';

playGame(gameRules);
