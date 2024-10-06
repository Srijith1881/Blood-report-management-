import axios from 'axios';

// API helper function to send form data to the backend
export const requestBlood = async (formData) => {
    try {
        const response = await axios.post('http://localhost:7778/api/blood-request', formData);
        return response.data;
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
};
