import * as React from 'react';

import { IStateProps } from './model';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const View = (props: IStateProps) => {

    const { students, editStudent, deleteStudent } = props;

    return (
        <Container>
            <h1>Список Студентов</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ФИО</TableCell>
                        <TableCell align="center">Дата рождения</TableCell>
                        <TableCell align="center">Успеваемость</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map(item => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row"> 
                                {`${item.surname} ${item.name} ${item.middlename ? item.middlename : '' }`}
                            </TableCell>
                            <TableCell align="center">{item.birthdate}</TableCell>
                            <TableCell align="center">{item.progress ? item.progress : 'не указано'}</TableCell>
                            <TableCell align="left" onClick={() => editStudent(item.id)}>
                                <EditIcon />
                            </TableCell>
                            <TableCell align="left" onClick={() => deleteStudent(item.id)}>
                                <DeleteForeverIcon />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>       
    );
}