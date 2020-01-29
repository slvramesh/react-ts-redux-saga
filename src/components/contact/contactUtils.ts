import { iError } from '../../interface/contactInterface';

/**
 * Validate contact form
 * @param data 
 */
export const validateContactForm = (data: any) => {
    let result: iError[] = [];
    if (data.label === "name" && data.value === "") {
        result.push({
            label: data.label,
            message: 'Please enter name'
        });
    }
    return result;
}