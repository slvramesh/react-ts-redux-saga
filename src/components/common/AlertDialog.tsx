import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';

interface iAlertDialogProps {
    onHandleAltDlgEvnt: (option: string) => void,
    open: boolean,
    title: string,
    text: string
}

export default function AlertDialog(props: iAlertDialogProps) {
    //const [open, setOpen] = React.useState(false);

    const handleClose = (option: string) => {
        // setOpen(false);
        props.onHandleAltDlgEvnt(option);
    };

    const { open, title, text } = props;

    return (
        <div>
            <Dialog
                open={open}
                onClose={() => handleClose('NO')}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose('YES')} color="primary">Yes</Button>
                    <Button onClick={() => handleClose('NO')} color="primary" autoFocus>No</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}