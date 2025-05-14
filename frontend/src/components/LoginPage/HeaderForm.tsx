import { MdArrowBack , MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function HeaderForm({ goBackTo, closeTo }: {goBackTo?: string, closeTo: string}) {

    const navigate = useNavigate();

    return (
        <div className={`
                absolute right-0 flex justify-between items-center px-[0.7em] sm:px-[1.1em] my-2 xs:my-3 ${goBackTo ? "w-full" : ""}
            `}
        >
            <div
                className={`${!goBackTo ? "hidden" : null}`}
                onClick={() => goBackTo ? navigate(goBackTo) : null}
            >
                <MdArrowBack className="size-5" />
            </div>
            <div onClick={() => navigate(closeTo)}>
                <MdClose className="size-5" />
            </div>
        </div>
    )
}