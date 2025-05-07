import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function RegisterRedirect() {

    return (
        <div className="flex gap-1 justify-center mt-4">
            <p>
                Don't have an account?
            </p>
            <Link to={"/signUp"}>
                <strong>
                    Sign Up!
                </strong>
            </Link>
        </div>
    )
}