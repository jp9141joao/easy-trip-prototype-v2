import HeaderForm from "../components/LoginPage/HeaderForm";

import LayoutPage from "../components/ui/LayoutPage";
import { useEffect, useState } from "react";
import LoginGoogle from "../components/LoginPage/LoginGoogle";
import WelcomeSection from "../components/LoginPage/SignInPage/WelcomeSection";
import SignInFormSection from "../components/LoginPage/SignInPage/SignInFormSection";
import RegisterRedirect from "../components/LoginPage/SignInPage/RegisterRedirect";
import { SignInUser } from "../service/api";
import { isAxiosError } from "axios";
import { UtensilsIcon } from "lucide-react";
import { Utils } from "../utils/Utils";

export default function SignIn() {

    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ errorMessage, setErrorMessage ] = useState<string>("");
    const [ errorOrigin, setErrorOrigin ] = useState<string>("");

    const handleSignIn = async () => {
        setLoading(true);
        setErrorMessage("");
        setErrorOrigin("");

        if (!email) {
            setErrorMessage("Email is required");
            setErrorOrigin("email");
            setLoading(false);
            return;

        } else if (!Utils.isValidEmail(email)) {
            setErrorMessage("Invalid email format");
            setErrorOrigin("email");
            setLoading(false);
            return;
        }

        if (!password) {
            setErrorMessage("Password is required");
            setErrorOrigin("password");
            setLoading(false);
            return;

        } else if (!Utils.isValidPassword(password)) {
            setErrorMessage("Password must contain at least 8 characters, including uppercase letters, numbers, and special characters");
            setErrorOrigin("password");
            setLoading(false);
            return;

        }
        
        try {
            const response = await SignInUser(email, password);

            const { token } = response.data;
            localStorage.setItem("authToken", token);
            window.location.reload();

        } catch (error) {
            
            if (isAxiosError(error)) {

                const message = error.message;
                
                if (message.toUpperCase().includes("E-MAIL") && message.toUpperCase().includes("PASSWORD")) {
                    
                    setErrorOrigin("E-mail and Password");

                } else if (message.toUpperCase().includes("E-MAIL")) {

                    setErrorOrigin("E-mail");

                } else if (message.toUpperCase().includes("PASSWORD")) {

                    setErrorOrigin("Password");

                }

                setErrorMessage(message);
            
            } else {
                
                setErrorMessage("An unexpected error occurred while signing in. Please try again later.");

            }

        } finally {
            setLoading(false);
        }
    }

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
                closeTo="/home"
            />
            <div className="grid grid-col place-items-center h-screen">
                <div>
                    <WelcomeSection />
                    <SignInFormSection
                        loading={ loading }
                        email={ email }
                        setEmail={ setEmail }
                        password={ password }
                        setPassword={ setPassword }
                        handleSignIn={ handleSignIn }
                        errorMessage={ errorMessage }
                        errorOrigin={ errorOrigin }
                    />
                    <RegisterRedirect />
                    <LoginGoogle 
                        type="Login"
                    />
                </div>
            </div>
        </LayoutPage>
    )
}