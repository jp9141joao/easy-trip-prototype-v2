import { 
    Accordion,
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
} from "./ui/accordion";

export const Footer = () => {

    const questions = [
        {
            question: "How do I get started using the planner?",
            answer: "To use all features, you need to create an account. Once registered, you can create your trips and take advantage of all functionalities."
        },
        {
            question: "What information can I set when creating a trip?",
            answer: "When creating a trip, you can define the number of days, set a budget, add an image, and choose the currency – with automatic conversion to corresponding values."
        },
        {
            question: "How do I organize the details of my trip?",
            answer: "Our planner allows you to build personalized itineraries by adding multiple destinations and daily activities. You can also use the to-do list to track every step of your planning."
        },
        {
            question: "How do I manage my budget?",
            answer: "After setting a budget for the trip, you can track your expenses by recording costs in specific categories. The system automatically updates the total spent, allowing you to see how much is still available."
        },
        {
            question: "How does trip sharing work?",
            answer: "You can invite others to join your trip group. Invited users must accept the invitation through their profile, and they will have access to the itinerary, expense management, to-do list, and currency settings. Only administrators can change important information, such as the trip name."
        }
    ];
    
    return (
        <div className="rounded-t-3xl bg-gray-100">
            <div className="grid place-items-start gap-5 mx-[1.7em] pt-5">
                <div>
                    <h1 className="text-3xl text-start font-extrabold  break-words">
                        EASY TRIP
                    </h1>
                    <h1 className="text-3xl text-start text-green-theme  font-semibold break-words">
                        <strong>
                            FAQ !
                        </strong>
                    </h1>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        {
                            questions.map((item: any, index: number) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index + 1}`}
                                >
                                    <AccordionTrigger>
                                        { item.question }
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        { item.answer }
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
                <div className="w-full mt-2">
                    <p className="text-lg text-center">
                        ℗ Created by Joao Pedro de Paula.
                    </p>
                </div>
            </div>
        </div>
    )
}