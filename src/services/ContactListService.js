import axios from "axios";

export default class ContactListService {
    static serverURL = `http://localhost:9000`;

    static getContactList() {
        let dataURL = `${this.serverURL}/contactList`;
        return axios.get(dataURL);
    }

    static getContact(contactId) {
        let dataURL = `${this.serverURL}/contactList/${contactId}`;
        return axios.get(dataURL);
    }

    static addNewContact(contact) {
        let dataURL = `${this.serverURL}/contactList/`;
        return axios.post(dataURL, contact);
    }

    static editContact(contact, contactId) {
        let dataURL = `${this.serverURL}/contactList/${contactId}`;
        return axios.put(dataURL, contact);
    }

    static deleteContact(contactId) {
        let dataURL = `${this.serverURL}/contactList/${contactId}`;
        return axios.delete(dataURL);
    }
}