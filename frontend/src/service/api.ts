import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

export const SignInUser = async (email: string, password: string) => {

    if (!email) throw new Error("Email is required");

    if (!password) throw new Error("Password is required");

    try {
        const response = await axios.post(`${API_URL}/signIn`, { email, password });

        const token = response.data.data;
        localStorage.setItem('authToken', token);

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return response.data;
    } catch (error: any) {

        if (axios.isAxiosError(error)) {
            const { response } = error;

            if (response) {
                const { data } = response;
                throw new Error(data.message);
            }
        } 
        
        throw new Error("An error occurred while signing in");
    }
}

export const SignUpUser = async (fullName: string, email: string, password: string) => {

    if (!fullName) throw new Error("Full name is required");

    if (!email) throw new Error("Email is required");

    if (!password) throw new Error("Password is required");

    try {
        
        const response = await axios.post(`${API_URL}/signUp`, { email, password });
        return response.data;

    } catch (error: any) {

        if (axios.isAxiosError(error)) {
            const { response } = error;

            if (response) {
                const { data } = response;
                throw new Error(data.message);
            }
        }
        
        throw new Error("An error occurred while signing in");
    }
}