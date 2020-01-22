import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { iContact, iContactListProps } from '../../interface/contactInterface';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


// class ContactList extends React.Component<IContactListProps, {}> {
//     constructor(props: any) {
//         super(props)
//         this.state = {
//         }
//     }

//     render() {

export default function ContactList(props: iContactListProps) {
    const classes = useStyles();
    //const { contactList } = this.props;
    console.log(" ContactList func com : ", props.contactList);
    return (
        <div className="contactList">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="center">Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.contactList.map((row: iContact) => (
                            <TableRow key={row.name}>
                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="center">
                                    <Link href="#" onClick={() => props.editContact(row)}>
                                        <EditIcon />
                                    </Link>
                                    <Link href="#" onClick={() => props.deleteContact(row)}>
                                        <DeleteIcon />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

}

        //     }
// }
// export default ContactList;