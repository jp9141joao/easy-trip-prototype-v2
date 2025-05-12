import { useEffect, useState } from "react";
import HeaderForm from "../components/LoginPage/HeaderForm";
import LayoutPage from "../components/ui/LayoutPage";
import LoginGoogle from "../components/LoginPage/LoginGoogle";
import BrandSection from "../components/LoginPage/SignUpPage/BrandSection";
import SignUpFormSection from "../components/LoginPage/SignUpPage/SignUpFormSection";
import { SignUpUser } from "../service/api";
import { Utils } from "../utils/Utils";
import { isAxiosError } from "axios";

export default function SignIn() {

    const [ fullName, setFullName ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ errorMessage, setErrorMessage ] = useState<string>("");
    const [ errorOrigin, setErrorOrigin ] = useState<string>("");

    const handleSignUp = async () => {
        setLoading(true);
        setErrorMessage("");
        setErrorOrigin("");

        if (!fullName) {
            setErrorMessage("Full name is required");
            setErrorOrigin("Full Name");
            setLoading(false);
            return;
        
        } else if (Utils.isFullNameValid(fullName)) {
            setErrorMessage("Full name must contain at least 3 characters");
            setErrorOrigin("Full Name");
            setLoading(false);
            return;
        } 

        if (!email) {
            setErrorMessage("Email is required");
            setErrorOrigin("E-mail");
            setLoading(false);
            return;

        } else if (!Utils.isValidEmail(email)) {
            setErrorMessage("Invalid email format");
            setErrorOrigin("E-mail");
            setLoading(false);
            return;
        
        }

        if (!password) {
            setErrorMessage("Password is required");
            setErrorOrigin("Password");
            setLoading(false);
            return;

        } else if (!Utils.isValidPassword(password)) {
            setErrorMessage("Password must contain at least 8 characters, including uppercase letters, numbers, and special characters");
            setErrorOrigin("Password");
            setLoading(false);
            return;
        
        }
        
        try {
            const response = await SignUpUser(fullName as string, email as string, password);

            const { token } = response.data;
            localStorage.setItem("authToken", token);
            window.location.reload();

        } catch (error) {
            
            if (isAxiosError(error)) {

                const message = error.message;
                
                if (message.includes("E-mail")) {

                    setErrorOrigin("E-mail");

                } else if (message.includes("Password")) {

                    setErrorOrigin("Password");
                }

                setErrorMessage(message);

            } else {

                setErrorMessage("An error occurred while signing up");

            }
            
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        
        const token = localStorage.getItem('authToken');

        if (token) {
            localStorage.removeItem('authToken');
            window.location.reload();
        }

        setLoading(false);
    }, []);

    return (
        <LayoutPage>
            <HeaderForm 
                goBackTo="/signIn"
                closeTo="/home"
            />
            <div className="grid grid-col place-items-center h-screen">
                <div>
                    <BrandSection />
                    <SignUpFormSection
                        loading={ loading }
                        fullName={ fullName }
                        setFullName={ setFullName }
                        email={ email }
                        setEmail={ setEmail }
                        password={ password }
                        setPassword={ setPassword }
                        handleSignUp={ handleSignUp }
                        errorMessage={ errorMessage }
                        errorOrigin={ errorOrigin }
                    />
                    <LoginGoogle 
                        type="Register"
                    />
                </div>
            </div>
        </LayoutPage>
    )
}