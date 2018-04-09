import { app } from 'hyperapp'

import './scss/index.scss'

import state from './js/state.js'
import actions from './js/actions.js'
import view from './js/view.js'

const main = app(state, actions, view, document.body);
