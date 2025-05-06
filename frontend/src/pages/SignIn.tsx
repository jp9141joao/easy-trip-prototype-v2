import CloseForm from "../components/CloseForm";
import SignInFormSection from "../components/SignInPage/SignInFormSection";
import RegisterRedirect from "../components/SignInPage/RegisterRedirect";
import WelcomeSection from "../components/SignInPage/WelcomeSection";
import LayoutPage from "../components/ui/LayoutPage";
import { useState } from "react";

export default function SignIn() {

    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(false);

    return (
        <LayoutPage>
            <CloseForm />
            <WelcomeSection />
            <SignInFormSection 
                email={ email }
                setEmail={ setEmail }
                password={ password }
                setPassword={ setPassword }
            />
            <RegisterRedirect 
                loading={ loading }
            />
        </LayoutPage>
    )
}