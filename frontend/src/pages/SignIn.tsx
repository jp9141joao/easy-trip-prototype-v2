import HeaderForm from "../components/LoginPage/HeaderForm";
import LayoutPage from "../components/ui/LayoutPage";
import { useEffect, useState } from "react";
import LoginGoogle from "../components/LoginPage/LoginGoogle";
import WelcomeSection from "../components/LoginPage/SignInPage/WelcomeSection";
import SignInFormSection from "../components/LoginPage/SignInPage/SignInFormSection";
import RegisterRedirect from "../components/LoginPage/SignInPage/RegisterRedirect";
import { SignInUser } from "../service/api";
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
            setErrorMessage("E-mail is required");
            setErrorOrigin("E-mail");
            setLoading(false);
            return;

        } else if (!Utils.isValidEmail(email)) {
            setErrorMessage("Invalid e-mail format");
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
            setErrorMessage("Password is too weak");
            setErrorOrigin("Password");
            setLoading(false);
            return;
        
        }
        
        try {
            const response = await SignInUser(email, password);

            const { token } = response.data;
            localStorage.setItem("authToken", token);
            window.location.reload();

        } catch (error: any) {
            
            const message: string = error.toString();
            
            if (message.toUpperCase().includes("E-MAIL") && message.toUpperCase().includes("PASSWORD")) {
                
                setErrorOrigin("E-mail and Password");

            } else if (message.toUpperCase().includes("E-MAIL")) {

                setErrorOrigin("E-mail");

            } else if (message.toUpperCase().includes("PASSWORD")) {

                setErrorOrigin("Password");

            }

            setErrorMessage(message);

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