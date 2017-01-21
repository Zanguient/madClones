import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { 
	organization,
	starredBoard,
	notification,
	modals,
	board,
	home
} from '../app/routes/home/modules/index';

import signUp from '../app/routes/signUp/modules/signUp';
import login from '../app/routes/login/modules/login';

import { popOver } from '../app/modules/index';
import { app } from '../app/modules/index';

import { boardView } from '../app/routes/home/routes/boardView/modules/index';

const rootReducer = combineReducers({
	organization,
	starredBoard,
	notification,
	modals,
	board,
	home,

	signUp,
	login,

	popOver,
	app,

	boardView,

	form: formReducer,
	routing: routerReducer
})

export default rootReducer;