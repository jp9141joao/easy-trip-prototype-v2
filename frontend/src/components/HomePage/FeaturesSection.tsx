import ImageExpense from '../../assets/home/expense.png'
import ImageItinerary from '../../assets/home/itinerary.jpg'
import ImageToDoList from '../../assets/home/to-do.jpg'
import ImagePiggyBank from '../../assets/home/piggy-bank.jpg'
import { FaRegSquareCheck } from "react-icons/fa6";
import { LuPiggyBank } from "react-icons/lu";
import { MdOutlineMap } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useEffect } from 'react';
import { preload } from 'react-dom';

export const FeaturesSection = () => {

    useEffect(() => {
        const images = [
            ImageExpense,
            ImageItinerary,
            ImageToDoList,
            ImagePiggyBank
        ];

        images.forEach(img => {
            preload(img, { as: 'image' });
        });

    }, [])

    const features = [
        {
            title: 'To-Do List',
            description: 'Keep track of tasks before and during your trip. From packing checklists to sightseeing plans, never miss an important detail.',
            url: ImageToDoList,
            icon: <FaRegSquareCheck className='size-7 sm:size-8 text-green-theme' />
        },
        {
            title: 'Expenses',
            description: 'Easily record and categorize your travel expenses in one place. Stay within budget and make smarter financial decisions throughout your trip.',
            url: ImageExpense,
            icon: <BiMoneyWithdraw className='size-7 sm:size-8 text-green-theme' />
        },
        {
            title: 'My Piggy Bank',
            description: 'Set savings goals and track your progress toward your dream trip. Make budgeting for travel easy and motivating.',
            url: ImagePiggyBank,
            icon: <LuPiggyBank className='size-7 sm:size-8 text-green-theme' />
        },
        {
            title: 'Itinerary',
            description: 'Create and customize your travel itinerary with ease. Organize activities, accommodations, and transport to maximize your experience.',
            url: ImageItinerary,
            icon: <MdOutlineMap className='size-7 sm:size-8 text-green-theme' />
        },
    ];

    return (
        <div className="margin-x-page">
            <div>
                <h1 className="text-3xl sm:text-5xl text-start font-semibold">
                    <strong className='text-green-theme'>
                        Discover</strong> our tools!
                </h1>
            </div>
            <div className="w-full grid lg:grid-cols-2 lg:gap-16 mt-6">
                <div>
                    {
                        features.map((item: any, index: number) => (
                            index < 2 &&
                            <div 
                                key={index}
                                className='grid'
                            >
                                <div>
                                    <img 
                                        src={ item.url }
                                        alt={ item.title }
                                        loading='eager'
                                        className='rounded-2xl xs:h-[40vh] lg:h-[44vh]'                                
                                    />
                                </div>
                                <div className='bg-gray-200 dark:bg-gray-900 rounded-2xl shadow-md -mt-14 mb-10 lg:mb-14 ml-8 sm:ml-20 lg:ml-8 p-3 z-50'>
                                    <div className='flex gap-2'>
                                        <h1 className="text-xl sm:text-3xl font-semibold">
                                            { item.title}
                                        </h1>
                                        <span>
                                            { item.icon }
                                        </span>
                                    </div>
                                    <div>
                                        <p className='sm:text-xl text-gray-800 dark:text-gray-200'>
                                            { item.description }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='lg:mt-36'>
                    {
                        features.map((item: any, index: number) => (
                            index > 1 &&
                            <div 
                                key={index}
                                className='grid'
                            >
                                <div>
                                    <img 
                                        src={ item.url }
                                        alt={ item.title }
                                        loading='eager'
                                        className='rounded-2xl xs:h-[40vh] lg:h-[44vh]'                                
                                    />
                                </div>
                                <div className='bg-gray-200 dark:bg-gray-900 rounded-2xl shadow-md -mt-14 mb-10 lg:mb-14 ml-8 sm:ml-20 lg:ml-8 p-3 z-50'>
                                    <div className='flex gap-2'>
                                        <h1 className="text-xl sm:text-3xl font-semibold">
                                            { item.title}
                                        </h1>
                                        <span>
                                            { item.icon }
                                        </span>
                                    </div>
                                    <div>
                                        <p className='sm:text-xl text-gray-800 dark:text-gray-200'>
                                            { item.description }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
