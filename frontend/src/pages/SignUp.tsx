import { useEffect, useState } from "react";
import HeaderForm from "../components/LoginPage/HeaderForm";
import LayoutPage from "../components/ui/LayoutPage";
import LoginGoogle from "../components/LoginPage/LoginGoogle";
import BrandSection from "../components/LoginPage/SignUpPage/BrandSection";
import SignUpFormSection from "../components/LoginPage/SignUpPage/SignUpFormSection";

export default function SignIn() {

    const [ fullName, setFullName ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(false);

    const handleSignUp = () => {

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
                    />
                    <LoginGoogle 
                        type="Register"
                    />
                </div>
            </div>
        </LayoutPage>
    )
}