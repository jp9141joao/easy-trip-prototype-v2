import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import IconGoogle from "../../assets/login/icon-google.png"

export default function LoginGoogle({ type }: { type: 'Login' | 'Register' }) {

    return (
        <div className="grid place-items-center items-center gap-4 mt-4 text-base lg:text-sm 2xl:text-base px-6 2xs:px-0">
            <div className="flex justify-center items-center gap-2 min-w-[4em]">
                <Separator className="bg-black dark:bg-white" />
                <span className=" text-black dark:text-white">
                    OR
                </span>
                <Separator className=" bg-black dark:bg-white" />
            </div>
            <div className="w-full">
                <Button
                    variant={"outline"}
                    className="w-full rounded-4xl bg-white border-black dark:border-gray-200 text-black hover:bg-white/85 hover:scale-100"
                >
                    <img 
                        src={ IconGoogle }
                        alt="icon-google"
                        className="w-6 h-6 rounded-4xl"
                    />
                    <p>
                        { type } with Google
                    </p>
                </Button>     
            </div>
        </div>
    );
}