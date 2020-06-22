import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { StorageState } from '../reducers';
import { RouterAction } from 'connected-react-router';

export enum ActionType {
    RESET = 'RESET',
    GET_STUDENTS_LIST = "GET_STUDENTS_LIST",
}

export class BaseAction<T = any> {
    type: ActionType | undefined;
    payload?: T;
}

export const Reset = (): BaseAction => ({
    type: ActionType.RESET
});

type ThunkActionReturnType = Promise<void> | void;

export type BaseThunkAction<A extends AnyAction = BaseAction | RouterAction>
    = ThunkAction<ThunkActionReturnType, StorageState, {}, A>;

export type BaseDispatch = (...args: any[]) => ThunkActionReturnType;