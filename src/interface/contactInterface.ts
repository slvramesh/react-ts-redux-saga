export interface iContact {
    id: string | number,
    name: string,
    age: number | string
}

export interface iContactListProps {
    contactList: iContact[];
    onEditContact(contact: iContact): any,
    onDeleteContact(contact: iContact): any,
}

export interface iError {
    label: string,
    message: string
}

export interface iNotification {
    msgType: string,
    msgText: string
}