import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './contactFormStyle.scss';

class ContactForm extends React.Component<any, any> {
    public state = {
        open: false,
        id: "",
        name: "",
        age: ""
    }
    constructor(props: any) {
        super(props)
        this.state = {
            ...this.state
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClose() {
        this.setState({
            open: !this.state.open,
            id: "",
            name: "",
            age: ""
        });
    }

    handleSubmit() {
        const { id, name, age } = this.state;
        console.log("Handle submit : id: %s, name: %s, age: %s", id, name, age);
        this.props.editContact({ id, name, age });
        this.setState({
            open: false,
            id: "",
            name: "",
            age: ""
        })
    }

    handleChange(evt: any) {
        const value = evt.target.value;
        const { state } = this;
        this.setState({
            ...state,
            [evt.target.name]: value
        });
    }

    render() {
        const { open,
            name,
            age } = this.state;

        return (
            <div className='contactForm'>
                <div className="addCon">
                    <Button variant="contained" color="primary" onClick={this.handleClose}>
                        Add
                </Button>
                </div>

                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Contact</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To new contact, please enter name and eamil here.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="name"
                            label="name"
                            type="text"
                            fullWidth
                            value={name}
                            onChange={this.handleChange}
                            autoComplete={"off"}
                        />
                        <TextField
                            margin="dense"
                            id="age"
                            name="age"
                            label="Age"
                            type="number"
                            fullWidth
                            value={age}
                            onChange={this.handleChange}
                            autoComplete={"off"}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default ContactForm;