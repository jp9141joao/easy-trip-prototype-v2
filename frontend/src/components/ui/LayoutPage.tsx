import React from "react";

export default function LayoutPage({ children }: { children: React.ReactNode }){

    return (
        <div className=''>
            <div className='min-w-[270px] max-w-[100rem]'>
                { children }
            </div>
        </div>
    );
}