import React from 'react';
import { connect } from 'react-redux';
//import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Notification } from '../../components/Notification'
import AlertDialog from '../common/AlertDialog';
import {
    getContactListAction,
    addContactAction,
    editContactAction,
    deleteContactAction
} from '../../actions/contactActions'
import { messages } from '../../utils/messages';
import { iContact, iNotification } from '../../interface/contactInterface';

interface iManageContactProps {
    addContact: (contact: iContact) => void
    editContact: (contact: iContact) => void,
    getContactList: () => void,
    deleteContact: (contact: iContact) => void,
    contactList: iContact[],
    isError: boolean,
    notification: iNotification,
    loading: boolean
}

interface iManageContactState {
    isOpenConForm: boolean,
    editContact: iContact,
    isOpenAlrtDlg: boolean,
    deleteContact: iContact
}

class ManageContact extends React.Component<iManageContactProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            isOpenConForm: false,
            editContact: null,
            isOpenAlrtDlg: false,
            deleteContact: null
        }

        this.handleSubmitContact = this.handleSubmitContact.bind(this);
        this.handleEditContact = this.handleEditContact.bind(this);
        this.handleDeleteContact = this.handleDeleteContact.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAltDlgEvnt = this.handleAltDlgEvnt.bind(this);
    }

    componentDidMount() {
        console.log("Component mounted");
        this.props.getContactList();
    }

    /**
     * Sbumit add / edit contact
     * @param contact 
     */
    handleSubmitContact(contact: any) {
        console.log("Submit contact : ", contact);
        if (contact.id) {
            this.props.editContact(contact);
        }
        else {
            this.props.addContact(contact);
        }
        this.setState(() => ({
            isOpenConForm: false
        }));
    }

    /**
     * Handle edit contact
     * @param contact 
     */
    handleEditContact(contact: any) {
        console.log("Edit contact : ", contact);
        this.setState(() => ({
            isOpenConForm: true,
            editContact: contact
        }));
    }

    /**
     * Handle delete contact
     * @param contact 
     */
    handleDeleteContact(contact: any) {
        this.setState(() => ({
            isOpenAlrtDlg: true,
            deleteContact: contact
        }));
        console.log("Delete contact : ", contact);

    }

    /**
     * Handle contact dialog close event
     */
    handleClose() {
        this.setState(() => ({
            isOpenConForm: !this.state.isOpenConForm,
            editContact: null
        }));
    }

    /**
     * Handle alert dialog event
     * @param opt 
     */
    handleAltDlgEvnt(opt: string) {
        if (opt === 'YES' && this.state.deleteContact) {
            this.props.deleteContact(this.state.deleteContact);
        }

        this.setState(() => ({
            isOpenAlrtDlg: false,
            deleteContact: null
        }));
    }

    render() {
        const { contactList, isError, notification, loading } = this.props;
        const { isOpenConForm, editContact, isOpenAlrtDlg } = this.state;

        if (loading) {
            return (
                //<CircularProgress />
                <LinearProgress />
            );
        }
        else {
            return (
                <div className="content">

                    {isError &&
                        <Notification
                            {...notification}
                        />
                    }

                    <ContactForm
                        open={isOpenConForm}
                        editContact={editContact}
                        onSubmitContact={this.handleSubmitContact}
                        onHandleClose={this.handleClose} />

                    <ContactList contactList={contactList}
                        onEditContact={this.handleEditContact}
                        onDeleteContact={this.handleDeleteContact} />

                    <AlertDialog open={isOpenAlrtDlg}
                        {...messages.confirm}
                        onHandleAltDlgEvnt={this.handleAltDlgEvnt} />

                </div>
            );
        }
    }
}

// redux providing state takeover
const mapStateToProps = (state: any) => {
    console.log("App State ->", state);
    return {
        ...state.contactReducer
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        getContactList: () => dispatch(getContactListAction()),
        addContact: (contact: any) => dispatch(addContactAction(contact)),
        editContact: (contact: any) => dispatch(editContactAction(contact)),
        deleteContact: (contact: any) => dispatch(deleteContactAction(contact))
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(ManageContact)