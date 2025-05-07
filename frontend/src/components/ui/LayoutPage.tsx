import React from "react";

export default function LayoutPage({ children }: { children: React.ReactNode }){

    return (
        <div className='lg:grid lg:place-items-center lg:items-center'>
            <div className='max-w-[100rem]'>
                { children }
            </div>
        </div>
    );
}