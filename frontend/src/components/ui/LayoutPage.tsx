import React from "react";

export default function LayoutPage({ children }: { children: React.ReactNode }){

    return (
        <div className='grid place-items-center items-center'>
            <div className='max-w-[100rem]'>
                { children }
            </div>
        </div>
    );
}