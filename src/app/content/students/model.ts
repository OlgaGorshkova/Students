import { Student } from '../student/model';

export interface IStateProps {
    students: Student[];
    addStudent?: () => void;
    editStudent: (id: number) => void;
    deleteStudent: (id: number) => void;
}