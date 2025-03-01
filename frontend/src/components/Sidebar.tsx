
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

export const Sidebar = () => {
    
    const [ showSheet, setShowSheet ] = useState<boolean>(false);

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
                <SheetHeader>
                    <SheetTitle>
                        
                    </SheetTitle>
                    <SheetDescription>
                    </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                    <SheetClose asChild>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}