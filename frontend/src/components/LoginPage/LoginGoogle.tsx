import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import IconGoogle from "../../assets/login/icon-google.png"

export default function LoginGoogle({ type }: { type: 'Login' | 'Register' }) {

    return (
        <div className="grid place-items-center items-center gap-4 mt-4">
            <div className="flex justify-center items-center gap-2">
                <Separator className=" bg-black" />
                <span className="text-sm text-black">
                    OR
                </span>
                <Separator className=" bg-black" />
            </div>
            <div className="w-full">
                <Button
                    variant={"outline"}
                    className="w-full rounded-4xl bg-white border-black text-black hover:bg-white"
                >
                    <img 
                        src={ IconGoogle }
                        alt="icon-google"
                        className="w-6 h-6 rounded-4xl"
                    />
                    <p className="text-base">
                        { type } with Google
                    </p>
                </Button>     
            </div>
        </div>
    );
}