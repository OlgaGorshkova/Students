import { Progress } from '../shared/progress';

export interface Student {
    id: number;
    name: string;
    surname: string;
    middlename?: string;
    birthdate: number;
    progress?: Progress;
}