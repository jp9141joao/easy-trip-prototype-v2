import HeaderForm from "../components/HeaderForm";
import SignInFormSection from "../components/SignInPage/SignInFormSection";
import RegisterRedirect from "../components/SignInPage/RegisterRedirect";
import WelcomeSection from "../components/SignInPage/WelcomeSection";
import LayoutPage from "../components/ui/LayoutPage";
import { useEffect, useState } from "react";

export default function SignIn() {

    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(false);
    
    useEffect(() => {
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
                    />
                    <RegisterRedirect />
                </div>
            </div>
        </LayoutPage>
    )
}