export const Footer = ({ targetRef }: { targetRef: React.RefObject<HTMLDivElement | null> }) => {

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
        <div ref={ targetRef } className="rounded-t-3xl bg-gray-100 dark:bg-gray-800">
            <div className="grid place-items-start gap-5 margin-x-page pt-8 sm:pt-18">
                <div className="lg:flex lg:gap-4">
                    <h1 className="text-3xl sm:text-5xl text-start font-extrabold  break-words">
                        EASY TRIP
                    </h1>
                    <h1 className="text-3xl sm:text-5xl text-start text-green-theme  font-semibold break-words">
                        <strong>
                            FAQ!
                        </strong>
                    </h1>
                </div>
                <div className="w-full grid gap-10 mt-3 ">
                    {
                        questions.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="dark:text-gray-200"
                            >
                                <h3 className="text-lg sm:text-2xl font-semibold">
                                    { item.question }
                                </h3>
                                <p className="sm:text-xl">
                                    { item.answer }
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full flex justify-center gap-2 text-center mt-6 mb-4 break-all">
                    <div>
                        <p className="text-lg sm:text-2xl text-center">
                        © Created by 
                    </p>
                    <a 
                        href="https://www.linkedin.com/in/joaopedrorosadepaula/"
                        className="text-lg sm:text-2xl text-center underline"
                    >
                        João Pedro Rosa de Paula
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}