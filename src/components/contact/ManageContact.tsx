import React from 'react';

import { connect } from 'react-redux';

import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { addContactAction } from '../../actions/contactActions'

class ManageContact extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
        }

        this.onEditContact = this.onEditContact.bind(this);
        this.onDeleteContact = this.onDeleteContact.bind(this);
    }

    // handleInput = e => {
    //     console.log('Hello Input')
    // }

    // addItem = () => {
    //     console.log('Hello Add Item')
    // }

    onEditContact(contact: any) {
        console.log("Edit contact : ", contact);
        if (contact.id) {

        }
        else {
            this.props.addContact(contact);
        }
    }

    onDeleteContact(contact: any) {
        console.log("Delete contact : ", contact);
    }

    render() {
        console.log(" ManageContact Props : ", this.props);
        return (
            <div>
                <ContactForm
                    editContact={this.onEditContact} />
                <ContactList contactList={this.props.contactList}
                    editContact={this.onEditContact}
                    deleteContact={this.onDeleteContact} />
            </div>
        )
    }
}

// redux providing state takeover
const mapStateToProps = (state: any) => {
    console.log("App State ->", state);
    return {
        contactList: [...state.contactReducer.contactList]
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    console.log(" ---- mapDispatchToProps : ", ownProps);
    return {
        addContact: (contact: any) => dispatch(addContactAction(contact))
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(ManageContact)