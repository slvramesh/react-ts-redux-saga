import React from 'react';

import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Link
} from '@material-ui/core';
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

export function ContactList(props: iContactListProps) {
    const classes = useStyles();
    //const { contactList } = this.props;
    return (
        <div className="contactList">
            {props.contactList && props.contactList.length > 0 ?
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {/* <TableCell align="center">Id</TableCell> */}
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Age</TableCell>
                                <TableCell align="center">Options</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.contactList.map((row: iContact) => (
                                <TableRow key={row.name}>
                                    {/* <TableCell align="center">{row.id}</TableCell> */}
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align="right">{row.age}</TableCell>
                                    <TableCell align="center">
                                        <Link href="#" onClick={() => props.onEditContact(row)}>
                                            <EditIcon />
                                        </Link>
                                        <Link href="#" onClick={() => props.onDeleteContact(row)}>
                                            <DeleteIcon />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                :
                <p>No records!</p>
            }
        </div>
    )

}

        //     }
// }
// export default ContactList;