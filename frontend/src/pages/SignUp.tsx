import { useState } from "react";
import HeaderForm from "../components/HeaderForm";
import BrandSection from "../components/SignUpPage/BrandSection";
import SignUpFormSection from "../components/SignUpPage/SignUpFormSection";
import LayoutPage from "../components/ui/LayoutPage";
import LoginGoogle from "../components/LoginGoogle";

export default function SignIn() {

    const [ fullName, setFullName ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(false);

    () => setLoading(false);

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
                    />
                    <LoginGoogle 
                        type="Register"
                    />
                </div>
            </div>
        </LayoutPage>
    )
}