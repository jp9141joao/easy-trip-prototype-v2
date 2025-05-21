import { IoAlertCircleOutline } from "react-icons/io5";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";


export default function SignInFormSection
(
    { loading, email, setEmail, password, setPassword, handleSignIn, errorMessage, errorOrigin }:
    { 
        loading: boolean, 
        email: string, setEmail: (value:  string) => void, 
        password: string, setPassword: (value: string) => void,
        handleSignIn: () => void,
        errorMessage: string,
        errorOrigin: string
    }
) 
{

    return (
        <div className="grid gap-4 mt-4">
            <div className="grid gap-2">
                <Label htmlFor="email">
                    E-mail
                </Label>
                <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={() => null}
                    placeholder="your@email.com"
                    className={`
                        rounded-4xl
                        ${errorOrigin === "E-mail" || errorOrigin === "E-mail and Password" ? "border-red-500 placeholder:text-red-500 dark:border-red-400 dark:placeholder:text-red-400" : "border-black dark:border-white"}
                    `}
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">
                    Password
                </Label>
                <Input
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onClick={() => null}
                    placeholder="Abc1234#"
                    className={`
                        rounded-4xl
                        ${errorOrigin === "Password" || errorOrigin === "E-mail and Password" ? "border-red-500 placeholder:text-red-500 dark:border-red-400 dark:placeholder:text-red-400" : "border-black dark:border-white"}
                    `}
                />
            </div>
            { 
                errorMessage && (
                    <div className="flex items-center gap-2 text-red-500 dark:text-red-400 max-w-[80vw]">
                        <IoAlertCircleOutline size={20} />
                        <span>  
                            {errorMessage}  
                        </span>
                    </div>
                )
            }
            <div>
                <Button
                    size={"xl"}
                    onClick={handleSignIn}
                    className="w-full text-base sm:text-xl lg:text-base font-semibold"
                >
                    {
                        loading ? 
                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 text-white animate-spin fill-white py-1" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5533C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.723 75.2124 7.41289C69.5422 4.10285 63.2754 1.94025 56.7222 1.05197C51.7666 0.3679 46.7398 0.446843 41.8198 1.27873C39.297 1.6983 37.8255 4.19778 38.4626 6.62326C39.0998 9.04874 41.5717 10.4717 44.0965 10.1071C47.8511 9.53005 51.7015 9.52622 55.4656 10.0962C60.878 10.9201 65.9925 13.1373 70.396 16.5714C74.7995 20.0055 78.3892 24.5698 80.8418 29.841C83.0456 34.3696 84.5159 39.246 85.1999 44.2728C85.6531 47.6269 88.1603 50.0379 91.5303 50.0379C91.9338 50.0379 92.3423 49.9962 92.7521 49.9106C95.209 49.4046 96.5425 46.9181 95.9355 44.4609C95.324 41.9793 94.5211 39.5402 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Carregando...</span>
                        </div> : "Sign In"
                    }
                </Button>
            </div>
        </div>
    );
}