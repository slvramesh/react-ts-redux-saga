import React from 'react';

import {
    FormControl, FormHelperText,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';

import { iError, iContact } from '../../interface/contactInterface';
import { validateContactForm } from './contactUtils';
import './contactFormStyle.scss';

interface iContactFormProps {
    open: boolean,
    editContact: iContact,
    onSubmitContact: (contact: iContact) => void,
    onHandleClose: () => void
}

interface iContactFormState {
    open: boolean,
    id: string,
    name: string,
    age: number | string,
    errors: any
}

export class ContactForm extends React.Component<iContactFormProps, iContactFormState> {
    public state = {
        open: false,
        id: "",
        name: "",
        age: "",
        errors: []
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

    static getDerivedStateFromProps(props: any, state: any) {
        let newState = {};
        if (props.editContact && props.editContact.id !== state.id) {
            newState = {
                ...newState, id: props.editContact.id,
                name: props.editContact.name,
                age: props.editContact.age
            };
        }
        return Object.keys(newState).length > 0 ? newState : null;
    }

    /**
     * Handle close event
     */
    handleClose() {
        this.setState({
            id: "",
            name: "",
            age: ""
        });
        this.props.onHandleClose();
    }

    /**
     * Handle submit event, Validate the form and if no errors then submit
     */
    handleSubmit() {
        const { id, name, age } = this.state;
        console.log("Handle submit : id: %s, name: %s, age: %s", id, name, age);
        const result: iError[] = validateContactForm({ "label": "name", "value": name });
        console.log("--- validation result : ", result);
        if (result && result.length > 0) {
            this.setState({
                errors: result
            })
        }
        else {
            this.props.onSubmitContact({ id, name, age });
            this.setState({
                id: "",
                name: "",
                age: "",
                errors: []
            })
        }
    }

    /**
     * Handle form input onchange event
     * @param evt 
     */
    handleChange(evt: any) {
        const value = evt.target.value;
        const { state } = this;
        this.setState({
            ...state,
            [evt.target.name]: value,
            errors: []
        });
    }

    render() {
        const { open } = this.props;
        const { name,
            age,
            errors } = this.state;
        const isNameError: iError | any = errors.find((e: iError) => e.label === "name");
        const isAgeError: iError | any = errors.find((e: iError) => e.label === "age");

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
                        <form noValidate autoComplete="off">
                            <FormControl error={isNameError ? true : false}>
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
                                {isNameError &&
                                    <FormHelperText id="component-error-text">{
                                        isNameError.message
                                    }</FormHelperText>
                                }
                            </FormControl>

                            <FormControl error={isAgeError ? true : false}>
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
                                {isAgeError &&
                                    <FormHelperText id="component-error-text">{
                                        isAgeError.message
                                    }</FormHelperText>
                                }
                            </FormControl>
                        </form>
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
            </div >
        )
    }
}