import ImageExpense from '../../assets/home/features/expense.png'
import ImageItinerary from '../../assets/home/features/itinerary.jpg'
import ImageToDoList from '../../assets/home/features/to-do.jpg'
import ImagePiggyBank from '../../assets/home/features/piggy-bank.jpg'
import { FaRegSquareCheck } from "react-icons/fa6";
import { LuPiggyBank } from "react-icons/lu";
import { MdOutlineMap } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";

export const FeaturesSection = () => {

    const features = [
        {
            title: 'To-Do List',
            description: 'Keep track of tasks before and during your trip. From packing checklists to sightseeing plans, never miss an important detail.',
            url: ImageToDoList,
            icon: <FaRegSquareCheck className='icon-responsive text-green-theme' />
        },
        {
            title: 'Expenses',
            description: 'Easily record and categorize your travel expenses in one place. Stay within budget and make smarter financial decisions throughout your trip.',
            url: ImageExpense,
            icon: <BiMoneyWithdraw className='icon-responsive text-green-theme' />
        },
        {
            title: 'My Piggy Bank',
            description: 'Set savings goals and track your progress toward your dream trip. Make budgeting for travel easy and motivating.',
            url: ImagePiggyBank,
            icon: <LuPiggyBank className='icon-responsive text-green-theme' />
        },
        {
            title: 'Itinerary',
            description: 'Create and customize your travel itinerary with ease. Organize activities, accommodations, and transport to maximize your experience.',
            url: ImageItinerary,
            icon: <MdOutlineMap className='icon-responsive text-green-theme' />
        },
    ];

    return (
        <div className="px-[1.7rem] my-4">
            <div>
                <h1 className="text-3xl text-start font-semibold">
                    <strong className='text-green-theme'>
                        Discover</strong> our tools!
                </h1>
            </div>
            <div className="grid my-4">
                {
                    features.map((item: any, index: number) => (
                        <div 
                            key={index}
                            className={`
                                relative 
                                ${
                                    index == 0 || index == 1 ? 'mb-30' : 
                                    index == 2 ? 'mb-24' :
                                    'mb-22'
                                }
                            `}
                        >
                            <div className='relative'>
                                <img 
                                    src={item.url}
                                    className='rounded-2xl'                                
                                />
                            </div>
                            <div className='absolute bg-gray-100 rounded-2xl shadow-md -mt-14 ml-8 p-3 z-50'>
                                <div className='flex items-center gap-2'>
                                    <h1 className="text-xl font-semibold">
                                        { item.title}
                                    </h1>
                                    <span className=''>
                                        { item.icon }
                                    </span>
                                </div>
                                <div>
                                    <p className='text-gray-800'>
                                        { item.description }
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
