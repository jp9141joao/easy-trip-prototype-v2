import HeaderForm from "../components/LoginPage/HeaderForm";

import LayoutPage from "../components/ui/LayoutPage";
import { useEffect, useState } from "react";
import LoginGoogle from "../components/LoginPage/LoginGoogle";
import WelcomeSection from "../components/LoginPage/SignInPage/WelcomeSection";
import SignInFormSection from "../components/LoginPage/SignInPage/SignInFormSection";
import RegisterRedirect from "../components/LoginPage/SignInPage/RegisterRedirect";

export default function SignIn() {

    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(false);

    const handleSignIn = () => {

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