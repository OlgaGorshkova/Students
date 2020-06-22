import { Progress } from '../shared/progress';

export interface Student {
    name: string;
    surname: string;
    middlename?: string;
    birthdate: number;
    progress?: Progress;
}