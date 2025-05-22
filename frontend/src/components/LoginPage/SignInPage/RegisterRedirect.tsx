import { Link } from "react-router-dom";

export default function RegisterRedirect() {

    return (
        <div className="flex gap-1 justify-center text-base lg:text-sm 2xl:text-base mt-4 px-10 2xs:px-0">
            <p>
                Don't have an account?  <Link to={"/signUp"}>
                                            <strong>
                                                Sign Up!
                                            </strong>
                                        </Link>
            </p>

        </div>
    )
}