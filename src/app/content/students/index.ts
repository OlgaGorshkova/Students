import { push } from 'connected-react-router';

import { Student } from '../student/model';
import { Progress } from '../shared/progress';
import { IStateProps } from './model';
import { View } from '../students/view';
import { store } from '../../..';

export const Students = () => {
    const mockStudents: Student[] = [
        {
            id: 1,
            name: 'Иван',
            surname: 'Иванов',
            middlename: 'Иванович',
            birthdate: 123,
            progress: Progress.A
        }, {
            id: 2,
            name: 'Петр',
            surname: 'Петров',
            middlename: 'Петрович',
            birthdate: 123,
            progress: Progress.B
        }, {
            id: 3,
            name: 'Гадя',
            surname: 'Хренова',
            middlename: 'Петрович',
            birthdate: 123,
            progress: Progress.C
        }
    ];

    const editStudent = (id: number) => {
        const route = `/edit/${id}`
        store.dispatch(push(route));
    };

    const deleteStudent = (id: number) => {
        alert(`Really remove student id=${id}?`)
    };

    const props: IStateProps = {
        students: mockStudents,
        editStudent: editStudent,
        deleteStudent: deleteStudent,
    };

    return View(props);
}