import { useEffect } from "react";
import { MdArrowBack , MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function HeaderForm({ goBackTo, closeTo }: {goBackTo?: string, closeTo: string}) {

    const navigate = useNavigate();

    useEffect(() => {
        
    })

    return (
        <div className="relative">
            <div className={`
                absolute flex justify-between items-center px-[0.7em] sm:px-[1.1em] my-2 xs:my-3 ${goBackTo ? "w-full" : ""}
                `}
            >
                <div
                    className={`cursor-pointer ${!goBackTo ? "hidden" : null}`}
                    onClick={() => goBackTo ? navigate(goBackTo) : null}
                >
                    <MdArrowBack className="size-5" />
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => navigate(closeTo)}
                >
                    <MdClose className="size-5" />
                </div>
            </div>
        </div>
    )
}