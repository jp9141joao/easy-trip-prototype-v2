
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Button } from "./ui/button";

export const Sidebar = () => {
    
    const [ showSheet, setShowSheet ] = useState<boolean>(false);
    const items = [
        {
            name: 'Discover',
            href: '/discover'
        },
        {
            name: 'Trips',
            href: '/trips'
        },
        {
            name: 'About us',
            href: '/about-us'
        },
    ]

    useEffect(() => {
        function handleResize() {

            if (window.innerWidth > 640) {
            setShowSheet(false);
          }
        };
    
        window.addEventListener("resize", handleResize);
    
        handleResize();
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <Sheet
            open={showSheet}
            onOpenChange={(open) => {
                
                if (!open) {
                    setShowSheet(false);
                }
            }}
        >
            <SheetTrigger
                onClick={() => setShowSheet(!showSheet)}
                asChild
            >
                {
                    showSheet ?
                    <HiMenuAlt1 className="icon-responsive"/> :
                    <HiMenuAlt3 className="icon-responsive"/>
                }
            </SheetTrigger>
            <SheetContent side="left">
                <div className="grid gap-5 place-items-start mx-[6vw]">
                    <div className="mt-[12vw]">
                        <h1 className="text-3xl text-start font-bold">
                            Easy Trip
                        </h1>
                    </div>
                    <div className="grid gap-4 text-xl">
                        {
                            items.map((item: any) => (
                                <Link
                                    key={ item.name }
                                    to={ item.href }
                                >
                                    { item.name }
                                </Link>
                            ))
                        }
                    </div>
                    <div className="w-full">
                        <Button
                            type="button"
                            className="w-full rounded-3xl font-semibold"
                        >
                            Sign in
                        </Button>
                </div>
                </div>
                
                <div className="w-full absolute bottom-0">
                    <p className="text-center">
                        Created by Joao Pedro de Paula.
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    )
}