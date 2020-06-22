import { BaseThunkAction, ActionType } from '..';
import { Student } from '../../../app/content/student/model';

export const getStudentsList = (students: Student[]): BaseThunkAction => {
    return (dispatch) => {
        dispatch({
            type: ActionType.GET_STUDENTS_LIST,
            payload: students,
        });
    };
};
