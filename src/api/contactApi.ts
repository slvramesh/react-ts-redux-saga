
//import { API_BASE_ADDRESS } from '../config';

export const getContactListApi = async (payload: any) => {

    //const uri = API_BASE_ADDRESS + "mockData/contactList.json";
    const uri = 'http://localhost:3001/';

    const data = fetch(uri, {
        method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json',
        // }
    }).then((response: any) => {
        console.log(" getContactListApi  response: ", response);
        if (response.status === 200) {
            return response.json();
        }
        else
            return "Error";
    }).then((data) => {
        console.log(' getContactListApi Success:', data);
        return data;
    }).catch((error) => {
        console.error(' getContactListApi Error:', error);
        return error;
    });

    return data;
};