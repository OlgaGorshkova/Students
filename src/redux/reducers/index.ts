import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { students, StudentsState } from './students';

export interface StorageState {
    students: StudentsState;
    form: FormStateMap;
    router: RouterState;
}

export const createRootReducer = (history: History) => combineReducers<StorageState>({
    students,
    form: formReducer,
    router: connectRouter(history),
});
