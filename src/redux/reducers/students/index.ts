import { ActionType, BaseAction } from '../../actions';
import { Student } from '../../../app/content/student/model';

export interface StudentsState {
    students: Student[];
}

const initialState: StudentsState = {
    students: [],
};

export const students = (state: StudentsState = initialState, action: BaseAction ): StudentsState =>{
    switch (action.type) {
        case ActionType.GET_STUDENTS_LIST:
            return action.payload;
        default:
            return state;
    }
}


