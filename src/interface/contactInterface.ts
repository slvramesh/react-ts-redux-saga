export interface iContact {
    id: string | number,
    name: string,
    age: number
}

export interface iContactListProps {
    contactList: iContact[];
    editContact(contact: iContact): any,
    deleteContact(contact: iContact): any,
}